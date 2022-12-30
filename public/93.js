(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_lc_switch_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../style-loader!../css-loader??ref--5-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--5-2!./lc_switch.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_lc_switch_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_lc_switch_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_lc_switch_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_lc_switch_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_lc_switch_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/LC-switch/lc_switch.js":
/*!*********************************************!*\
  !*** ./node_modules/LC-switch/lc_switch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ------------------------------------------------------------------------
	* LC Switch
	* superlight jQuery plugin improving forms look and functionality
	*
	* @version: 	1.1
	* @requires:	jQuery v1.7 or later
	* @author:		Luca Montanari (LCweb)
	* @website:		https://lcweb.it
	
	* Licensed under the MIT license
------------------------------------------------------------------------- */

(function($){
	"use strict";
	if(typeof($.fn.lc_switch) != 'undefined') {return false;} // prevent multiple script inits
	
	
	
	$.fn.lc_switch = function(on_text, off_text) {

		// destruct
		$.fn.lcs_destroy = function() {
			
			$(this).each(function() {
                var $wrap = $(this).parents('.lcs_wrap');
				
				$wrap.children().not('input').remove();
				$(this).unwrap();
            });
			
			return true;
		};	


		
		// set to ON
		$.fn.lcs_on = function() {
			$(this).each(function(i, v) {
                var $wrap 	= $(this).parents('.lcs_wrap'),
					$input 	= $wrap.find('input');
				
				// if is already on - skip
				if($wrap.find('.lcs_on').length) {
					return true;	
				}
				
				(typeof($.fn.prop) == 'function') ? $input.prop('checked', true) : $input.attr('checked', true);
				
				$input.trigger('lcs-on');
				$input.trigger('lcs-statuschange');
				$wrap.find('.lcs_switch').removeClass('lcs_off').addClass('lcs_on');
				
				// if radio - disable other ones 
				if( $wrap.find('.lcs_switch').hasClass('lcs_radio_switch') ) {
					
					var f_name = $input.attr('name');
					$wrap.parents('form').find('input[name='+f_name+']').not($input).lcs_off();	
				}
            });
			
			return true;
		};	
		
		
		
		// set to OFF
		$.fn.lcs_off = function() {
			
			$(this).each(function() {
                var $wrap 	= $(this).parents('.lcs_wrap'),
					$input 	= $wrap.find('input');
				
				// if is already off - skip
				if(!$wrap.find('.lcs_on').length) {
					return true;	
				}
				
				// uncheck
				(typeof($.fn.prop) == 'function') ? $input.prop('checked', false) : $input.attr('checked', false);
				
				$input.trigger('lcs-off');
				$input.trigger('lcs-statuschange');
				$wrap.find('.lcs_switch').removeClass('lcs_on').addClass('lcs_off');
            });
			
			return true;
		};	
		
		
		
		// toggle status
		$.fn.lcs_toggle = function() {
			$(this).each(function() {
               
				// not for radios
				if( $(this).hasClass('lcs_radio_switch')) {
					return true;	   
				}
				
				($(this).is(':checked')) ? $(this).lcs_off() : $(this).lcs_on();
            });
			
			return true;
		};	
		
		
		
		// construct
		return this.each(function(){
			
			// check against double init
			if( !$(this).parent().hasClass('lcs_wrap') ) {
			
				// default texts
				var ckd_on_txt 	= (typeof(on_text) == 'undefined') ? 'ON' : on_text,
					ckd_off_txt = (typeof(off_text) == 'undefined') ? 'OFF' : off_text;
			   
			   // labels structure
				var on_label 	= (ckd_on_txt) ? '<div class="lcs_label lcs_label_on">'+ ckd_on_txt +'</div>' : '',
					off_label 	= (ckd_off_txt) ? '<div class="lcs_label lcs_label_off">'+ ckd_off_txt +'</div>' : '';
				
				
				// default states
				var disabled 	= ($(this).is(':disabled')) ? true : false,
					active 		= ($(this).is(':checked'))  ? true : false;
				
				var status_classes = '';
				status_classes += (active) ? ' lcs_on' : ' lcs_off'; 
				if(disabled) {
					status_classes += ' lcs_disabled';
				} 
			   
			   
				// wrap and append
				var structure = 
				'<div class="lcs_switch '+status_classes+'">' +
					'<div class="lcs_cursor"></div>' +
					on_label + off_label +
				'</div>';
			   
				if( $(this).is(':input') && ($(this).attr('type') == 'checkbox' || $(this).attr('type') == 'radio') ) {
					
					$(this).wrap('<div class="lcs_wrap"></div>');
					$(this).parent().append(structure);
					
					$(this).parent().find('.lcs_switch').addClass('lcs_'+ $(this).attr('type') +'_switch');
				}
			}
        });
	};	
	
	
	
	// handlers
	$(document).ready(function() {
		
		// on click
		$(document).on('click tap', '.lcs_switch:not(.lcs_disabled)', function(e) {

			if( $(this).hasClass('lcs_on') ) {
				if( !$(this).hasClass('lcs_radio_switch') ) { // not for radio
					$(this).lcs_off();
				}
			} else {
				$(this).lcs_on();	
			}
		});
		
		
		// on checkbox status change
		$(document).on('change', '.lcs_wrap input', function() {
			( $(this).is(':checked') ) ? $(this).lcs_on() : $(this).lcs_off();	
		});
		
	});
	
})(jQuery);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lcs_wrap {\r\n\tdisplay: inline-block;\t\r\n\tdirection: ltr;\r\n\theight: 28px;\r\n    vertical-align: middle;\n}\n.lcs_wrap input {\r\n\tdisplay: none;\n}\n.lcs_switch {\r\n\tdisplay: inline-block;\t\r\n\tposition: relative;\r\n\twidth: 73px;\r\n\theight: 28px;\r\n\tborder-radius: 30px;\r\n\tbackground: #ddd;\r\n\toverflow: hidden;\r\n\tcursor: pointer;\r\n\t\r\n\t-webkit-transition: all .2s ease-in-out;  \r\n\t-ms-transition: \tall .2s ease-in-out; \r\n\ttransition: \t\tall .2s ease-in-out;\n}\n.lcs_cursor {\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\ttop: 3px;\t\r\n\twidth: 22px;\r\n\theight: 22px;\r\n\tborder-radius: 100%;\r\n\tbackground: #fff;\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.1);\r\n\tz-index: 10;\r\n\t\r\n\t-webkit-transition: all .2s linear;  \r\n\t-ms-transition: \tall .2s linear; \r\n\ttransition: \t\tall .2s linear;\n}\n.lcs_label {\r\n\tfont-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    font-size: 12px;\r\n\tletter-spacing: 1px;\r\n\tline-height: 18px;\r\n\tcolor: #fff;\r\n\tfont-weight: bold;\r\n\tposition: absolute;\r\n\twidth: 33px;\r\n\ttop: 5px;\r\n\toverflow: hidden;\r\n\ttext-align: center;\r\n\topacity: 0;\r\n\t\r\n\t-webkit-transition: all .2s ease-in-out .1s;  \r\n\t-ms-transition: \tall .2s ease-in-out .1s;   \r\n\ttransition: \t\tall .2s ease-in-out .1s;\n}\n.lcs_label.lcs_label_on {\r\n\tleft: -70px;\r\n\tz-index: 6;\n}\n.lcs_label.lcs_label_off {\r\n\tright: -70px;\r\n\tz-index: 5;\n}\r\n\r\n\r\n/* on */\n.lcs_switch.lcs_on {\r\n\tbackground: #75b936;\r\n    box-shadow: 0 0 2px #579022 inset;\n}\n.lcs_switch.lcs_on .lcs_cursor {\r\n\tleft: 48px;\n}\n.lcs_switch.lcs_on .lcs_label_on {\r\n\tleft: 10px;\t\r\n\topacity: 1;\n}\r\n\r\n\r\n/* off */\n.lcs_switch.lcs_off {\r\n\tbackground: #b2b2b2;\r\n\tbox-shadow: 0px 0px 2px #a4a4a4 inset;\n}\n.lcs_switch.lcs_off .lcs_cursor {\r\n\tleft: 3px;\n}\n.lcs_switch.lcs_off .lcs_label_off {\r\n\tright: 10px;\r\n\topacity: 1;\n}\r\n\r\n\r\n/* disabled */\n.lcs_switch.lcs_disabled {\r\n\topacity: 0.65;\r\n\tfilter: alpha(opacity=65);\t\r\n\tcursor: default;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nvd3 .nv-axis line,.nvd3 .nv-axis path{fill:none;shape-rendering:crispEdges}.nv-brush .extent,.nvd3 .background path,.nvd3 .nv-axis line,.nvd3 .nv-axis path{shape-rendering:crispEdges}.nv-distx,.nv-disty,.nv-noninteractive,.nvd3 .nv-axis,.nvd3.nv-pie .nv-label,.nvd3.nv-sparklineplus g.nv-hoverValue{pointer-events:none}.nvd3 .nv-axis{opacity:1}.nvd3 .nv-axis.nv-disabled,.nvd3 .nv-controlsWrap .nv-legend .nv-check-box .nv-check{opacity:0}.nvd3 .nv-axis path{stroke:#000;stroke-opacity:.75}.nvd3 .nv-axis path.domain{stroke-opacity:.75}.nvd3 .nv-axis.nv-x path.domain{stroke-opacity:0}.nvd3 .nv-axis line{stroke:#e5e5e5}.nvd3 .nv-axis .zero line, .nvd3 .nv-axis line.zero{stroke-opacity:.75}.nvd3 .nv-axis .nv-axisMaxMin text{font-weight:700}.nvd3 .x .nv-axis .nv-axisMaxMin text,.nvd3 .x2 .nv-axis .nv-axisMaxMin text,.nvd3 .x3 .nv-axis .nv-axisMaxMin text{text-anchor:middle}.nvd3 .nv-bars rect{fill-opacity:.75;transition:fill-opacity 250ms linear}.nvd3 .nv-bars rect.hover{fill-opacity:1}.nvd3 .nv-bars .hover rect{fill:#add8e6}.nvd3 .nv-bars text{fill:transparent}.nvd3 .nv-bars .hover text{fill:rgba(0,0,0,1)}.nvd3 .nv-discretebar .nv-groups rect,.nvd3 .nv-multibar .nv-groups rect,.nvd3 .nv-multibarHorizontal .nv-groups rect{stroke-opacity:0;transition:fill-opacity 250ms linear}.with-transitions .nv-candlestickBar .nv-ticks .nv-tick,.with-transitions .nvd3 .nv-groups .nv-point{transition:stroke-width 250ms linear,stroke-opacity 250ms linear}.nvd3 .nv-candlestickBar .nv-ticks rect:hover,.nvd3 .nv-discretebar .nv-groups rect:hover,.nvd3 .nv-multibar .nv-groups rect:hover,.nvd3 .nv-multibarHorizontal .nv-groups rect:hover{fill-opacity:1}.nvd3 .nv-discretebar .nv-groups text,.nvd3 .nv-multibarHorizontal .nv-groups text{font-weight:700;fill:rgba(0,0,0,1);stroke:transparent}.nvd3 .nv-boxplot circle{fill-opacity:.5}.nvd3 .nv-boxplot circle:hover,.nvd3 .nv-boxplot rect:hover{fill-opacity:1}.nvd3 line.nv-boxplot-median{stroke:#000}.nv-boxplot-tick:hover{stroke-width:2.5px}.nvd3.nv-bullet{font:10px sans-serif}.nvd3.nv-bullet .nv-measure{fill-opacity:.8}.nvd3.nv-bullet .nv-measure:hover{fill-opacity:1}.nvd3.nv-bullet .nv-marker{stroke:#000;stroke-width:2px}.nvd3.nv-bullet .nv-markerTriangle{stroke:#000;fill:#fff;stroke-width:1.5px}.nvd3.nv-bullet .nv-markerLine{stroke:#000;stroke-width:1.5px}.nvd3.nv-bullet .nv-tick line{stroke:#666;stroke-width:.5px}.nvd3.nv-bullet .nv-range.nv-s0{fill:#eee}.nvd3.nv-bullet .nv-range.nv-s1{fill:#ddd}.nvd3.nv-bullet .nv-range.nv-s2{fill:#ccc}.nvd3.nv-bullet .nv-title{font-size:14px;font-weight:700}.nvd3.nv-bullet .nv-subtitle{fill:#999}.nvd3.nv-bullet .nv-range{fill:#bababa;fill-opacity:.4}.nvd3.nv-bullet .nv-range:hover{fill-opacity:.7}.nvd3.nv-candlestickBar .nv-ticks .nv-tick{stroke-width:1px}.nvd3.nv-candlestickBar .nv-ticks .nv-tick.hover{stroke-width:2px}.nvd3.nv-candlestickBar .nv-ticks .nv-tick.positive rect{stroke:#2ca02c;fill:#2ca02c}.nvd3.nv-candlestickBar .nv-ticks .nv-tick.negative rect{stroke:#d62728;fill:#d62728}.nvd3.nv-candlestickBar .nv-ticks line{stroke:#333}.nv-force-node{stroke:#fff;stroke-width:1.5px}.nv-force-link{stroke:#999;stroke-opacity:.6}.nv-force-node text{stroke-width:0}.nvd3 .nv-check-box .nv-box{fill-opacity:0;stroke-width:2}.nvd3 .nv-check-box .nv-check{fill-opacity:0;stroke-width:4}.nvd3 .nv-series.nv-disabled .nv-check-box .nv-check{fill-opacity:0;stroke-opacity:0}.nvd3.nv-linePlusBar .nv-bar rect{fill-opacity:.75}.nvd3.nv-linePlusBar .nv-bar rect:hover{fill-opacity:1}.nvd3 .nv-groups path.nv-line{fill:none}.nvd3 .nv-groups path.nv-area{stroke:none}.nvd3.nv-line .nvd3.nv-scatter .nv-groups .nv-point{fill-opacity:0;stroke-opacity:0}.nvd3.nv-scatter.nv-single-point .nv-groups .nv-point{fill-opacity:.5!important;stroke-opacity:.5!important}.nvd3 .nv-groups .nv-point.hover,.nvd3.nv-scatter .nv-groups .nv-point.hover{stroke-width:7px;fill-opacity:.95!important;stroke-opacity:.95!important}.nvd3 .nv-point-paths path{stroke:#aaa;stroke-opacity:0;fill:#eee;fill-opacity:0}.nvd3 .nv-indexLine{cursor:ew-resize}svg.nvd3-svg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%;height:100%}.nvtooltip.with-3d-shadow,.with-3d-shadow .nvtooltip{box-shadow:0 5px 10px rgba(0,0,0,.2);border-radius:5px}.nvd3 text{font:400 12px Arial,sans-serif}.nvd3 .title{font:700 14px Arial,sans-serif}.nvd3 .nv-background{fill:#fff;fill-opacity:0}.nvd3.nv-noData{font-size:18px;font-weight:700}.nv-brush .extent{fill-opacity:.125}.nv-brush .resize path{fill:#eee;stroke:#666}.nvd3 .nv-legend .nv-series{cursor:pointer}.nvd3 .nv-legend .nv-disabled circle{fill-opacity:0}.nvd3 .nv-brush .extent{fill-opacity:0!important}.nvd3 .nv-brushBackground rect{stroke:#000;stroke-width:.4;fill:#fff;fill-opacity:.7}@media print{.nvd3 text{stroke-width:0;fill-opacity:1}}.nvd3.nv-ohlcBar .nv-ticks .nv-tick{stroke-width:1px}.nvd3.nv-ohlcBar .nv-ticks .nv-tick.hover{stroke-width:2px}.nvd3.nv-ohlcBar .nv-ticks .nv-tick.positive{stroke:#2ca02c}.nvd3.nv-ohlcBar .nv-ticks .nv-tick.negative{stroke:#d62728}.nvd3 .background path{fill:none;stroke:#EEE;stroke-opacity:.4}.nvd3 .foreground path{fill:none;stroke-opacity:.7}.nvd3 .nv-parallelCoordinates-brush .extent{fill:#fff;fill-opacity:.6;stroke:gray;shape-rendering:crispEdges}.nvd3 .nv-parallelCoordinates .hover{fill-opacity:1;stroke-width:3px}.nvd3 .missingValuesline line{fill:none;stroke:#000;stroke-width:1;stroke-opacity:1;stroke-dasharray:5,5}.nvd3.nv-pie .nv-pie-title{font-size:24px;fill:rgba(19,196,249,.59)}.nvd3.nv-pie .nv-slice text{stroke:#000;stroke-width:0}.nvd3.nv-pie path{transition:fill-opacity 250ms linear,stroke-width 250ms linear,stroke-opacity 250ms linear;stroke:#fff;stroke-width:1px;stroke-opacity:1;fill-opacity:.7}.nvd3.nv-pie .hover path{fill-opacity:1}.nvd3.nv-pie .nv-label rect{fill-opacity:0;stroke-opacity:0}.nvd3 .nv-groups .nv-point.hover{stroke-width:20px;stroke-opacity:.5}.nvd3 .nv-scatter .nv-point.hover{fill-opacity:1}.nvd3.nv-sparkline path{fill:none}.nvd3.nv-sparklineplus .nv-hoverValue line{stroke:#333;stroke-width:1.5px}.nvd3.nv-sparklineplus,.nvd3.nv-sparklineplus g{pointer-events:all}.nvd3 .nv-interactiveGuideLine,.nvtooltip{pointer-events:none}.nvd3 .nv-hoverArea{fill-opacity:0;stroke-opacity:0}.nvd3.nv-sparklineplus .nv-xValue,.nvd3.nv-sparklineplus .nv-yValue{stroke-width:0;font-size:.9em;font-weight:400}.nvd3.nv-sparklineplus .nv-yValue{stroke:#f66}.nvd3.nv-sparklineplus .nv-maxValue{stroke:#2ca02c;fill:#2ca02c}.nvd3.nv-sparklineplus .nv-minValue{stroke:#d62728;fill:#d62728}.nvd3.nv-sparklineplus .nv-currentValue{font-weight:700;font-size:1.1em}.nvtooltip h3,.nvtooltip table td.key{font-weight:400}.nvd3.nv-stackedarea path.nv-area{fill-opacity:.7;stroke-opacity:0;transition:fill-opacity 250ms linear,stroke-opacity 250ms linear}.nvd3.nv-stackedarea path.nv-area.hover{fill-opacity:.9}.nvd3.nv-stackedarea .nv-groups .nv-point{stroke-opacity:0;fill-opacity:0}.nvtooltip{position:absolute;color:rgba(0,0,0,1);padding:1px;z-index:10000;display:block;font-family:Arial,sans-serif;font-size:13px;text-align:left;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:rgba(255,255,255,.8);border:1px solid rgba(0,0,0,.5);border-radius:4px}.nvtooltip h3,.nvtooltip p{margin:0;text-align:center}.nvtooltip.with-transitions,.with-transitions .nvtooltip{transition:opacity 50ms linear;transition-delay:200ms}.nvtooltip.x-nvtooltip,.nvtooltip.y-nvtooltip{padding:8px}.nvtooltip h3{padding:4px 14px;line-height:18px;background-color:rgba(247,247,247,.75);color:rgba(0,0,0,1);border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.nvtooltip p{padding:5px 14px}.nvtooltip span{display:inline-block;margin:2px 0}.nvtooltip table{margin:6px;border-spacing:0}.nvtooltip table td{padding:2px 9px 2px 0;vertical-align:middle}.nvtooltip table td.key.total{font-weight:700}.nvtooltip table td.value{text-align:right;font-weight:700}.nvtooltip table td.percent{color:#a9a9a9}.nvtooltip table tr.highlight td{padding:1px 9px 1px 0;border-bottom-style:solid;border-bottom-width:1px;border-top-style:solid;border-top-width:1px}.nvtooltip table td.legend-color-guide div{vertical-align:middle;width:12px;height:12px;border:1px solid #999}.nvtooltip .footer{padding:3px;text-align:center}.nvtooltip-pending-removal{pointer-events:none;display:none}.nvd3 line.nv-guideline{stroke:#ccc}", ""]);

// exports


/***/ }),

