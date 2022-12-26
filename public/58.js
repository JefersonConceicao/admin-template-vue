(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/flot_charts.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/flot_charts.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var Flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Flot/jquery.flot.js */ "./node_modules/Flot/jquery.flot.js");
/* harmony import */ var Flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_jquery_flot_resize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/jquery.flot.resize.js */ "./resources/js/jquery.flot.resize.js");
/* harmony import */ var _js_jquery_flot_resize_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_flot_resize_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Flot/jquery.flot.categories.js */ "./node_modules/Flot/jquery.flot.categories.js");
/* harmony import */ var Flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Flot_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Flot_jquery_flot_stack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Flot/jquery.flot.stack.js */ "./node_modules/Flot/jquery.flot.stack.js");
/* harmony import */ var Flot_jquery_flot_stack_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(Flot_jquery_flot_stack_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flot_spline_js_jquery_flot_spline_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flot-spline/js/jquery.flot.spline.min.js */ "./node_modules/flot-spline/js/jquery.flot.spline.min.js");
/* harmony import */ var flot_spline_js_jquery_flot_spline_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flot_spline_js_jquery_flot_spline_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_flot_tooltip_js_jquery_flot_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery.flot.tooltip/js/jquery.flot.tooltip.js */ "./node_modules/jquery.flot.tooltip/js/jquery.flot.tooltip.js");
/* harmony import */ var jquery_flot_tooltip_js_jquery_flot_tooltip_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_flot_tooltip_js_jquery_flot_tooltip_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Flot_jquery_flot_time_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Flot/jquery.flot.time.js */ "./node_modules/Flot/jquery.flot.time.js");
/* harmony import */ var Flot_jquery_flot_time_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(Flot_jquery_flot_time_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var Flot_jquery_flot_pie_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Flot/jquery.flot.pie.js */ "./node_modules/Flot/jquery.flot.pie.js");
/* harmony import */ var Flot_jquery_flot_pie_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(Flot_jquery_flot_pie_js__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "flot_charts",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      /* line chart */
      function showTooltipStats(x, y, contents) {
        $('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css({
          position: 'absolute',
          display: 'none',
          top: y + 5,
          left: x + 5
        }).appendTo("body").fadeIn(200);
      }

      var sales = [[0, 5], [1, 30], [2, 10], [3, 15], [4, 30], [5, 5], [6, 12], [7, 10], [8, 55], [9, 13], [10, 25], [11, 10], [12, 12], [13, 6], [14, 40], [15, 5], [16, 5]];
      var profit = [[0, 3], [1, 20], [2, 5], [3, 2], [4, 20], [5, 3], [6, 2], [7, 0], [8, 3], [9, 1], [10, 0], [11, 1], [12, 0], [13, 2], [14, 1], [15, 20], [16, 5]];
      var plot_id = $("#basicflot");
      var plot = $.plot(plot_id, [{
        data: sales,
        label: "Sales",
        color: "#6699cc"
      }, {
        data: profit,
        label: "Profit",
        color: "#ff6666",
        opacity: "1"
      }], {
        series: {
          lines: {
            show: false
          },
          splines: {
            show: true,
            tension: 0.4,
            lineWidth: 1,
            fill: 0.4
          },
          points: {
            radius: 0,
            show: true
          },
          shadowSize: 2
        },
        legend: {
          container: '#basicFlotLegend1',
          noColumns: 0
        },
        grid: {
          hoverable: true,
          clickable: true,
          borderColor: '#ddd',
          borderWidth: 0,
          labelMargin: 5,
          backgroundColor: '#fff'
        },
        colors: ["#6699cc", "#ff6666"],
        xaxis: {},
        yaxis: {
          ticks: 4
        }
      });
      var previousPoint1 = null;
      plot_id.bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if (item) {
          if (previousPoint1 != item.dataIndex) {
            previousPoint1 = item.dataIndex;
            $("#tooltip").remove();
            var x = item.datapoint[0].toFixed(2),
                y = item.datapoint[1].toFixed(2);
            showTooltipStats(item.pageX, item.pageY, item.series.label + " on " + parseInt(x) + " = " + parseInt(y));
          }
        } else {
          $("#tooltip").remove();
          previousPoint1 = null;
        }
      }).bind("plotclick", function (event, pos, item) {
        if (item) {
          plot.highlight(item.series, item.datapoint);
        }
      }); //line chart start

      $(function () {
        var d1, d2, data, Options;
        d1 = [[1262304000000, 100], [1264982400000, 560], [1267401600000, 1605], [1270080000000, 1129], [1272672000000, 2163], [1275350400000, 1905], [1277942400000, 2002], [1280620800000, 2917], [1283299200000, 2700], [1285891200000, 2700], [1288569600000, 2100], [1291161600000, 2700]];
        d2 = [[1262304000000, 434], [1264982400000, 232], [1267401600000, 875], [1270080000000, 553], [1272672000000, 975], [1275350400000, 1379], [1277942400000, 789], [1280620800000, 1026], [1283299200000, 1240], [1285891200000, 1892], [1288569600000, 1147], [1291161600000, 2256]];
        data = [{
          label: "Total visitors",
          data: d1,
          color: "#66cc99"
        }, {
          label: "Total Sales",
          data: d2,
          color: "#f0ad4e"
        }];
        Options = {
          xaxis: {
            min: new Date(2009, 12, 1).getTime(),
            max: new Date(2010, 11, 2).getTime(),
            mode: "time",
            tickSize: [1, "month"],
            monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            tickLength: 0
          },
          yaxis: {},
          series: {
            lines: {
              show: true,
              fill: false,
              lineWidth: 2
            },
            points: {
              show: true,
              radius: 4.5,
              fill: true,
              fillColor: "#ffffff",
              lineWidth: 2
            }
          },
          grid: {
            hoverable: true,
            clickable: false,
            borderWidth: 0
          },
          legend: {
            container: '#basicFlotLegend',
            show: true
          },
          tooltip: true,
          tooltipOpts: {
            content: '%s: %y'
          }
        };
        var holder = $('#line-chart');

        if (holder.length) {
          $.plot(holder, data, Options);
        }
      }); //line chart end
      //start bar chart

      var d1 = [["1", 100], ["2", 80], ["3", 66], ["4", 48], ["5", 68], ["6", 48], ["7", 66], ["8", 80], ["9", 64], ["10", 48], ["11", 64], ["12", 100]];
      $.plot("#bar-chart", [{
        data: d1,
        label: "Project",
        color: "#dcdcdc"
      }], {
        series: {
          bars: {
            align: "center",
            lineWidth: 0,
            show: !0,
            barWidth: .6,
            fill: .9
          }
        },
        grid: {
          borderColor: "#ddd",
          borderWidth: 1,
          hoverable: !0
        },
        legend: {
          container: '#basicFlotLegend-barchart',
          show: true
        },
        tooltip: true,
        tooltipOpts: {
          content: '%s: %y'
        },
        xaxis: {
          tickColor: "#ddd",
          mode: "categories"
        },
        yaxis: {
          tickColor: "#ddd"
        },
        shadowSize: 0
      }); //end bar chart
      //start bar stack

      var d11 = [["Jan", 130], ["Feb", 63], ["Mar", 104], ["Apr", 54], ["May", 92], ["Jun", 150], ["Jul", 50], ["Aug", 80], ["Sep", 120], ["Oct", 91], ["Nov", 79], ["Dec", 112]];
      var d12 = [["Jan", 58], ["Feb", 30], ["Mar", 46], ["Apr", 35], ["May", 55], ["Jun", 46], ["Jul", 20], ["Aug", 50], ["Sep", 50], ["Oct", 40], ["Nov", 35], ["Dec", 57]];
      $.plot("#bar-chart-stacked", [{
        data: d11,
        label: "New Visitor",
        color: "#6699cc"
      }, {
        data: d12,
        label: "Returning Visitor",
        color: "#66cc99"
      }], {
        series: {
          stack: !0,
          bars: {
            align: "center",
            lineWidth: 0,
            show: !0,
            barWidth: .6,
            fill: .9
          }
        },
        grid: {
          borderColor: "#ddd",
          borderWidth: 1,
          hoverable: !0
        },
        legend: {
          container: '#basicFlotLegend-stac',
          show: true
        },
        tooltip: !0,
        tooltipOpts: {
          content: "%x : %y",
          defaultTheme: false
        },
        xaxis: {
          tickColor: "#ddd",
          mode: "categories"
        },
        yaxis: {
          tickColor: "#ddd"
        },
        shadowSize: 0
      }); //end bar chart stack
      //donut

      var datax = [{
        label: "Google+",
        data: 180,
        color: '#ff6666'
      }, {
        label: "Profile",
        data: 150,
        color: '#f0ad4e'
      }, {
        label: "Facebook ",
        data: 130,
        color: '#6699cc'
      }, {
        label: "Twitter ",
        data: 190,
        color: '#66ccff'
      }, {
        label: "Linkedin",
        data: 120,
        color: '#6699cc'
      }];
      $.plot($("#donut"), datax, {
        series: {
          pie: {
            innerRadius: 0.5,
            show: true
          }
        },
        legend: {
          show: false
        },
        grid: {
          hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
          content: "%p.0%, %s"
        }
      });
      /*END OF DONUT CHART */

      /* PIE CHART  START*/

      $(function () {
        var data = [],
            series = Math.floor(Math.random() * 6) + 3;

        for (var i = 0; i < series; i++) {
          data[i] = {
            label: "Series" + (i + 1),
            data: Math.floor(Math.random() * 100) + 1
          };
        }

        $.plot("#placeholdertranslabel", data, {
          series: {
            pie: {
              show: true,
              radius: 1,
              label: {
                show: true,
                radius: 1,
                formatter: labelFormatter,
                background: {
                  opacity: 0.8
                }
              }
            }
          },
          legend: {
            show: false
          },
          colors: ['#6699cc', '#f0ad4e', '#66ccff', '#dcdcdc']
        });
        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
      });

      function labelFormatter(label, series) {
        return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
      } //end of transparent label pie charts


      $(function () {
        var data = [],
            series = Math.floor(Math.random() * 6) + 3;

        for (var i = 0; i < series; i++) {
          data[i] = {
            label: "Series" + (i + 1),
            data: Math.floor(Math.random() * 100) + 1
          };
        }

        $.plot('#placeholdertiltedpie', data, {
          series: {
            pie: {
              show: true,
              radius: 1,
              tilt: 0.5,
              label: {
                show: true,
                radius: 1,
                formatter: labelFormatter,
                background: {
                  opacity: 0.8
                }
              },
              combine: {
                color: "#999",
                threshold: 0.1
              }
            }
          },
          legend: {
            show: false
          },
          colors: ['#DCDCDC', '#f0ad4e', '#6699cc', '#66ccff']
        });
        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
      });
      /* server load  */

      var data = [],
          totalPoints = 300;

      function getRandomData() {
        if (data.length > 0) data = data.slice(1); // do a random walk

        while (data.length < totalPoints) {
          var prev = data.length > 0 ? data[data.length - 1] : 50;
          var y = prev + Math.random() * 10 - 5;
          if (y < 0) y = 0;
          if (y > 100) y = 100;
          data.push(y);
        } // zip the generated y values with the x values


        var res = [];

        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]]);
        }

        return res;
      } // setup control widget


      var updateInterval = 50; // setup plot

      var options = {
        colors: ["#66ccff"],
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 0.5
              }, {
                opacity: 0.5
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
      var plot4 = $.plot($("#realtime"), [getRandomData()], options);

      function update() {
        plot4.setData([getRandomData()]); // since the axes don't change, we don't need to call plot.setupGrid()

        plot4.draw();
        setTimeout(update, updateInterval);
      }

      update(); //start area chart

      var da1 = [["Jan", 50], ["Feb", 80], ["Mar", 60], ["Apr", 90], ["May", 60], ["Jun", 80], ["Jul", 80]];
      var da2 = [["Jan", 20], ["Feb", 40], ["Mar", 30], ["Apr", 40], ["May", 30], ["Jun", 30], ["Jul", 50]];
      $.plot("#area-chart", [{
        data: da1,
        label: "Product 1",
        color: "#66ccff"
      }, {
        data: da2,
        label: "product 2",
        color: "#f0ad4e"
      }], {
        series: {
          lines: {
            show: !0,
            fill: .8
          },
          points: {
            show: !0,
            radius: 4
          }
        },
        grid: {
          borderColor: "#ddd",
          borderWidth: 1,
          hoverable: !0
        },
        tooltip: !0,
        tooltipOpts: {
          content: "%x : %y",
          defaultTheme: false
        },
        xaxis: {
          tickColor: "#ddd",
          mode: "categories"
        },
        yaxis: {
          tickColor: "#ddd"
        },
        shadowSize: 0
      }); //end  area chart
      //start spline area chart

      var ds1 = [["Jan", 50], ["Feb", 80], ["Mar", 60], ["Apr", 90], ["May", 60], ["Jun", 80], ["Jul", 70]];
      var ds2 = [["Jan", 20], ["Feb", 40], ["Mar", 30], ["Apr", 40], ["May", 30], ["Jun", 30], ["Jul", 50]];
      $.plot("#chart-spline", [{
        data: ds1,
        label: "Product 1",
        color: "#DCDCDC"
      }, {
        data: ds2,
        label: "Product 2",
        color: "#66ccff"
      }], {
        series: {
          lines: {
            show: !1
          },
          splines: {
            show: !0,
            tension: .4,
            lineWidth: 2,
            fill: .8
          },
          points: {
            show: !0,
            radius: 4
          }
        },
        grid: {
          borderColor: "#ddd",
          borderWidth: 1,
          hoverable: !0
        },
        tooltip: !0,
        tooltipOpts: {
          content: "%x : %y",
          defaultTheme: false
        },
        xaxis: {
          tickColor: "#ddd",
          mode: "categories"
        },
        yaxis: {
          tickColor: "#ddd"
        },
        shadowSize: 0
      }); //end spline area chart
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flotChart {\r\n    width    : 100%;\r\n    height   : 320px;\r\n    position : relative;\n}\n.flotChart1 {\r\n    width    : 100%;\r\n    height   : 300px;\r\n    position : relative;\n}\n#basicFlotLegend .legendLabel,\r\n#basicFlotLegend-barchart .legendLabel,\r\n#basicFlotLegend-stac .legendLabel {\r\n    padding-left  : 4px;\r\n    padding-right : 6px;\n}\n#basicFlotLegend1 .legendLabel {\r\n    padding-left  : 4px;\r\n    padding-right : 6px;\n}\n#area-chart .legendLabel,\r\n#chart-spline .legendLabel {\r\n    padding-left  : 4px;\r\n    padding-right : 3px;\n}\n#area-chart .legendColorBox,\r\n#chart-spline .legendColorBox {\r\n    padding-top : 3px;\n}\n#tooltip {\r\n    clear            : both;\r\n    z-index          : 100;\r\n    background-color : #736e6e;\r\n    padding          : 5px;\r\n    color            : #fff;\n}\n#tooltip .label {\r\n    clear         : both;\r\n    display       : block;\r\n    margin-bottom : 2px;\n}\n.card.body-bg .card-body{\r\n    background : #66ccff;\n}\n.flotChart2 {\r\n    width  : 100%;\r\n    height : 365px;\n}\n.flotChart3 {\r\n    width  : 100%;\r\n    height : 250px;\n}\n@media (max-width : 425px) {\n#bar-chart-stacked .flot-x-axis {\r\n        font-size : 9px;\n}\n}\n.flotTip{\r\n    display: none !important;\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./flot_charts.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/flot_charts.vue?vue&type=template&id=6998e6c6&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/flot_charts.vue?vue&type=template&id=6998e6c6& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            {
              attrs: {
                title: "<i class='ti-bar-chart-alt'></i> Spline Line Chart"
              }
            },
            [
              _c("div", {
                staticClass: "flotLegend",
                attrs: { id: "basicFlotLegend1" }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "flotChart",
                attrs: { id: "basicflot" }
              })
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
            { attrs: { title: "<i class='ti-bar-chart-alt'></i> Line Chart" } },
            [
              _c("div", {
                staticClass: "flotLegend",
                attrs: { id: "basicFlotLegend" }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "flotChart1",
                attrs: { id: "line-chart" }
              })
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
        { staticClass: "col-lg-6" },
        [
          _c(
            "card",
            {
              staticClass: "body-bg",
              attrs: { title: "<i class='ti-bar-chart'></i> Bar Charts" }
            },
            [
              _c("div", {
                staticClass: "flotLegend",
                attrs: { id: "basicFlotLegend-barchart" }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "flotChart1",
                attrs: { id: "bar-chart" }
              })
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
                title: "<i class='ti-bar-chart'></i> Stacked Bar Charts"
              }
            },
            [
              _c("div", {
                staticClass: "flotLegend",
                attrs: { id: "basicFlotLegend-stac" }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "flotChart1",
                attrs: { id: "bar-chart-stacked" }
              })
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
        { staticClass: "col-lg-4" },
        [
          _c(
            "card",
            { attrs: { title: " <i class='ti-pie-chart'></i> Donut" } },
            [_c("div", { staticClass: "flotChart2", attrs: { id: "donut" } })]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-8" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-pie-chart'></i> Pie Charts" } },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", {
                    staticClass: "flotChart1",
                    attrs: { id: "placeholdertranslabel" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", {
                    staticClass: "flotChart1",
                    attrs: { id: "placeholdertiltedpie" }
                  })
                ])
              ])
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
              attrs: { title: '<i class="ti-bar-chart"></i> Real Time Charts' }
            },
            [
              _c("div", {
                staticClass: "flotChart3",
                attrs: { id: "realtime" }
              })
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
        { staticClass: "col-lg-6" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-bar-chart'></i> Area Chart" } },
            [
              _c("div", {
                staticClass: "flotChart3",
                attrs: { id: "area-chart" }
              })
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
              attrs: { title: "<i class='ti-bar-chart'></i> Spline Area Chart" }
            },
            [
              _c("div", {
                staticClass: "flotChart3",
                attrs: { id: "chart-spline" }
              })
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

/***/ "./resources/components/pages/flot_charts.vue":
/*!****************************************************!*\
  !*** ./resources/components/pages/flot_charts.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flot_charts_vue_vue_type_template_id_6998e6c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flot_charts.vue?vue&type=template&id=6998e6c6& */ "./resources/components/pages/flot_charts.vue?vue&type=template&id=6998e6c6&");
/* harmony import */ var _flot_charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flot_charts.vue?vue&type=script&lang=js& */ "./resources/components/pages/flot_charts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_custom_css_flot_charts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css& */ "./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _flot_charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _flot_charts_vue_vue_type_template_id_6998e6c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _flot_charts_vue_vue_type_template_id_6998e6c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/flot_charts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/flot_charts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/components/pages/flot_charts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flot_charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./flot_charts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/flot_charts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flot_charts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/flot_charts.vue?vue&type=template&id=6998e6c6&":
/*!***********************************************************************************!*\
  !*** ./resources/components/pages/flot_charts.vue?vue&type=template&id=6998e6c6& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flot_charts_vue_vue_type_template_id_6998e6c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./flot_charts.vue?vue&type=template&id=6998e6c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/flot_charts.vue?vue&type=template&id=6998e6c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flot_charts_vue_vue_type_template_id_6998e6c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flot_charts_vue_vue_type_template_id_6998e6c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_flot_charts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./flot_charts.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/flot_charts.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_flot_charts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_flot_charts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_flot_charts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_flot_charts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_flot_charts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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