(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "./node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_awesome_bootstrap_checkbox_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../style-loader!../css-loader??ref--5-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--5-2!./awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_awesome_bootstrap_checkbox_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_awesome_bootstrap_checkbox_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_awesome_bootstrap_checkbox_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_awesome_bootstrap_checkbox_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_awesome_bootstrap_checkbox_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.abc-checkbox {\n  cursor: default;\n  padding-left: 4px;\n}\n.abc-checkbox label {\n  cursor: pointer;\n  display: inline;\n  vertical-align: top;\n  position: relative;\n  padding-left: 5px;\n}\n.abc-checkbox label::before {\n  cursor: pointer;\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  top: 2px;\n  left: 0;\n  margin-left: -1.25rem;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n}\n.abc-checkbox label::after {\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 0;\n  top: 2px;\n  margin-left: -1.25rem;\n  padding-left: 3px;\n  padding-top: 1px;\n  font-size: 11px;\n  color: #495057;\n}\n.abc-checkbox input[type=\"checkbox\"],\n.abc-checkbox input[type=\"radio\"] {\n  position: static;\n  margin-left: 0;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 1;\n}\n.abc-checkbox input[type=\"checkbox\"]:focus + label::before,\n.abc-checkbox input[type=\"radio\"]:focus + label::before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.abc-checkbox input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox input[type=\"radio\"]:checked + label::after {\n  font-family: \"FontAwesome\";\n  content: \"\\F00C\";\n}\n.abc-checkbox input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox input[type=\"radio\"]:indeterminate + label::after {\n  display: block;\n  content: \"\";\n  width: 10px;\n  height: 3px;\n  background-color: #555555;\n  border-radius: 2px;\n  margin-left: -16.5px;\n  margin-top: 7px;\n}\n.abc-checkbox input[type=\"checkbox\"]:disabled + label,\n.abc-checkbox input[type=\"radio\"]:disabled + label {\n  opacity: 0.65;\n}\n.abc-checkbox input[type=\"checkbox\"]:disabled + label::before,\n.abc-checkbox input[type=\"radio\"]:disabled + label::before {\n  background-color: #e9ecef;\n  cursor: not-allowed;\n}\n.abc-checkbox input[type=\"checkbox\"]:disabled + label::after,\n.abc-checkbox input[type=\"radio\"]:disabled + label::after {\n  cursor: not-allowed;\n}\n.abc-checkbox.abc-checkbox-circle label::before {\n  border-radius: 50%;\n}\n.abc-checkbox.checkbox-inline {\n  margin-top: 0;\n}\n.abc-checkbox-primary input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-primary input[type=\"radio\"]:checked + label::before {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.abc-checkbox-primary input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-primary input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-danger input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-danger input[type=\"radio\"]:checked + label::before {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.abc-checkbox-danger input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-danger input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-info input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-info input[type=\"radio\"]:checked + label::before {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.abc-checkbox-info input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-info input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-warning input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-warning input[type=\"radio\"]:checked + label::before {\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.abc-checkbox-warning input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-warning input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-success input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-success input[type=\"radio\"]:checked + label::before {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.abc-checkbox-success input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-success input[type=\"radio\"]:checked + label::after {\n  color: #fff;\n}\n.abc-checkbox-primary input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-primary input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.abc-checkbox-primary input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-primary input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-checkbox-danger input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-danger input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.abc-checkbox-danger input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-danger input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-checkbox-info input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-info input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.abc-checkbox-info input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-info input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-checkbox-warning input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-warning input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.abc-checkbox-warning input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-warning input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-checkbox-success input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-success input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.abc-checkbox-success input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-success input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff;\n}\n.abc-radio {\n  cursor: default;\n  padding-left: 4px;\n}\n.abc-radio label {\n  cursor: pointer;\n  display: inline;\n  vertical-align: top;\n  position: relative;\n  padding-left: 5px;\n}\n.abc-radio label::before {\n  cursor: pointer;\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  top: 2px;\n  left: 0;\n  margin-left: -20px;\n  border: 1px solid #ced4da;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out;\n}\n.abc-radio label::after {\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  content: \" \";\n  width: 11px;\n  height: 11px;\n  left: 3px;\n  top: 5px;\n  margin-left: -20px;\n  border-radius: 50%;\n  background-color: #495057;\n  transform: scale(0, 0);\n  transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n}\n.abc-radio input[type=\"radio\"] {\n  position: static;\n  margin-left: 0;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 1;\n}\n.abc-radio input[type=\"radio\"]:focus + label::before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.abc-radio input[type=\"radio\"]:checked + label::after {\n  transform: scale(1, 1);\n}\n.abc-radio input[type=\"radio\"]:disabled + label {\n  opacity: 0.65;\n}\n.abc-radio input[type=\"radio\"]:disabled + label::before {\n  cursor: not-allowed;\n}\n.abc-radio input[type=\"radio\"]:disabled + label::after {\n  cursor: not-allowed;\n}\n.abc-radio.radio-inline {\n  margin-top: 0;\n}\n.abc-radio-primary input[type=\"radio\"] + label::after {\n  background-color: #007bff;\n}\n.abc-radio-primary input[type=\"radio\"]:checked + label::before {\n  border-color: #007bff;\n}\n.abc-radio-primary input[type=\"radio\"]:checked + label::after {\n  background-color: #007bff;\n}\n.abc-radio-danger input[type=\"radio\"] + label::after {\n  background-color: #dc3545;\n}\n.abc-radio-danger input[type=\"radio\"]:checked + label::before {\n  border-color: #dc3545;\n}\n.abc-radio-danger input[type=\"radio\"]:checked + label::after {\n  background-color: #dc3545;\n}\n.abc-radio-info input[type=\"radio\"] + label::after {\n  background-color: #17a2b8;\n}\n.abc-radio-info input[type=\"radio\"]:checked + label::before {\n  border-color: #17a2b8;\n}\n.abc-radio-info input[type=\"radio\"]:checked + label::after {\n  background-color: #17a2b8;\n}\n.abc-radio-warning input[type=\"radio\"] + label::after {\n  background-color: #ffc107;\n}\n.abc-radio-warning input[type=\"radio\"]:checked + label::before {\n  border-color: #ffc107;\n}\n.abc-radio-warning input[type=\"radio\"]:checked + label::after {\n  background-color: #ffc107;\n}\n.abc-radio-success input[type=\"radio\"] + label::after {\n  background-color: #28a745;\n}\n.abc-radio-success input[type=\"radio\"]:checked + label::before {\n  border-color: #28a745;\n}\n.abc-radio-success input[type=\"radio\"]:checked + label::after {\n  background-color: #28a745;\n}\nlabel .was-validated .form-check-input:invalid .abc-checkbox:before, label\n.was-validated .form-check-input:invalid .abc-radio:before, label .form-check-input.is-invalid .abc-checkbox:before, label\n.form-check-input.is-invalid .abc-radio:before {\n  border-color: #dc3545;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/prettyCheckable/dist/prettyCheckable.css?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/prettyCheckable/dist/prettyCheckable.css?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clearfix:before,.clearfix:after{content:\"\";display:table}.clearfix:after{clear:both}.clearfix{*zoom:1}.prettycheckbox,.prettyradio{display:inline-block;padding:0;margin:0}.prettycheckbox>a,.prettyradio>a{height:30px;width:30px;display:block;float:left;cursor:pointer;margin:0;background:url(" + escape(__webpack_require__(/*! ../img/sprites-sfa68604977.png */ "./node_modules/prettyCheckable/img/sprites-sfa68604977.png")) + ")}.prettycheckbox>a:focus,.prettyradio>a:focus{outline:0 none}.prettycheckbox label,.prettyradio label{display:block;float:left;margin:6px 5px;cursor:pointer}.prettycheckbox a.disabled,.prettycheckbox label.disabled,.prettyradio a.disabled,.prettyradio label.disabled{cursor:not-allowed}.prettycheckbox>a{background-position:0 0}.prettycheckbox>a:focus{background-position:-30px 0}.prettycheckbox>a.checked{background-position:-60px 0}.prettycheckbox>a.checked:focus{background-position:-90px 0}.prettycheckbox>a.checked.disabled{background-position:-150px 0}.prettycheckbox>a.disabled{background-position:-120px 0}.prettyradio>a{background-position:-180px 0}.prettyradio>a:focus{background-position:-210px 0}.prettyradio>a.checked{background-position:-240px 0}.prettyradio>a.checked:focus{background-position:-270px 0}.prettyradio>a.checked.disabled{background-position:-330px 0}.prettyradio>a.disabled{background-position:-300px 0}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/labelauty/source/jquery-labelauty.js":
/*!***********************************************************!*\
  !*** ./node_modules/labelauty/source/jquery-labelauty.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * LABELAUTY jQuery Plugin
 *
 * @file: jquery-labelauty.js
 * @author: Francisco Neves (@fntneves)
 * @site: www.francisconeves.com
 * @license: MIT License
 */

(function( $ ){

	$.fn.labelauty = function( options )
	{
		/*
		 * Our default settings
		 * Hope you don't need to change anything, with these settings
		 */
		var settings = $.extend(
		{
			// Development Mode
			// This will activate console debug messages
			development: false,

			// Trigger Class
			// This class will be used to apply styles
			class: "labelauty",

			// Use icon?
			// If false, then only a text label represents the input
			icon: true,

			// Use text label ?
			// If false, then only an icon represents the input
			label: true,

			// Separator between labels' messages
			// If you use this separator for anything, choose a new one
			separator: "|",

			// Default Checked Message
			// This message will be visible when input is checked
			checked_label: "Checked",

			// Default UnChecked Message
			// This message will be visible when input is unchecked
			unchecked_label: "Unchecked",

			// Force random ID's
			// Replace original ID's with random ID's,
			force_random_id: false,

			// Minimum Label Width
			// This value will be used to apply a minimum width to the text labels
			minimum_width: false,

			// Use the greatest width between two text labels ?
			// If this has a true value, then label width will be the greatest between labels
			same_width: true
		}, options);

		/*
		 * Let's create the core function
		 * It will try to cover all settings and mistakes of using
		 */
		return this.each(function()
		{
			var $object = $( this );
			var selected = $object.is(':checked');
			var type = $object.attr('type');
			var use_icons = true;
			var use_labels = true;
			var labels;
			var labels_object;
			var input_id;
			
			//Get the aria label from the input element
			var aria_label = $object.attr( "aria-label" );
			
			// Hide the object form screen readers
			$object.attr( "aria-hidden", true );
			
			// Test if object is a check input
			// Don't mess me up, come on
			if( $object.is( ":checkbox" ) === false && $object.is( ":radio" ) === false )
				return this;

			// Add "labelauty" class to all checkboxes
			// So you can apply some custom styles
			$object.addClass( settings.class );
			
			// Get the value of "data-labelauty" attribute
			// Then, we have the labels for each case (or not, as we will see)
			labels = $object.attr( "data-labelauty" );
			
			use_labels = settings.label;
			use_icons = settings.icon;

			// It's time to check if it's going to the right way
			// Null values, more labels than expected or no labels will be handled here
			if( use_labels === true )
			{
				if( labels == null || labels.length === 0 )
				{
					// If attribute has no label and we want to use, then use the default labels
					labels_object = [settings.unchecked_label, settings.checked_label]
				}
				else
				{
					// Ok, ok, it's time to split Checked and Unchecked labels
					// We split, by the "settings.separator" option
					labels_object = labels.split( settings.separator );

					// Now, let's check if exist _only_ two labels
					// If there's more than two, then we do not use labels :(
					// Else, do some additional tests
					if( labels_object.length > 2 )
					{
						use_labels = false;
						debug( settings.development, "There's more than two labels. LABELAUTY will not use labels." );
					}
					else
					{
						// If there's just one label (no split by "settings.separator"), it will be used for both cases
						// Here, we have the possibility of use the same label for both cases
						if( labels_object.length === 1 )
							debug( settings.development, "There's just one label. LABELAUTY will use this one for both cases." );
					}
				}
			}

			/*
			 * Let's begin the beauty
			 */

			// Start hiding ugly checkboxes
			// Obviously, we don't need native checkboxes :O
			$object.css({ display : "none" });
						
			// We don't need more data-labelauty attributes!
			// Ok, ok, it's just for beauty improvement
			$object.removeAttr( "data-labelauty" );
			
			// Now, grab checkbox ID Attribute for "label" tag use
			// If there's no ID Attribute, then generate a new one
			input_id = $object.attr( "id" );

			if( settings.force_random_id || input_id == null || input_id.trim() === "")
			{
				var input_id_number = 1 + Math.floor( Math.random() * 1024000 );
				input_id = "labelauty-" + input_id_number;

				// Is there any element with this random ID ?
				// If exists, then increment until get an unused ID
				while( $( input_id ).length !== 0 )
				{
					input_id_number++;
					input_id = "labelauty-" + input_id_number;
					debug( settings.development, "Holy crap, between 1024 thousand numbers, one raised a conflict. Trying again." );
				}

				$object.attr( "id", input_id );
			}

			// Now, add necessary tags to make this work
			// Here, we're going to test some control variables and act properly
			
			var element = jQuery(create( input_id, aria_label, selected, type, labels_object, use_labels, use_icons ));
			
			element.click(function(){
				if($object.is(':checked')){
					$(element).attr('aria-checked', false);
				}else{
					$(element).attr('aria-checked', true);
				}
			});
			
			element.keypress(function(event){
				event.preventDefault();
				if(event.keyCode === 32 || event.keyCode === 13){		
					if($object.is(':checked')){
						$object.prop('checked', false);
						$(element).attr('aria-checked',false);
					}else{
						$object.prop('checked', true);
						$(element).attr('aria-checked', true);
					}
				}
			});
			
			$object.after(element);
			
			// Now, add "min-width" to label
			// Let's say the truth, a fixed width is more beautiful than a variable width
			if( settings.minimum_width !== false )
				$object.next( "label[for=" + input_id + "]" ).css({ "min-width": settings.minimum_width });

			// Now, add "min-width" to label
			// Let's say the truth, a fixed width is more beautiful than a variable width
			if( settings.same_width != false && settings.label == true )
			{
				var label_object = $object.next( "label[for=" + input_id + "]" );
				var unchecked_width = getRealWidth(label_object.find( "span.labelauty-unchecked" ));
				var checked_width = getRealWidth(label_object.find( "span.labelauty-checked" ));

				if( unchecked_width > checked_width )
					label_object.find( "span.labelauty-checked" ).width( unchecked_width );
				else
					label_object.find( "span.labelauty-unchecked" ).width( checked_width );
			}
		});
	};

	/*
	 * Tricky code to work with hidden elements, like tabs.
	 * Note: This code is based on jquery.actual plugin.
	 * https://github.com/dreamerslab/jquery.actual
	 */
	function getRealWidth( element )
	{
		var width = 0;
		var $target = element;
		var css_class = 'hidden_element';

		$target = $target.clone().attr('class', css_class).appendTo('body');
		width = $target.width(true);
		$target.remove();

		return width;
	}

	function debug( debug, message )
	{
		if( debug && window.console && window.console.log )
			window.console.log( "jQuery-LABELAUTY: " + message );
	}

	function create( input_id, aria_label, selected, type, messages_object, label, icon )
	{	
		var block;
		var unchecked_message;
		var checked_message;
		var aria = "";
		
		if( messages_object == null )
			unchecked_message = checked_message = "";
		else
		{
			unchecked_message = messages_object[0];

			// If checked message is null, then put the same text of unchecked message
			if( messages_object[1] == null )
				checked_message = unchecked_message;
			else
				checked_message = messages_object[1];
		}
		
		if(aria_label == null)
			aria = "";	
		else
			aria = 'tabindex="0" role="' + type + '" aria-checked="' + selected + '" aria-label="' + aria_label + '"';
		
		if( label == true && icon == true)
		{
			block = '<label for="' + input_id + '" ' + aria + '>' +
						'<span class="labelauty-unchecked-image"></span>' +
						'<span class="labelauty-unchecked">' + unchecked_message + '</span>' +
						'<span class="labelauty-checked-image"></span>' +
						'<span class="labelauty-checked">' + checked_message + '</span>' +
					'</label>';
		}
		else if( label == true )
		{
			block = '<label for="' + input_id + '" ' + aria + '>' +
				'<span class="labelauty-unchecked">' + unchecked_message + '</span>' +
				'<span class="labelauty-checked">' + checked_message + '</span>' +
				'</label>';
		}
		else
		{
			block = '<label for="' + input_id + '" ' + aria + '>' +
						'<span class="labelauty-unchecked-image"></span>' +
						'<span class="labelauty-checked-image"></span>' +
					'</label>';
		}
		
		return block;
	}

}( jQuery ));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/prettyCheckable/dist/prettyCheckable.css?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./node_modules/prettyCheckable/dist/prettyCheckable.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_prettyCheckable_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--5-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--5-2!./prettyCheckable.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/prettyCheckable/dist/prettyCheckable.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_prettyCheckable_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_prettyCheckable_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_prettyCheckable_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_prettyCheckable_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_prettyCheckable_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/prettyCheckable/dist/prettyCheckable.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/prettyCheckable/dist/prettyCheckable.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function(a,b,c,d){"use strict";var e="prettyCheckable",f="plugin_"+e,g={label:"",labelPosition:"right",customClass:"",color:"blue"},h=function(c){b.ko&&a(c).on("change",function(b){if(b.preventDefault(),b.originalEvent===d){var c=a(this).closest(".clearfix"),e=a(c).find("a:first"),f=e.hasClass("checked");f===!0?e.addClass("checked"):e.removeClass("checked")}}),c.find("a:first, label").on("touchstart click",function(c){c.preventDefault();var d=a(this).closest(".clearfix"),e=d.find("input"),f=d.find("a:first");f.hasClass("disabled")!==!0&&("radio"===e.prop("type")&&a('input[name="'+e.attr("name")+'"]').each(function(b,c){a(c).prop("checked",!1).parent().find("a:first").removeClass("checked")}),b.ko?ko.utils.triggerEvent(e[0],"click"):e.prop("checked")?e.prop("checked",!1).change():e.prop("checked",!0).change(),f.toggleClass("checked"))}),c.find("a:first").on("keyup",function(b){32===b.keyCode&&a(this).click()})},i=function(b){this.element=b,this.options=a.extend({},g)};i.prototype={init:function(b){a.extend(this.options,b);var c=a(this.element);c.parent().addClass("has-pretty-child"),c.css("display","none");var e=c.data("type")!==d?c.data("type"):c.attr("type"),f=null,g=c.attr("id");if(g!==d){var i=a("label[for="+g+"]");i.length>0&&(f=i.text(),i.remove())}""===this.options.label&&(this.options.label=f),f=c.data("label")!==d?c.data("label"):this.options.label;var j=c.data("labelposition")!==d?"label"+c.data("labelposition"):"label"+this.options.labelPosition,k=c.data("customclass")!==d?c.data("customclass"):this.options.customClass,l=c.data("color")!==d?c.data("color"):this.options.color,m=c.prop("disabled")===!0?"disabled":"",n=["pretty"+e,j,k,l].join(" ");c.wrap('<div class="clearfix '+n+'"></div>').parent().html();var o=[],p=c.prop("checked")?"checked":"";"labelright"===j?(o.push('<a href="#" class="'+p+" "+m+'"></a>'),o.push('<label for="'+c.attr("id")+'">'+f+"</label>")):(o.push('<label for="'+c.attr("id")+'">'+f+"</label>"),o.push('<a href="#" class="'+p+" "+m+'"></a>')),c.parent().append(o.join("\n")),h(c.parent())},check:function(){"radio"===a(this.element).prop("type")&&a('input[name="'+a(this.element).attr("name")+'"]').each(function(b,c){a(c).prop("checked",!1).attr("checked",!1).parent().find("a:first").removeClass("checked")}),a(this.element).prop("checked",!0).attr("checked",!0).parent().find("a:first").addClass("checked")},uncheck:function(){a(this.element).prop("checked",!1).attr("checked",!1).parent().find("a:first").removeClass("checked")},enable:function(){a(this.element).removeAttr("disabled").parent().find("a:first").removeClass("disabled")},disable:function(){a(this.element).attr("disabled","disabled").parent().find("a:first").addClass("disabled")},destroy:function(){var b=a(this.element),c=b.clone(),e=b.attr("id");if(e!==d){var f=a("label[for="+e+"]");f.length>0&&f.insertBefore(b.parent())}c.removeAttr("style").insertAfter(f),b.parent().remove()}},a.fn[e]=function(b){var c,d;if(this.data(f)instanceof i||this.data(f,new i(this)),d=this.data(f),d.element=this,"undefined"==typeof b||"object"==typeof b)"function"==typeof d.init&&d.init(b);else{if("string"==typeof b&&"function"==typeof d[b])return c=Array.prototype.slice.call(arguments,1),d[b].apply(d,c);a.error("Method "+b+" does not exist on jQuery."+e)}}}(jQuery,window,document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/prettyCheckable/img/sprites-sfa68604977.png":
/*!******************************************************************!*\
  !*** ./node_modules/prettyCheckable/img/sprites-sfa68604977.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/vendor/prettyCheckable/sprites-sfa68604977.png?6ce57f9a2b9fc926827a9b37f338c4f1";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--5-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--5-2!./awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css?vue&type=style&index=2&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/prettyCheckable/dist/prettyCheckable.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/prettyCheckable/dist/prettyCheckable.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--5-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--5-2!./prettyCheckable.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/prettyCheckable/dist/prettyCheckable.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);