/***/ "./node_modules/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 * jquery.flot.tooltip
 * 
 * description: easy-to-use tooltips for Flot charts
 * version: 0.9.0
 * authors: Krzysztof Urbas @krzysu [myviews.pl],Evan Steinkerchner @Roundaround
 * website: https://github.com/krzysu/flot.tooltip
 * 
 * build on 2016-07-26
 * released under MIT License, 2012
*/ 
!function(a){var b={tooltip:{show:!1,cssClass:"flotTip",content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,monthNames:null,dayNames:null,shifts:{x:10,y:20},defaultTheme:!0,snap:!0,lines:!1,clickTips:!1,onHover:function(a,b){},$compat:!1}};b.tooltipOpts=b.tooltip;var c=function(a){this.tipPosition={x:0,y:0},this.init(a)};c.prototype.init=function(b){function c(a){var c={};c.x=a.pageX,c.y=a.pageY,b.setTooltipPosition(c)}function d(c,d,g){f.clickmode?(a(b.getPlaceholder()).bind("plothover",e),b.hideTooltip(),f.clickmode=!1):(e(c,d,g),f.getDomElement().is(":visible")&&(a(b.getPlaceholder()).unbind("plothover",e),f.clickmode=!0))}function e(c,d,e){var g=function(a,b,c,d){return Math.sqrt((c-a)*(c-a)+(d-b)*(d-b))},h=function(a,b,c,d,e,f,h){if(!h||(h=function(a,b,c,d,e,f){if("undefined"!=typeof c)return{x:c,y:b};if("undefined"!=typeof d)return{x:a,y:d};var g,h=-1/((f-d)/(e-c));return{x:g=(e*(a*h-b+d)+c*(a*-h+b-f))/(h*(e-c)+d-f),y:h*g-h*a+b}}(a,b,c,d,e,f),h.x>=Math.min(c,e)&&h.x<=Math.max(c,e)&&h.y>=Math.min(d,f)&&h.y<=Math.max(d,f))){var i=d-f,j=e-c,k=c*f-d*e;return Math.abs(i*a+j*b+k)/Math.sqrt(i*i+j*j)}var l=g(a,b,c,d),m=g(a,b,e,f);return l>m?m:l};if(e)b.showTooltip(e,f.tooltipOptions.snap?e:d);else if(f.plotOptions.series.lines.show&&f.tooltipOptions.lines===!0){var i=f.plotOptions.grid.mouseActiveRadius,j={distance:i+1},k=d;a.each(b.getData(),function(a,c){for(var e=0,i=-1,l=1;l<c.data.length;l++)c.data[l-1][0]<=d.x&&c.data[l][0]>=d.x&&(e=l-1,i=l);if(-1===i)return void b.hideTooltip();var m={x:c.data[e][0],y:c.data[e][1]},n={x:c.data[i][0],y:c.data[i][1]},o=h(c.xaxis.p2c(d.x),c.yaxis.p2c(d.y),c.xaxis.p2c(m.x),c.yaxis.p2c(m.y),c.xaxis.p2c(n.x),c.yaxis.p2c(n.y),!1);if(o<j.distance){var p=g(m.x,m.y,d.x,d.y)<g(d.x,d.y,n.x,n.y)?e:i,q=(c.datapoints.pointsize,[d.x,m.y+(n.y-m.y)*((d.x-m.x)/(n.x-m.x))]),r={datapoint:q,dataIndex:p,series:c,seriesIndex:a};j={distance:o,item:r},f.tooltipOptions.snap&&(k={pageX:c.xaxis.p2c(q[0]),pageY:c.yaxis.p2c(q[1])})}}),j.distance<i+1?b.showTooltip(j.item,k):b.hideTooltip()}else b.hideTooltip()}var f=this,g=a.plot.plugins.length;if(this.plotPlugins=[],g)for(var h=0;g>h;h++)this.plotPlugins.push(a.plot.plugins[h].name);b.hooks.bindEvents.push(function(b,g){if(f.plotOptions=b.getOptions(),"boolean"==typeof f.plotOptions.tooltip&&(f.plotOptions.tooltipOpts.show=f.plotOptions.tooltip,f.plotOptions.tooltip=f.plotOptions.tooltipOpts,delete f.plotOptions.tooltipOpts),f.plotOptions.tooltip.show!==!1&&"undefined"!=typeof f.plotOptions.tooltip.show){f.tooltipOptions=f.plotOptions.tooltip,f.tooltipOptions.$compat?(f.wfunc="width",f.hfunc="height"):(f.wfunc="innerWidth",f.hfunc="innerHeight");f.getDomElement();a(b.getPlaceholder()).bind("plothover",e),f.tooltipOptions.clickTips&&a(b.getPlaceholder()).bind("plotclick",d),f.clickmode=!1,a(g).bind("mousemove",c)}}),b.hooks.shutdown.push(function(b,f){a(b.getPlaceholder()).unbind("plothover",e),a(b.getPlaceholder()).unbind("plotclick",d),b.removeTooltip(),a(f).unbind("mousemove",c)}),b.setTooltipPosition=function(b){var c=f.getDomElement(),d=c.outerWidth()+f.tooltipOptions.shifts.x,e=c.outerHeight()+f.tooltipOptions.shifts.y;b.x-a(window).scrollLeft()>a(window)[f.wfunc]()-d&&(b.x-=d,b.x=Math.max(b.x,0)),b.y-a(window).scrollTop()>a(window)[f.hfunc]()-e&&(b.y-=e),isNaN(b.x)?f.tipPosition.x=f.tipPosition.xPrev:(f.tipPosition.x=b.x,f.tipPosition.xPrev=b.x),isNaN(b.y)?f.tipPosition.y=f.tipPosition.yPrev:(f.tipPosition.y=b.y,f.tipPosition.yPrev=b.y)},b.showTooltip=function(a,c,d){var e=f.getDomElement(),g=f.stringFormat(f.tooltipOptions.content,a);""!==g&&(e.html(g),b.setTooltipPosition({x:f.tipPosition.x,y:f.tipPosition.y}),e.css({left:f.tipPosition.x+f.tooltipOptions.shifts.x,top:f.tipPosition.y+f.tooltipOptions.shifts.y}).show(),"function"==typeof f.tooltipOptions.onHover&&f.tooltipOptions.onHover(a,e))},b.hideTooltip=function(){f.getDomElement().hide().html("")},b.removeTooltip=function(){f.getDomElement().remove()}},c.prototype.getDomElement=function(){var b=a("<div>");return this.tooltipOptions&&this.tooltipOptions.cssClass&&(b=a("."+this.tooltipOptions.cssClass),0===b.length&&(b=a("<div />").addClass(this.tooltipOptions.cssClass),b.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&b.css({background:"#fff","z-index":"1040",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"}))),b},c.prototype.stringFormat=function(a,b){var c,d,e,f,g,h=/%p\.{0,1}(\d{0,})/,i=/%s/,j=/%c/,k=/%lx/,l=/%ly/,m=/%x\.{0,1}(\d{0,})/,n=/%y\.{0,1}(\d{0,})/,o="%x",p="%y",q="%ct",r="%n";if("undefined"!=typeof b.series.threshold?(c=b.datapoint[0],d=b.datapoint[1],e=b.datapoint[2]):"undefined"!=typeof b.series.curvedLines?(c=b.datapoint[0],d=b.datapoint[1]):"undefined"!=typeof b.series.lines&&b.series.lines.steps?(c=b.series.datapoints.points[2*b.dataIndex],d=b.series.datapoints.points[2*b.dataIndex+1],e=""):(c=b.series.data[b.dataIndex][0],d=b.series.data[b.dataIndex][1],e=b.series.data[b.dataIndex][2]),null===b.series.label&&b.series.originSeries&&(b.series.label=b.series.originSeries.label),"function"==typeof a&&(a=a(b.series.label,c,d,b)),"boolean"==typeof a&&!a)return"";if(e&&(a=a.replace(q,e)),"undefined"!=typeof b.series.percent?f=b.series.percent:"undefined"!=typeof b.series.percents&&(f=b.series.percents[b.dataIndex]),"number"==typeof f&&(a=this.adjustValPrecision(h,a,f)),b.series.hasOwnProperty("pie")&&"undefined"!=typeof b.series.data[0][1]&&(g=b.series.data[0][1]),"number"==typeof g&&(a=a.replace(r,g)),a="undefined"!=typeof b.series.label?a.replace(i,b.series.label):a.replace(i,""),a="undefined"!=typeof b.series.color?a.replace(j,b.series.color):a.replace(j,""),a=this.hasAxisLabel("xaxis",b)?a.replace(k,b.series.xaxis.options.axisLabel):a.replace(k,""),a=this.hasAxisLabel("yaxis",b)?a.replace(l,b.series.yaxis.options.axisLabel):a.replace(l,""),this.isTimeMode("xaxis",b)&&this.isXDateFormat(b)&&(a=a.replace(m,this.timestampToDate(c,this.tooltipOptions.xDateFormat,b.series.xaxis.options))),this.isTimeMode("yaxis",b)&&this.isYDateFormat(b)&&(a=a.replace(n,this.timestampToDate(d,this.tooltipOptions.yDateFormat,b.series.yaxis.options))),"number"==typeof c&&(a=this.adjustValPrecision(m,a,c)),"number"==typeof d&&(a=this.adjustValPrecision(n,a,d)),"undefined"!=typeof b.series.xaxis.ticks){var s;s=this.hasRotatedXAxisTicks(b)?"rotatedTicks":"ticks";var t=b.dataIndex+b.seriesIndex;for(var u in b.series.xaxis[s])if(b.series.xaxis[s].hasOwnProperty(t)&&!this.isTimeMode("xaxis",b)){var v=this.isCategoriesMode("xaxis",b)?b.series.xaxis[s][t].label:b.series.xaxis[s][t].v;v===c&&(a=a.replace(m,b.series.xaxis[s][t].label.replace(/\$/g,"$$$$")))}}if("undefined"!=typeof b.series.yaxis.ticks)for(var w in b.series.yaxis.ticks)if(b.series.yaxis.ticks.hasOwnProperty(w)){var x=this.isCategoriesMode("yaxis",b)?b.series.yaxis.ticks[w].label:b.series.yaxis.ticks[w].v;x===d&&(a=a.replace(n,b.series.yaxis.ticks[w].label.replace(/\$/g,"$$$$")))}return"undefined"!=typeof b.series.xaxis.tickFormatter&&(a=a.replace(o,b.series.xaxis.tickFormatter(c,b.series.xaxis).replace(/\$/g,"$$"))),"undefined"!=typeof b.series.yaxis.tickFormatter&&(a=a.replace(p,b.series.yaxis.tickFormatter(d,b.series.yaxis).replace(/\$/g,"$$"))),a},c.prototype.isTimeMode=function(a,b){return"undefined"!=typeof b.series[a].options.mode&&"time"===b.series[a].options.mode},c.prototype.isXDateFormat=function(a){return"undefined"!=typeof this.tooltipOptions.xDateFormat&&null!==this.tooltipOptions.xDateFormat},c.prototype.isYDateFormat=function(a){return"undefined"!=typeof this.tooltipOptions.yDateFormat&&null!==this.tooltipOptions.yDateFormat},c.prototype.isCategoriesMode=function(a,b){return"undefined"!=typeof b.series[a].options.mode&&"categories"===b.series[a].options.mode},c.prototype.timestampToDate=function(b,c,d){var e=a.plot.dateGenerator(b,d);return a.plot.formatDate(e,c,this.tooltipOptions.monthNames,this.tooltipOptions.dayNames)},c.prototype.adjustValPrecision=function(a,b,c){var d,e=b.match(a);return null!==e&&""!==RegExp.$1&&(d=RegExp.$1,c=c.toFixed(d),b=b.replace(a,c)),b},c.prototype.hasAxisLabel=function(b,c){return-1!==a.inArray("axisLabels",this.plotPlugins)&&"undefined"!=typeof c.series[b].options.axisLabel&&c.series[b].options.axisLabel.length>0},c.prototype.hasRotatedXAxisTicks=function(b){return-1!==a.inArray("tickRotor",this.plotPlugins)&&"undefined"!=typeof b.series.xaxis.rotatedTicks};var d=function(a){new c(a)};a.plot.plugins.push({init:d,options:b,name:"tooltip",version:"0.8.5"})}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css&":
/*!********************************************************************************!*\
  !*** ./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_nv_d3_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--5-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--5-2!./nv.d3.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_nv_d3_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_nv_d3_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_nv_d3_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_nv_d3_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_nv_d3_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--5-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--5-2!./lc_switch.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--5-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--5-2!./nv.d3.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-fullscreen/src/component.vue":
/*!*******************************************************!*\
  !*** ./node_modules/vue-fullscreen/src/component.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_vue_vue_type_template_id_c03a9ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.vue?vue&type=template&id=c03a9ea8& */ "./node_modules/vue-fullscreen/src/component.vue?vue&type=template&id=c03a9ea8&");
/* harmony import */ var _component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.vue?vue&type=script&lang=js& */ "./node_modules/vue-fullscreen/src/component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _component_vue_vue_type_template_id_c03a9ea8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _component_vue_vue_type_template_id_c03a9ea8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-fullscreen/src/component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-fullscreen/src/component.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-fullscreen/src/component.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib??vue-loader-options!./component.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-fullscreen/src/component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-fullscreen/src/component.vue?vue&type=template&id=c03a9ea8&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-fullscreen/src/component.vue?vue&type=template&id=c03a9ea8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_c03a9ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib??vue-loader-options!./component.vue?vue&type=template&id=c03a9ea8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-fullscreen/src/component.vue?vue&type=template&id=c03a9ea8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_c03a9ea8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_c03a9ea8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-fullscreen/src/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/vue-fullscreen/src/utils.js ***!
  \**************************************************/
/*! exports provided: supportFullScreen, fullScreenStatus, requestFullscreen, exitFullscreen, onFullScreenEvent, offFullScreenEvent, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportFullScreen", function() { return supportFullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullScreenStatus", function() { return fullScreenStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestFullscreen", function() { return requestFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitFullscreen", function() { return exitFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFullScreenEvent", function() { return onFullScreenEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offFullScreenEvent", function() { return offFullScreenEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
function supportFullScreen () {
  const doc = document.documentElement

  return ('requestFullscreen' in doc) ||
    ('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
    ('msRequestFullscreen' in doc && document.msFullscreenEnabled) ||
    ('webkitRequestFullScreen' in doc)
}

function fullScreenStatus () {
  if (document.fullscreen ||
    document.mozFullScreen ||
    document.fullscreenElement ||
    document.msFullscreenElement ||
    document.webkitIsFullScreen) {
    return true
  } else {
    return false
  }
}

function requestFullscreen (element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else {
    console.log('Fullscreen API is not supported.')
  }
}

function exitFullscreen () {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else {
    console.log('Fullscreen API is not supported.')
  }
}

function onFullScreenEvent (callback) {
  document.addEventListener('fullscreenchange', callback)
  document.addEventListener('mozfullscreenchange', callback)
  document.addEventListener('MSFullscreenChange', callback)
  document.addEventListener('webkitfullscreenchange', callback)
}

function offFullScreenEvent (callback) {
  document.removeEventListener('fullscreenchange', callback)
  document.removeEventListener('mozfullscreenchange', callback)
  document.removeEventListener('MSFullscreenChange', callback)
  document.removeEventListener('webkitfullscreenchange', callback)
}

// 实现jquery对象继承，支持深拷贝
function extend () {
  const extended = {}
  let deep = false
  let i = 0
  const length = arguments.length

  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0]
    i++
  }

  function merge (obj) {
    for (let prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop])
        } else {
          extended[prop] = obj[prop]
        }
      }
    }
  }

  for (; i < length; i++) {
    var obj = arguments[i]
    merge(obj)
  }

  return extended
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-fullscreen/src/component.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-fullscreen/src/component.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/vue-fullscreen/src/utils.js");
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
    background: {
      type: String,
      default: '#333'
    },
    fullscreenClass: {
      type: String,
      default: 'fullscreen'
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      supportFullScreen: false,
      isFullscreen: false
    }
  },

  computed: {
    wrapperStyle () {
      return {
        'background': this.background,
        'overflow-y': 'auto',
        'width': '100%',
        'height': '100%'
      }
    }
  },

  methods: {
    toggle (value) {
      if (value === undefined) {
        // 如果已经是全屏状态，则退出
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fullScreenStatus"])()) {
          this.exit()
        } else {
          this.enter()
        }
      } else {
        value ? this.enter() : this.exit()
      }
    },
    enter () {
      if (!this.supportFullScreen) {
        return
      }
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["onFullScreenEvent"])(this.fullScreenCallback)
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["requestFullscreen"])(this.$el)
    },
    exit () {
      if (!this.supportFullScreen) {
        return
      }
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["exitFullscreen"])()
    },
    getState () {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fullScreenStatus"])()
    },
    shadeClick (e) {
      if (e.target === this.$el) {
        this.exit()
      }
    },
    fullScreenCallback () {
      this.isFullscreen = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fullScreenStatus"])()
      if (!this.isFullscreen) {
        // 退出全屏时解绑回调
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["offFullScreenEvent"])(this.fullScreenCallback)
      }
      this.$emit('change', this.isFullscreen)
      this.$emit('update:fullscreen', this.isFullscreen)
    }
  },

  watch: {
    fullscreen (value) {
      if (value !== Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fullScreenStatus"])()) {
        value ? this.enter() : this.exit()
      }
    }
  },

  created () {
    this.supportFullScreen = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["supportFullScreen"])()
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-fullscreen/src/component.vue?vue&type=template&id=c03a9ea8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-fullscreen/src/component.vue?vue&type=template&id=c03a9ea8& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      class: _vm.isFullscreen ? [_vm.fullscreenClass] : [],
      style: _vm.isFullscreen ? [_vm.wrapperStyle] : [],
      on: {
        click: function($event) {
          return _vm.shadeClick($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);