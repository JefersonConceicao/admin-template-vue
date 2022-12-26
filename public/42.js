(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/buttons.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var Buttons_js_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Buttons/js/buttons.js */ "./node_modules/Buttons/js/buttons.js");
/* harmony import */ var Buttons_js_buttons_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Buttons_js_buttons_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Ladda = __webpack_require__(/*! ladda */ "./node_modules/ladda/dist/ladda.min.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "buttons",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    "use strict"; //INITIALIZE PAGE
    // Bind normal buttons

    Ladda.bind('.button_normal', {
      timeout: 3000
    }); // Bind progress buttons and simulate loading progress

    Ladda.bind('.button_progress', {
      callback: function callback(instance) {
        var progress = 0;
        var interval = setInterval(function () {
          progress = Math.min(progress + Math.random() * 0.1, 1);
          instance.setProgress(progress);

          if (progress === 1) {
            instance.stop();
            clearInterval(interval);
          }
        }, 200);
      }
    });
  },
  destroyed: function destroyed() {}
});

/***/ }),

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* $ubtn prefix (reserved)\r\n*\r\n* This prefix stands for Unicorn Button - ubtn\r\n* We provide a prefix to the Sass Variables to\r\n* prevent namespace collisions that could occur if\r\n* you import buttons as part of your Sass build process.\r\n* We kindly ask you not to use the prefix $ubtn in your project\r\n* in order to avoid possilbe name conflicts. Thanks!\r\n*/\n/*\r\n* Button Namespace (ex .button or .btn)\r\n*\r\n*/\n/*\r\n* Button Defaults\r\n*\r\n* Some default settings that are used throughout the button library.\r\n* Changes to these settings will be picked up by all of the other modules.\r\n* The colors used here are the default colors for the base button (gray).\r\n* The font size and height are used to set the base size for the buttons.\r\n* The size values will be used to calculate the larger and smaller button sizes.\r\n*/\n/*\r\n* Button Colors\r\n*\r\n* $ubtn-colors is used to generate the different button colors.\r\n* Edit or add colors to the list below and recompile.\r\n* Each block contains the (name, background, color)\r\n* The class is generated using the name: (ex .button-primary)\r\n*/\n/*\r\n* Button Shapes\r\n*\r\n* $ubtn-shapes is used to generate the different button shapes.\r\n* Edit or add shapes to the list below and recompile.\r\n* Each block contains the (name, border-radius).\r\n* The class is generated using the name: (ex .button-square).\r\n*/\n/*\r\n* Button Sizes\r\n*\r\n* $ubtn-sizes is used to generate the different button sizes.\r\n* Edit or add colors to the list below and recompile.\r\n* Each block contains the (name, size multiplier).\r\n* The class is generated using the name: (ex .button-giant).\r\n*/\n/*! @license\n*\n* Buttons\n* Copyright 2012-2014 Alex Wolfe and Rob Levin\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\");\n* you may not use this file except in compliance with the License.\n* You may obtain a copy of the License at\n*\n*        http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software\n* distributed under the License is distributed on an \"AS IS\" BASIS,\n* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n* See the License for the specific language governing permissions and\n* limitations under the License.\n*/\n/*\n* Compass (optional)\n*\n* We recommend the use of autoprefixer instead of Compass\n* when using buttons. However, buttons does support Compass.\n* simply change $ubtn-use-compass to true and uncomment the\n* @import 'compass' code below to use Compass.\n*/\n/*\n* Required Files\n*\n* These files include the variables and options\n* and base css styles that are required to generate buttons.\n*/\n/*\n* $ubtn prefix (reserved)\n*\n* This prefix stands for Unicorn Button - ubtn\n* We provide a prefix to the Sass Variables to\n* prevent namespace collisions that could occur if\n* you import buttons as part of your Sass build process.\n* We kindly ask you not to use the prefix $ubtn in your project\n* in order to avoid possilbe name conflicts. Thanks!\n*/\n/*\n* Button Namespace (ex .button or .btn)\n*\n*/\n/*\n* Button Defaults\n*\n* Some default settings that are used throughout the button library.\n* Changes to these settings will be picked up by all of the other modules.\n* The colors used here are the default colors for the base button (gray).\n* The font size and height are used to set the base size for the buttons.\n* The size values will be used to calculate the larger and smaller button sizes.\n*/\n/*\n* Button Colors\n*\n* $ubtn-colors is used to generate the different button colors.\n* Edit or add colors to the list below and recompile.\n* Each block contains the (name, background, color)\n* The class is generated using the name: (ex .button-primary)\n*/\n/*\n* Button Shapes\n*\n* $ubtn-shapes is used to generate the different button shapes.\n* Edit or add shapes to the list below and recompile.\n* Each block contains the (name, border-radius).\n* The class is generated using the name: (ex .button-square).\n*/\n/*\n* Button Sizes\n*\n* $ubtn-sizes is used to generate the different button sizes.\n* Edit or add colors to the list below and recompile.\n* Each block contains the (name, size multiplier).\n* The class is generated using the name: (ex .button-giant).\n*/\n/*\n* Color Mixin\n*\n* Iterates through the list of colors and creates\n*\n*/\n/*\n* No Animation\n*\n* Sets animation property to none\n*/\n/*\n* Clearfix\n*\n* Clears floats inside the container\n*/\n/*\n* Base Button Style\n*\n* The default values for the .button class\n*/\n.button {\n  color: #666;\n  background-color: #DCDCDC;\n  border-color: #DCDCDC;\n  font-weight: regular;\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif, verdana;\n  text-decoration: none;\n  text-align: center;\n  line-height: 40px;\n  height: 40px;\n  padding: 0 40px;\n  margin: 0;\n  display: inline-block;\n  appearance: none;\n  cursor: pointer;\n  border: none;\n  box-sizing: border-box;\n  transition-property: all;\n  transition-duration: 0.3s;\n  /*\n  * Disabled State\n  *\n  * The disabled state uses the class .disabled, is-disabled,\n  * and the form attribute disabled=\"disabled\".\n  * The use of !important is only added because this is a state\n  * that must be applied to all buttons when in a disabled state.\n  */\n}\n.button:visited {\n  color: #666;\n}\n.button:hover, .button:focus {\n  background-color: #e4e4e4;\n  text-decoration: none;\n  outline: none;\n}\n.button:active, .button.active, .button.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);\n  text-decoration: none;\n  background-color: gainsboro;\n  border-color: #bdbdbd;\n  color: #c3c3c3;\n  transition-duration: 0s;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.button.disabled, .button.is-disabled, .button:disabled {\n  top: 0 !important;\n  background: #EEE !important;\n  border: 1px solid #DDD !important;\n  text-shadow: 0 1px 1px white !important;\n  color: #CCC !important;\n  cursor: default !important;\n  appearance: none !important;\n  box-shadow: none !important;\n  opacity: 0.8 !important;\n}\n\n/*\n* Base Button Tyography\n*\n*/\n.button-uppercase {\n  text-transform: uppercase;\n}\n.button-lowercase {\n  text-transform: lowercase;\n}\n.button-capitalize {\n  text-transform: capitalize;\n}\n.button-small-caps {\n  font-variant: small-caps;\n}\n.button-icon-txt-large {\n  font-size: 36px !important;\n}\n\n/*\n* Base padding\n*\n*/\n.button-width-small {\n  padding: 0 10px !important;\n}\n\n/*\n* Base Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-primary,\n.button-primary-flat {\n  background-color: #4080bf;\n  border-color: #4080bf;\n  color: #FFF;\n}\n.button-primary:visited,\n.button-primary-flat:visited {\n  color: #FFF;\n}\n.button-primary:hover, .button-primary:focus,\n.button-primary-flat:hover,\n.button-primary-flat:focus {\n  background-color: #6699cc;\n  border-color: #6699cc;\n  color: #FFF;\n}\n.button-primary:active, .button-primary.active, .button-primary.is-active,\n.button-primary-flat:active,\n.button-primary-flat.active,\n.button-primary-flat.is-active {\n  background-color: #4d80b2;\n  border-color: #4d80b2;\n  color: #336699;\n}\n.button-plain,\n.button-plain-flat {\n  background-color: #FFF;\n  border-color: #FFF;\n  color: #1B9AF7;\n}\n.button-plain:visited,\n.button-plain-flat:visited {\n  color: #1B9AF7;\n}\n.button-plain:hover, .button-plain:focus,\n.button-plain-flat:hover,\n.button-plain-flat:focus {\n  background-color: white;\n  border-color: white;\n  color: #1B9AF7;\n}\n.button-plain:active, .button-plain.active, .button-plain.is-active,\n.button-plain-flat:active,\n.button-plain-flat.active,\n.button-plain-flat.is-active {\n  background-color: white;\n  border-color: white;\n  color: #e6e6e6;\n}\n.button-inverse,\n.button-inverse-flat {\n  background-color: #222;\n  border-color: #222;\n  color: #EEE;\n}\n.button-inverse:visited,\n.button-inverse-flat:visited {\n  color: #EEE;\n}\n.button-inverse:hover, .button-inverse:focus,\n.button-inverse-flat:hover,\n.button-inverse-flat:focus {\n  background-color: #3c3c3c;\n  border-color: #3c3c3c;\n  color: #EEE;\n}\n.button-inverse:active, .button-inverse.active, .button-inverse.is-active,\n.button-inverse-flat:active,\n.button-inverse-flat.active,\n.button-inverse-flat.is-active {\n  background-color: #222222;\n  border-color: #222222;\n  color: #090909;\n}\n.button-action,\n.button-action-flat {\n  background-color: #4FC1E9;\n  border-color: #4FC1E9;\n  color: #FFF;\n}\n.button-action:visited,\n.button-action-flat:visited {\n  color: #FFF;\n}\n.button-action:hover, .button-action:focus,\n.button-action-flat:hover,\n.button-action-flat:focus {\n  background-color: #7cd1ef;\n  border-color: #7cd1ef;\n  color: #FFF;\n}\n.button-action:active, .button-action.active, .button-action.is-active,\n.button-action-flat:active,\n.button-action-flat.active,\n.button-action-flat.is-active {\n  background-color: #59bcdf;\n  border-color: #59bcdf;\n  color: #22b1e3;\n}\n.button-highlight,\n.button-highlight-flat {\n  background-color: #FFB65F;\n  border-color: #FFB65F;\n  color: #FFF;\n}\n.button-highlight:visited,\n.button-highlight-flat:visited {\n  color: #FFF;\n}\n.button-highlight:hover, .button-highlight:focus,\n.button-highlight-flat:hover,\n.button-highlight-flat:focus {\n  background-color: #ffcd92;\n  border-color: #ffcd92;\n  color: #FFF;\n}\n.button-highlight:active, .button-highlight.active, .button-highlight.is-active,\n.button-highlight-flat:active,\n.button-highlight-flat.active,\n.button-highlight-flat.is-active {\n  background-color: #f7b567;\n  border-color: #f7b567;\n  color: #ff9f2c;\n}\n.button-caution,\n.button-caution-flat {\n  background-color: #FB8678;\n  border-color: #FB8678;\n  color: #FFF;\n}\n.button-caution:visited,\n.button-caution-flat:visited {\n  color: #FFF;\n}\n.button-caution:hover, .button-caution:focus,\n.button-caution-flat:hover,\n.button-caution-flat:focus {\n  background-color: #fcb2aa;\n  border-color: #fcb2aa;\n  color: #FFF;\n}\n.button-caution:active, .button-caution.active, .button-caution.is-active,\n.button-caution-flat:active,\n.button-caution-flat.active,\n.button-caution-flat.is-active {\n  background-color: #f48b7f;\n  border-color: #f48b7f;\n  color: #fa5a46;\n}\n.button-royal,\n.button-royal-flat {\n  background-color: #22D69D;\n  border-color: #22D69D;\n  color: #FFF;\n}\n.button-royal:visited,\n.button-royal-flat:visited {\n  color: #FFF;\n}\n.button-royal:hover, .button-royal:focus,\n.button-royal-flat:hover,\n.button-royal-flat:focus {\n  background-color: #49e2b2;\n  border-color: #49e2b2;\n  color: #FFF;\n}\n.button-royal:active, .button-royal.active, .button-royal.is-active,\n.button-royal-flat:active,\n.button-royal-flat.active,\n.button-royal-flat.is-active {\n  background-color: #2eca98;\n  border-color: #2eca98;\n  color: #1baa7d;\n}\n\n/*\n* Base Layout Styles\n*\n* Very Miminal Layout Styles\n*/\n.button-block,\n.button-stacked {\n  display: block;\n  width: 100%;\n}\n\n/*\n* Button Types (optional)\n*\n* All of the files below represent the various button\n* types (including shapes & sizes). None of these files\n* are required. Simple remove the uneeded type below and\n* the button type will be excluded from the final build\n*/\n/*\n* Button Shapes\n*\n* This file creates the various button shapes\n* (ex. Circle, Rounded, Pill)\n*/\n.button-square {\n  border-radius: 0;\n}\n.button-box {\n  border-radius: 10px;\n}\n.button-rounded {\n  border-radius: 4px;\n}\n.button-pill {\n  border-radius: 200px;\n}\n.button-circle {\n  border-radius: 100%;\n}\n\n/*\n* Size Adjustment for equal height & widht buttons\n*\n* Remove padding and set a fixed width.\n*/\n.button-circle,\n.button-box,\n.button-square {\n  padding: 0 !important;\n  width: 40px;\n}\n.button-circle.button-giant,\n.button-box.button-giant,\n.button-square.button-giant {\n  width: 70px;\n}\n.button-circle.button-jumbo,\n.button-box.button-jumbo,\n.button-square.button-jumbo {\n  width: 60px;\n}\n.button-circle.button-large,\n.button-box.button-large,\n.button-square.button-large {\n  width: 50px;\n}\n.button-circle.button-normal,\n.button-box.button-normal,\n.button-square.button-normal {\n  width: 40px;\n}\n.button-circle.button-small,\n.button-box.button-small,\n.button-square.button-small {\n  width: 30px;\n}\n.button-circle.button-tiny,\n.button-box.button-tiny,\n.button-square.button-tiny {\n  width: 24px;\n}\n\n/*\n* Border Buttons\n*\n* These buttons have no fill they only have a\n* border to define their hit target.\n*/\n.button-border, .button-border-thick, .button-border-thin {\n  background: none;\n  border-width: 2px;\n  border-style: solid;\n  line-height: 36px;\n}\n.button-border:hover, .button-border-thick:hover, .button-border-thin:hover {\n  background-color: rgba(246, 246, 246, 0.9);\n}\n.button-border:active, .button-border-thick:active, .button-border-thin:active, .button-border.active, .active.button-border-thick, .active.button-border-thin, .button-border.is-active, .is-active.button-border-thick, .is-active.button-border-thin {\n  box-shadow: none;\n  text-shadow: none;\n  transition-property: all;\n  transition-duration: 0.3s;\n}\n\n/*\n* Border Optional Sizes\n*\n* A slight variation in border thickness\n*/\n.button-border-thin {\n  border-width: 1px;\n}\n.button-border-thick {\n  border-width: 3px;\n}\n\n/*\n* Border Button Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-border,\n.button-border-thin,\n.button-border-thick {\n  /*\n  * Border Button Size Adjustment\n  *\n  * The line-height must be adjusted to compinsate for\n  * the width of the border.\n  */\n}\n.button-border.button-primary,\n.button-border-thin.button-primary,\n.button-border-thick.button-primary {\n  color: #4080bf;\n}\n.button-border.button-primary:hover, .button-border.button-primary:focus,\n.button-border-thin.button-primary:hover,\n.button-border-thin.button-primary:focus,\n.button-border-thick.button-primary:hover,\n.button-border-thick.button-primary:focus {\n  background-color: rgba(102, 153, 204, 0.9);\n  color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-primary:active, .button-border.button-primary.active, .button-border.button-primary.is-active,\n.button-border-thin.button-primary:active,\n.button-border-thin.button-primary.active,\n.button-border-thin.button-primary.is-active,\n.button-border-thick.button-primary:active,\n.button-border-thick.button-primary.active,\n.button-border-thick.button-primary.is-active {\n  background-color: rgba(77, 128, 178, 0.7);\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 0.3;\n}\n.button-border.button-plain,\n.button-border-thin.button-plain,\n.button-border-thick.button-plain {\n  color: #FFF;\n}\n.button-border.button-plain:hover, .button-border.button-plain:focus,\n.button-border-thin.button-plain:hover,\n.button-border-thin.button-plain:focus,\n.button-border-thick.button-plain:hover,\n.button-border-thick.button-plain:focus {\n  background-color: rgba(255, 255, 255, 0.9);\n  color: rgba(27, 154, 247, 0.9);\n}\n.button-border.button-plain:active, .button-border.button-plain.active, .button-border.button-plain.is-active,\n.button-border-thin.button-plain:active,\n.button-border-thin.button-plain.active,\n.button-border-thin.button-plain.is-active,\n.button-border-thick.button-plain:active,\n.button-border-thick.button-plain.active,\n.button-border-thick.button-plain.is-active {\n  background-color: rgba(255, 255, 255, 0.7);\n  color: rgba(27, 154, 247, 0.5);\n  opacity: 0.3;\n}\n.button-border.button-inverse,\n.button-border-thin.button-inverse,\n.button-border-thick.button-inverse {\n  color: #222;\n}\n.button-border.button-inverse:hover, .button-border.button-inverse:focus,\n.button-border-thin.button-inverse:hover,\n.button-border-thin.button-inverse:focus,\n.button-border-thick.button-inverse:hover,\n.button-border-thick.button-inverse:focus {\n  background-color: rgba(60, 60, 60, 0.9);\n  color: rgba(238, 238, 238, 0.9);\n}\n.button-border.button-inverse:active, .button-border.button-inverse.active, .button-border.button-inverse.is-active,\n.button-border-thin.button-inverse:active,\n.button-border-thin.button-inverse.active,\n.button-border-thin.button-inverse.is-active,\n.button-border-thick.button-inverse:active,\n.button-border-thick.button-inverse.active,\n.button-border-thick.button-inverse.is-active {\n  background-color: rgba(34, 34, 34, 0.7);\n  color: rgba(238, 238, 238, 0.5);\n  opacity: 0.3;\n}\n.button-border.button-action,\n.button-border-thin.button-action,\n.button-border-thick.button-action {\n  color: #4FC1E9;\n}\n.button-border.button-action:hover, .button-border.button-action:focus,\n.button-border-thin.button-action:hover,\n.button-border-thin.button-action:focus,\n.button-border-thick.button-action:hover,\n.button-border-thick.button-action:focus {\n  background-color: rgba(124, 209, 239, 0.9);\n  color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-action:active, .button-border.button-action.active, .button-border.button-action.is-active,\n.button-border-thin.button-action:active,\n.button-border-thin.button-action.active,\n.button-border-thin.button-action.is-active,\n.button-border-thick.button-action:active,\n.button-border-thick.button-action.active,\n.button-border-thick.button-action.is-active {\n  background-color: rgba(89, 188, 223, 0.7);\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 0.3;\n}\n.button-border.button-highlight,\n.button-border-thin.button-highlight,\n.button-border-thick.button-highlight {\n  color: #FFB65F;\n}\n.button-border.button-highlight:hover, .button-border.button-highlight:focus,\n.button-border-thin.button-highlight:hover,\n.button-border-thin.button-highlight:focus,\n.button-border-thick.button-highlight:hover,\n.button-border-thick.button-highlight:focus {\n  background-color: rgba(255, 205, 146, 0.9);\n  color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-highlight:active, .button-border.button-highlight.active, .button-border.button-highlight.is-active,\n.button-border-thin.button-highlight:active,\n.button-border-thin.button-highlight.active,\n.button-border-thin.button-highlight.is-active,\n.button-border-thick.button-highlight:active,\n.button-border-thick.button-highlight.active,\n.button-border-thick.button-highlight.is-active {\n  background-color: rgba(247, 181, 103, 0.7);\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 0.3;\n}\n.button-border.button-caution,\n.button-border-thin.button-caution,\n.button-border-thick.button-caution {\n  color: #FB8678;\n}\n.button-border.button-caution:hover, .button-border.button-caution:focus,\n.button-border-thin.button-caution:hover,\n.button-border-thin.button-caution:focus,\n.button-border-thick.button-caution:hover,\n.button-border-thick.button-caution:focus {\n  background-color: rgba(252, 178, 170, 0.9);\n  color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-caution:active, .button-border.button-caution.active, .button-border.button-caution.is-active,\n.button-border-thin.button-caution:active,\n.button-border-thin.button-caution.active,\n.button-border-thin.button-caution.is-active,\n.button-border-thick.button-caution:active,\n.button-border-thick.button-caution.active,\n.button-border-thick.button-caution.is-active {\n  background-color: rgba(244, 139, 127, 0.7);\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 0.3;\n}\n.button-border.button-royal,\n.button-border-thin.button-royal,\n.button-border-thick.button-royal {\n  color: #22D69D;\n}\n.button-border.button-royal:hover, .button-border.button-royal:focus,\n.button-border-thin.button-royal:hover,\n.button-border-thin.button-royal:focus,\n.button-border-thick.button-royal:hover,\n.button-border-thick.button-royal:focus {\n  background-color: rgba(73, 226, 178, 0.9);\n  color: rgba(255, 255, 255, 0.9);\n}\n.button-border.button-royal:active, .button-border.button-royal.active, .button-border.button-royal.is-active,\n.button-border-thin.button-royal:active,\n.button-border-thin.button-royal.active,\n.button-border-thin.button-royal.is-active,\n.button-border-thick.button-royal:active,\n.button-border-thick.button-royal.active,\n.button-border-thick.button-royal.is-active {\n  background-color: rgba(46, 202, 152, 0.7);\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 0.3;\n}\n.button-border.button-giant,\n.button-border-thin.button-giant,\n.button-border-thick.button-giant {\n  line-height: 66px;\n}\n.button-border.button-jumbo,\n.button-border-thin.button-jumbo,\n.button-border-thick.button-jumbo {\n  line-height: 56px;\n}\n.button-border.button-large,\n.button-border-thin.button-large,\n.button-border-thick.button-large {\n  line-height: 46px;\n}\n.button-border.button-normal,\n.button-border-thin.button-normal,\n.button-border-thick.button-normal {\n  line-height: 36px;\n}\n.button-border.button-small,\n.button-border-thin.button-small,\n.button-border-thick.button-small {\n  line-height: 26px;\n}\n.button-border.button-tiny,\n.button-border-thin.button-tiny,\n.button-border-thick.button-tiny {\n  line-height: 20px;\n}\n\n/*\n* Border Buttons\n*\n* These buttons have no fill they only have a\n* border to define their hit target.\n*/\n.button-borderless {\n  background: none;\n  border: none;\n  padding: 0 8px !important;\n  color: #DCDCDC;\n  font-size: 20.8px;\n  font-weight: 200;\n  /*\n  * Borderless Button Colors\n  *\n  * Create colors for buttons\n  * (.button-primary, .button-secondary, etc.)\n  */\n  /*\n  * Borderles Size Adjustment\n  *\n  * The font-size must be large to compinsate for\n  * the lack of a hit target.\n  */\n}\n.button-borderless:hover, .button-borderless:focus {\n  background: none;\n}\n.button-borderless:active, .button-borderless.active, .button-borderless.is-active {\n  box-shadow: none;\n  text-shadow: none;\n  transition-property: all;\n  transition-duration: 0.3s;\n  opacity: 0.3;\n}\n.button-borderless.button-primary {\n  color: #4080bf;\n}\n.button-borderless.button-plain {\n  color: #FFF;\n}\n.button-borderless.button-inverse {\n  color: #222;\n}\n.button-borderless.button-action {\n  color: #4FC1E9;\n}\n.button-borderless.button-highlight {\n  color: #FFB65F;\n}\n.button-borderless.button-caution {\n  color: #FB8678;\n}\n.button-borderless.button-royal {\n  color: #22D69D;\n}\n.button-borderless.button-giant {\n  font-size: 36.4px;\n  height: 52.4px;\n  line-height: 52.4px;\n}\n.button-borderless.button-jumbo {\n  font-size: 31.2px;\n  height: 47.2px;\n  line-height: 47.2px;\n}\n.button-borderless.button-large {\n  font-size: 26px;\n  height: 42px;\n  line-height: 42px;\n}\n.button-borderless.button-normal {\n  font-size: 20.8px;\n  height: 36.8px;\n  line-height: 36.8px;\n}\n.button-borderless.button-small {\n  font-size: 15.6px;\n  height: 31.6px;\n  line-height: 31.6px;\n}\n.button-borderless.button-tiny {\n  font-size: 12.48px;\n  height: 28.48px;\n  line-height: 28.48px;\n}\n\n/*\n* Raised Buttons\n*\n* A classic looking button that offers\n* great depth and affordance.\n*/\n.button-raised {\n  border-color: #cfcfcf;\n  border-style: solid;\n  border-width: 1px;\n  line-height: 38px;\n  background: linear-gradient(#e4e4e4, #cfcfcf);\n  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.button-raised:hover, .button-raised:focus {\n  background: linear-gradient(to bottom, #f0f0f0, #cacaca);\n}\n.button-raised:active, .button-raised.active, .button-raised.is-active {\n  background: gainsboro;\n  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;\n}\n\n/*\n* Raised Button Colors\n*\n* Create colors for raised buttons\n*/\n.button-raised.button-primary {\n  border-color: #3a73ac;\n  background: linear-gradient(#538dc5, #3a73ac);\n}\n.button-raised.button-primary:hover, .button-raised.button-primary:focus {\n  background: linear-gradient(to bottom, #5f94c9, #376ea4);\n}\n.button-raised.button-primary:active, .button-raised.button-primary.active, .button-raised.button-primary.is-active {\n  border-color: #336699;\n  background: #4d80b2;\n}\n.button-raised.button-plain {\n  border-color: #f2f2f2;\n  background: linear-gradient(white, #f2f2f2);\n}\n.button-raised.button-plain:hover, .button-raised.button-plain:focus {\n  background: linear-gradient(to bottom, white, #ededed);\n}\n.button-raised.button-plain:active, .button-raised.button-plain.active, .button-raised.button-plain.is-active {\n  border-color: #e6e6e6;\n  background: white;\n}\n.button-raised.button-inverse {\n  border-color: #151515;\n  background: linear-gradient(#2f2f2f, #151515);\n}\n.button-raised.button-inverse:hover, .button-raised.button-inverse:focus {\n  background: linear-gradient(to bottom, #363636, #101010);\n}\n.button-raised.button-inverse:active, .button-raised.button-inverse.active, .button-raised.button-inverse.is-active {\n  border-color: #090909;\n  background: #222222;\n}\n.button-raised.button-action {\n  border-color: #38b9e6;\n  background: linear-gradient(#66c9ec, #38b9e6);\n}\n.button-raised.button-action:hover, .button-raised.button-action:focus {\n  background: linear-gradient(to bottom, #73ceee, #2fb6e5);\n}\n.button-raised.button-action:active, .button-raised.button-action.active, .button-raised.button-action.is-active {\n  border-color: #22b1e3;\n  background: #59bcdf;\n}\n.button-raised.button-highlight {\n  border-color: #ffaa46;\n  background: linear-gradient(#ffc279, #ffaa46);\n}\n.button-raised.button-highlight:hover, .button-raised.button-highlight:focus {\n  background: linear-gradient(to bottom, #ffc988, #ffa63b);\n}\n.button-raised.button-highlight:active, .button-raised.button-highlight.active, .button-raised.button-highlight.is-active {\n  border-color: #ff9f2c;\n  background: #f7b567;\n}\n.button-raised.button-caution {\n  border-color: #fa705f;\n  background: linear-gradient(#fc9c91, #fa705f);\n}\n.button-raised.button-caution:hover, .button-raised.button-caution:focus {\n  background: linear-gradient(to bottom, #fcaaa0, #fa6755);\n}\n.button-raised.button-caution:active, .button-raised.button-caution.active, .button-raised.button-caution.is-active {\n  border-color: #fa5a46;\n  background: #f48b7f;\n}\n.button-raised.button-royal {\n  border-color: #1fc08d;\n  background: linear-gradient(#33dfa8, #1fc08d);\n}\n.button-raised.button-royal:hover, .button-raised.button-royal:focus {\n  background: linear-gradient(to bottom, #40e1ae, #1db786);\n}\n.button-raised.button-royal:active, .button-raised.button-royal.active, .button-raised.button-royal.is-active {\n  border-color: #1baa7d;\n  background: #2eca98;\n}\n\n/*\n* 3D Buttons\n*\n* These buttons have a heavy three dimensional\n* style that mimics the visual appearance of a\n* real life button.\n*/\n.button-3d {\n  position: relative;\n  top: 0;\n  box-shadow: 0 7px 0 darkgray, 0 8px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d:hover, .button-3d:focus {\n  box-shadow: 0 7px 0 darkgray, 0 8px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d:active, .button-3d.active, .button-3d.is-active {\n  top: 5px;\n  transition-property: all;\n  transition-duration: 0.15s;\n  box-shadow: 0 2px 0 darkgray, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* 3D Button Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-3d.button-primary {\n  box-shadow: 0 7px 0 #336699, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-primary:hover, .button-3d.button-primary:focus {\n  box-shadow: 0 7px 0 #316191, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-primary:active, .button-3d.button-primary.active, .button-3d.button-primary.is-active {\n  box-shadow: 0 2px 0 #264d73, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-plain {\n  box-shadow: 0 7px 0 #e6e6e6, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-plain:hover, .button-3d.button-plain:focus {\n  box-shadow: 0 7px 0 #e0e0e0, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-plain:active, .button-3d.button-plain.active, .button-3d.button-plain.is-active {\n  box-shadow: 0 2px 0 #cccccc, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-inverse {\n  box-shadow: 0 7px 0 #090909, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-inverse:hover, .button-3d.button-inverse:focus {\n  box-shadow: 0 7px 0 #030303, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-inverse:active, .button-3d.button-inverse.active, .button-3d.button-inverse.is-active {\n  box-shadow: 0 2px 0 black, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-action {\n  box-shadow: 0 7px 0 #22b1e3, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-action:hover, .button-3d.button-action:focus {\n  box-shadow: 0 7px 0 #1cacdf, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-action:active, .button-3d.button-action.active, .button-3d.button-action.is-active {\n  box-shadow: 0 2px 0 #1790bb, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-highlight {\n  box-shadow: 0 7px 0 #ff9f2c, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-highlight:hover, .button-3d.button-highlight:focus {\n  box-shadow: 0 7px 0 #ff9a22, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-highlight:active, .button-3d.button-highlight.active, .button-3d.button-highlight.is-active {\n  box-shadow: 0 2px 0 #f88700, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-caution {\n  box-shadow: 0 7px 0 #fa5a46, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-caution:hover, .button-3d.button-caution:focus {\n  box-shadow: 0 7px 0 #f9513d, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-caution:active, .button-3d.button-caution.active, .button-3d.button-caution.is-active {\n  box-shadow: 0 2px 0 #f82d15, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n.button-3d.button-royal {\n  box-shadow: 0 7px 0 #1baa7d, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-royal:hover, .button-3d.button-royal:focus {\n  box-shadow: 0 7px 0 #1aa176, 0 8px 3px rgba(0, 0, 0, 0.3);\n}\n.button-3d.button-royal:active, .button-3d.button-royal.active, .button-3d.button-royal.is-active {\n  box-shadow: 0 2px 0 #147e5c, 0 3px 3px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* Glowing Buttons\n*\n* A pulse like glow that appears\n* rythmically around the edges of\n* a button.\n*/\n/*\n* Glow animation mixin for Compass users\n*\n*/\n/*\n* Glowing Keyframes\n*\n*/\n@keyframes glowing {\nfrom {\n    box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(44, 154, 219, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(44, 154, 219, 0.3);\n}\n}\n/*\n* Glowing Keyframes for various colors\n*\n*/\n@keyframes glowing-primary {\nfrom {\n    box-shadow: 0 0 0 rgba(64, 128, 191, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(64, 128, 191, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(64, 128, 191, 0.3);\n}\n}\n@keyframes glowing-plain {\nfrom {\n    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3);\n}\n}\n@keyframes glowing-inverse {\nfrom {\n    box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(34, 34, 34, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(34, 34, 34, 0.3);\n}\n}\n@keyframes glowing-action {\nfrom {\n    box-shadow: 0 0 0 rgba(79, 193, 233, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(79, 193, 233, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(79, 193, 233, 0.3);\n}\n}\n@keyframes glowing-highlight {\nfrom {\n    box-shadow: 0 0 0 rgba(255, 182, 95, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(255, 182, 95, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(255, 182, 95, 0.3);\n}\n}\n@keyframes glowing-caution {\nfrom {\n    box-shadow: 0 0 0 rgba(251, 134, 120, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(251, 134, 120, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(251, 134, 120, 0.3);\n}\n}\n@keyframes glowing-royal {\nfrom {\n    box-shadow: 0 0 0 rgba(34, 214, 157, 0.3);\n}\n50% {\n    box-shadow: 0 0 20px rgba(34, 214, 157, 0.8);\n}\nto {\n    box-shadow: 0 0 0 rgba(34, 214, 157, 0.3);\n}\n}\n/*\n* Glowing Buttons Base Styes\n*\n* A pulse like glow that appears\n* rythmically around the edges of\n* a button.\n*/\n.button-glow {\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-name: glowing;\n}\n.button-glow:active, .button-glow.active, .button-glow.is-active {\n  animation-name: none;\n}\n\n/*\n* Glowing Button Colors\n*\n* Create colors for glowing buttons\n*/\n.button-glow.button-primary {\n  animation-name: glowing-primary;\n}\n.button-glow.button-plain {\n  animation-name: glowing-plain;\n}\n.button-glow.button-inverse {\n  animation-name: glowing-inverse;\n}\n.button-glow.button-action {\n  animation-name: glowing-action;\n}\n.button-glow.button-highlight {\n  animation-name: glowing-highlight;\n}\n.button-glow.button-caution {\n  animation-name: glowing-caution;\n}\n.button-glow.button-royal {\n  animation-name: glowing-royal;\n}\n\n/*\n* Dropdown menu buttons\n*\n* A dropdown menu appears\n* when a button is pressed\n*/\n/*\n* Dropdown Container\n*\n*/\n.button-dropdown {\n  position: relative;\n  overflow: visible;\n  display: inline-block;\n}\n\n/*\n* Dropdown List Style\n*\n*/\n.button-dropdown-list {\n  display: none;\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  min-width: 100%;\n  list-style-type: none;\n  background: rgba(246, 246, 246, 0.95);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #c3c3c3;\n  font-family: \"Open Sans\", sans-serif, verdana;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  box-sizing: border-box;\n  /*\n  * Dropdown Below\n  *\n  */\n  /*\n  * Dropdown Above\n  *\n  */\n}\n.button-dropdown-list.is-below {\n  top: 100%;\n  border-top: none;\n  border-radius: 0 0 3px 3px;\n}\n.button-dropdown-list.is-above {\n  bottom: 100%;\n  top: auto;\n  border-bottom: none;\n  border-radius: 3px 3px 0 0;\n  box-shadow: 0 -2px 7px rgba(0, 0, 0, 0.2);\n}\n\n/*\n* Dropdown Buttons\n*\n*/\n.button-dropdown-list > li {\n  padding: 0;\n  margin: 0;\n  display: block;\n}\n.button-dropdown-list > li > a {\n  display: block;\n  line-height: 40px;\n  font-size: 12.8px;\n  padding: 5px 10px;\n  float: none;\n  color: #666;\n  text-decoration: none;\n}\n.button-dropdown-list > li > a:hover {\n  color: #5e5e5e;\n  background: #e4e4e4;\n  text-decoration: none;\n}\n.button-dropdown-divider {\n  border-top: 1px solid #d4d4d4;\n}\n\n/*\n* Dropdown Colors\n*\n* Create colors for buttons\n* (.button-primary, .button-secondary, etc.)\n*/\n.button-dropdown.button-dropdown-primary .button-dropdown-list {\n  background: rgba(64, 128, 191, 0.95);\n  border-color: #336699;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list .button-dropdown-divider {\n  border-color: #376ea4;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list > li > a {\n  color: #FFF;\n}\n.button-dropdown.button-dropdown-primary .button-dropdown-list > li > a:hover {\n  color: #f2f2f2;\n  background: #3a73ac;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list {\n  background: rgba(255, 255, 255, 0.95);\n  border-color: #e6e6e6;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list .button-dropdown-divider {\n  border-color: #ededed;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list > li > a {\n  color: #1B9AF7;\n}\n.button-dropdown.button-dropdown-plain .button-dropdown-list > li > a:hover {\n  color: #088ef0;\n  background: #f2f2f2;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list {\n  background: rgba(34, 34, 34, 0.95);\n  border-color: #090909;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list .button-dropdown-divider {\n  border-color: #101010;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list > li > a {\n  color: #EEE;\n}\n.button-dropdown.button-dropdown-inverse .button-dropdown-list > li > a:hover {\n  color: #e1e1e1;\n  background: #151515;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list {\n  background: rgba(79, 193, 233, 0.95);\n  border-color: #22b1e3;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list .button-dropdown-divider {\n  border-color: #2fb6e5;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list > li > a {\n  color: #FFF;\n}\n.button-dropdown.button-dropdown-action .button-dropdown-list > li > a:hover {\n  color: #f2f2f2;\n  background: #38b9e6;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list {\n  background: rgba(255, 182, 95, 0.95);\n  border-color: #ff9f2c;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list .button-dropdown-divider {\n  border-color: #ffa63b;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list > li > a {\n  color: #FFF;\n}\n.button-dropdown.button-dropdown-highlight .button-dropdown-list > li > a:hover {\n  color: #f2f2f2;\n  background: #ffaa46;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list {\n  background: rgba(251, 134, 120, 0.95);\n  border-color: #fa5a46;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list .button-dropdown-divider {\n  border-color: #fa6755;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list > li > a {\n  color: #FFF;\n}\n.button-dropdown.button-dropdown-caution .button-dropdown-list > li > a:hover {\n  color: #f2f2f2;\n  background: #fa705f;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list {\n  background: rgba(34, 214, 157, 0.95);\n  border-color: #1baa7d;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list .button-dropdown-divider {\n  border-color: #1db786;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list > li > a {\n  color: #FFF;\n}\n.button-dropdown.button-dropdown-royal .button-dropdown-list > li > a:hover {\n  color: #f2f2f2;\n  background: #1fc08d;\n}\n\n/*\n* Buton Groups\n*\n* A group of related buttons\n* displayed edge to edge\n*/\n.button-group {\n  position: relative;\n  display: inline-block;\n}\n.button-group:after {\n  content: \" \";\n  display: block;\n  clear: both;\n}\n.button-group .button,\n.button-group .button-dropdown {\n  float: left;\n}\n.button-group .button:not(:first-child):not(:last-child),\n.button-group .button-dropdown:not(:first-child):not(:last-child) {\n  border-radius: 0;\n  border-right: none;\n}\n.button-group .button:first-child,\n.button-group .button-dropdown:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: none;\n}\n.button-group .button:last-child,\n.button-group .button-dropdown:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n/*\n* Button Wrapper\n*\n* A wrap around effect to highlight\n* the shape of the button and offer\n* a subtle visual effect.\n*/\n.button-wrap {\n  border: 1px solid #e3e3e3;\n  display: inline-block;\n  padding: 9px;\n  background: linear-gradient(#f2f2f2, #FFF);\n  border-radius: 200px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n\n/*\n* Long Shadow Buttons\n*\n* A visual effect adding a flat shadow to the text of a button\n*/\n/*\n* Long Shadow Function\n*\n* Loops $length times building a long shadow. Defaults downward right\n*/\n/*\n* LONG SHADOW MIXIN\n*\n*/\n/*\n* Shadow Right\n*\n*/\n.button-longshadow,\n.button-longshadow-right {\n  overflow: hidden;\n}\n.button-longshadow.button-primary,\n.button-longshadow-right.button-primary {\n  text-shadow: 0px 0px #336699, 1px 1px #336699, 2px 2px #336699, 3px 3px #336699, 4px 4px #336699, 5px 5px #336699, 6px 6px #336699, 7px 7px #336699, 8px 8px #336699, 9px 9px #336699, 10px 10px #336699, 11px 11px #336699, 12px 12px #336699, 13px 13px #336699, 14px 14px #336699, 15px 15px #336699, 16px 16px #336699, 17px 17px #336699, 18px 18px #336699, 19px 19px #336699, 20px 20px #336699, 21px 21px #336699, 22px 22px #336699, 23px 23px #336699, 24px 24px #336699, 25px 25px #336699, 26px 26px #336699, 27px 27px #336699, 28px 28px #336699, 29px 29px #336699, 30px 30px #336699, 31px 31px #336699, 32px 32px #336699, 33px 33px #336699, 34px 34px #336699, 35px 35px #336699, 36px 36px #336699, 37px 37px #336699, 38px 38px #336699, 39px 39px #336699, 40px 40px #336699, 41px 41px #336699, 42px 42px #336699, 43px 43px #336699, 44px 44px #336699, 45px 45px #336699, 46px 46px #336699, 47px 47px #336699, 48px 48px #336699, 49px 49px #336699, 50px 50px #336699, 51px 51px #336699, 52px 52px #336699, 53px 53px #336699, 54px 54px #336699, 55px 55px #336699, 56px 56px #336699, 57px 57px #336699, 58px 58px #336699, 59px 59px #336699, 60px 60px #336699, 61px 61px #336699, 62px 62px #336699, 63px 63px #336699, 64px 64px #336699, 65px 65px #336699, 66px 66px #336699, 67px 67px #336699, 68px 68px #336699, 69px 69px #336699, 70px 70px #336699, 71px 71px #336699, 72px 72px #336699, 73px 73px #336699, 74px 74px #336699, 75px 75px #336699, 76px 76px #336699, 77px 77px #336699, 78px 78px #336699, 79px 79px #336699, 80px 80px #336699, 81px 81px #336699, 82px 82px #336699, 83px 83px #336699, 84px 84px #336699, 85px 85px #336699;\n}\n.button-longshadow.button-primary:active, .button-longshadow.button-primary.active, .button-longshadow.button-primary.is-active,\n.button-longshadow-right.button-primary:active,\n.button-longshadow-right.button-primary.active,\n.button-longshadow-right.button-primary.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-plain,\n.button-longshadow-right.button-plain {\n  text-shadow: 0px 0px #e6e6e6, 1px 1px #e6e6e6, 2px 2px #e6e6e6, 3px 3px #e6e6e6, 4px 4px #e6e6e6, 5px 5px #e6e6e6, 6px 6px #e6e6e6, 7px 7px #e6e6e6, 8px 8px #e6e6e6, 9px 9px #e6e6e6, 10px 10px #e6e6e6, 11px 11px #e6e6e6, 12px 12px #e6e6e6, 13px 13px #e6e6e6, 14px 14px #e6e6e6, 15px 15px #e6e6e6, 16px 16px #e6e6e6, 17px 17px #e6e6e6, 18px 18px #e6e6e6, 19px 19px #e6e6e6, 20px 20px #e6e6e6, 21px 21px #e6e6e6, 22px 22px #e6e6e6, 23px 23px #e6e6e6, 24px 24px #e6e6e6, 25px 25px #e6e6e6, 26px 26px #e6e6e6, 27px 27px #e6e6e6, 28px 28px #e6e6e6, 29px 29px #e6e6e6, 30px 30px #e6e6e6, 31px 31px #e6e6e6, 32px 32px #e6e6e6, 33px 33px #e6e6e6, 34px 34px #e6e6e6, 35px 35px #e6e6e6, 36px 36px #e6e6e6, 37px 37px #e6e6e6, 38px 38px #e6e6e6, 39px 39px #e6e6e6, 40px 40px #e6e6e6, 41px 41px #e6e6e6, 42px 42px #e6e6e6, 43px 43px #e6e6e6, 44px 44px #e6e6e6, 45px 45px #e6e6e6, 46px 46px #e6e6e6, 47px 47px #e6e6e6, 48px 48px #e6e6e6, 49px 49px #e6e6e6, 50px 50px #e6e6e6, 51px 51px #e6e6e6, 52px 52px #e6e6e6, 53px 53px #e6e6e6, 54px 54px #e6e6e6, 55px 55px #e6e6e6, 56px 56px #e6e6e6, 57px 57px #e6e6e6, 58px 58px #e6e6e6, 59px 59px #e6e6e6, 60px 60px #e6e6e6, 61px 61px #e6e6e6, 62px 62px #e6e6e6, 63px 63px #e6e6e6, 64px 64px #e6e6e6, 65px 65px #e6e6e6, 66px 66px #e6e6e6, 67px 67px #e6e6e6, 68px 68px #e6e6e6, 69px 69px #e6e6e6, 70px 70px #e6e6e6, 71px 71px #e6e6e6, 72px 72px #e6e6e6, 73px 73px #e6e6e6, 74px 74px #e6e6e6, 75px 75px #e6e6e6, 76px 76px #e6e6e6, 77px 77px #e6e6e6, 78px 78px #e6e6e6, 79px 79px #e6e6e6, 80px 80px #e6e6e6, 81px 81px #e6e6e6, 82px 82px #e6e6e6, 83px 83px #e6e6e6, 84px 84px #e6e6e6, 85px 85px #e6e6e6;\n}\n.button-longshadow.button-plain:active, .button-longshadow.button-plain.active, .button-longshadow.button-plain.is-active,\n.button-longshadow-right.button-plain:active,\n.button-longshadow-right.button-plain.active,\n.button-longshadow-right.button-plain.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-inverse,\n.button-longshadow-right.button-inverse {\n  text-shadow: 0px 0px #090909, 1px 1px #090909, 2px 2px #090909, 3px 3px #090909, 4px 4px #090909, 5px 5px #090909, 6px 6px #090909, 7px 7px #090909, 8px 8px #090909, 9px 9px #090909, 10px 10px #090909, 11px 11px #090909, 12px 12px #090909, 13px 13px #090909, 14px 14px #090909, 15px 15px #090909, 16px 16px #090909, 17px 17px #090909, 18px 18px #090909, 19px 19px #090909, 20px 20px #090909, 21px 21px #090909, 22px 22px #090909, 23px 23px #090909, 24px 24px #090909, 25px 25px #090909, 26px 26px #090909, 27px 27px #090909, 28px 28px #090909, 29px 29px #090909, 30px 30px #090909, 31px 31px #090909, 32px 32px #090909, 33px 33px #090909, 34px 34px #090909, 35px 35px #090909, 36px 36px #090909, 37px 37px #090909, 38px 38px #090909, 39px 39px #090909, 40px 40px #090909, 41px 41px #090909, 42px 42px #090909, 43px 43px #090909, 44px 44px #090909, 45px 45px #090909, 46px 46px #090909, 47px 47px #090909, 48px 48px #090909, 49px 49px #090909, 50px 50px #090909, 51px 51px #090909, 52px 52px #090909, 53px 53px #090909, 54px 54px #090909, 55px 55px #090909, 56px 56px #090909, 57px 57px #090909, 58px 58px #090909, 59px 59px #090909, 60px 60px #090909, 61px 61px #090909, 62px 62px #090909, 63px 63px #090909, 64px 64px #090909, 65px 65px #090909, 66px 66px #090909, 67px 67px #090909, 68px 68px #090909, 69px 69px #090909, 70px 70px #090909, 71px 71px #090909, 72px 72px #090909, 73px 73px #090909, 74px 74px #090909, 75px 75px #090909, 76px 76px #090909, 77px 77px #090909, 78px 78px #090909, 79px 79px #090909, 80px 80px #090909, 81px 81px #090909, 82px 82px #090909, 83px 83px #090909, 84px 84px #090909, 85px 85px #090909;\n}\n.button-longshadow.button-inverse:active, .button-longshadow.button-inverse.active, .button-longshadow.button-inverse.is-active,\n.button-longshadow-right.button-inverse:active,\n.button-longshadow-right.button-inverse.active,\n.button-longshadow-right.button-inverse.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-action,\n.button-longshadow-right.button-action {\n  text-shadow: 0px 0px #22b1e3, 1px 1px #22b1e3, 2px 2px #22b1e3, 3px 3px #22b1e3, 4px 4px #22b1e3, 5px 5px #22b1e3, 6px 6px #22b1e3, 7px 7px #22b1e3, 8px 8px #22b1e3, 9px 9px #22b1e3, 10px 10px #22b1e3, 11px 11px #22b1e3, 12px 12px #22b1e3, 13px 13px #22b1e3, 14px 14px #22b1e3, 15px 15px #22b1e3, 16px 16px #22b1e3, 17px 17px #22b1e3, 18px 18px #22b1e3, 19px 19px #22b1e3, 20px 20px #22b1e3, 21px 21px #22b1e3, 22px 22px #22b1e3, 23px 23px #22b1e3, 24px 24px #22b1e3, 25px 25px #22b1e3, 26px 26px #22b1e3, 27px 27px #22b1e3, 28px 28px #22b1e3, 29px 29px #22b1e3, 30px 30px #22b1e3, 31px 31px #22b1e3, 32px 32px #22b1e3, 33px 33px #22b1e3, 34px 34px #22b1e3, 35px 35px #22b1e3, 36px 36px #22b1e3, 37px 37px #22b1e3, 38px 38px #22b1e3, 39px 39px #22b1e3, 40px 40px #22b1e3, 41px 41px #22b1e3, 42px 42px #22b1e3, 43px 43px #22b1e3, 44px 44px #22b1e3, 45px 45px #22b1e3, 46px 46px #22b1e3, 47px 47px #22b1e3, 48px 48px #22b1e3, 49px 49px #22b1e3, 50px 50px #22b1e3, 51px 51px #22b1e3, 52px 52px #22b1e3, 53px 53px #22b1e3, 54px 54px #22b1e3, 55px 55px #22b1e3, 56px 56px #22b1e3, 57px 57px #22b1e3, 58px 58px #22b1e3, 59px 59px #22b1e3, 60px 60px #22b1e3, 61px 61px #22b1e3, 62px 62px #22b1e3, 63px 63px #22b1e3, 64px 64px #22b1e3, 65px 65px #22b1e3, 66px 66px #22b1e3, 67px 67px #22b1e3, 68px 68px #22b1e3, 69px 69px #22b1e3, 70px 70px #22b1e3, 71px 71px #22b1e3, 72px 72px #22b1e3, 73px 73px #22b1e3, 74px 74px #22b1e3, 75px 75px #22b1e3, 76px 76px #22b1e3, 77px 77px #22b1e3, 78px 78px #22b1e3, 79px 79px #22b1e3, 80px 80px #22b1e3, 81px 81px #22b1e3, 82px 82px #22b1e3, 83px 83px #22b1e3, 84px 84px #22b1e3, 85px 85px #22b1e3;\n}\n.button-longshadow.button-action:active, .button-longshadow.button-action.active, .button-longshadow.button-action.is-active,\n.button-longshadow-right.button-action:active,\n.button-longshadow-right.button-action.active,\n.button-longshadow-right.button-action.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-highlight,\n.button-longshadow-right.button-highlight {\n  text-shadow: 0px 0px #ff9f2c, 1px 1px #ff9f2c, 2px 2px #ff9f2c, 3px 3px #ff9f2c, 4px 4px #ff9f2c, 5px 5px #ff9f2c, 6px 6px #ff9f2c, 7px 7px #ff9f2c, 8px 8px #ff9f2c, 9px 9px #ff9f2c, 10px 10px #ff9f2c, 11px 11px #ff9f2c, 12px 12px #ff9f2c, 13px 13px #ff9f2c, 14px 14px #ff9f2c, 15px 15px #ff9f2c, 16px 16px #ff9f2c, 17px 17px #ff9f2c, 18px 18px #ff9f2c, 19px 19px #ff9f2c, 20px 20px #ff9f2c, 21px 21px #ff9f2c, 22px 22px #ff9f2c, 23px 23px #ff9f2c, 24px 24px #ff9f2c, 25px 25px #ff9f2c, 26px 26px #ff9f2c, 27px 27px #ff9f2c, 28px 28px #ff9f2c, 29px 29px #ff9f2c, 30px 30px #ff9f2c, 31px 31px #ff9f2c, 32px 32px #ff9f2c, 33px 33px #ff9f2c, 34px 34px #ff9f2c, 35px 35px #ff9f2c, 36px 36px #ff9f2c, 37px 37px #ff9f2c, 38px 38px #ff9f2c, 39px 39px #ff9f2c, 40px 40px #ff9f2c, 41px 41px #ff9f2c, 42px 42px #ff9f2c, 43px 43px #ff9f2c, 44px 44px #ff9f2c, 45px 45px #ff9f2c, 46px 46px #ff9f2c, 47px 47px #ff9f2c, 48px 48px #ff9f2c, 49px 49px #ff9f2c, 50px 50px #ff9f2c, 51px 51px #ff9f2c, 52px 52px #ff9f2c, 53px 53px #ff9f2c, 54px 54px #ff9f2c, 55px 55px #ff9f2c, 56px 56px #ff9f2c, 57px 57px #ff9f2c, 58px 58px #ff9f2c, 59px 59px #ff9f2c, 60px 60px #ff9f2c, 61px 61px #ff9f2c, 62px 62px #ff9f2c, 63px 63px #ff9f2c, 64px 64px #ff9f2c, 65px 65px #ff9f2c, 66px 66px #ff9f2c, 67px 67px #ff9f2c, 68px 68px #ff9f2c, 69px 69px #ff9f2c, 70px 70px #ff9f2c, 71px 71px #ff9f2c, 72px 72px #ff9f2c, 73px 73px #ff9f2c, 74px 74px #ff9f2c, 75px 75px #ff9f2c, 76px 76px #ff9f2c, 77px 77px #ff9f2c, 78px 78px #ff9f2c, 79px 79px #ff9f2c, 80px 80px #ff9f2c, 81px 81px #ff9f2c, 82px 82px #ff9f2c, 83px 83px #ff9f2c, 84px 84px #ff9f2c, 85px 85px #ff9f2c;\n}\n.button-longshadow.button-highlight:active, .button-longshadow.button-highlight.active, .button-longshadow.button-highlight.is-active,\n.button-longshadow-right.button-highlight:active,\n.button-longshadow-right.button-highlight.active,\n.button-longshadow-right.button-highlight.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-caution,\n.button-longshadow-right.button-caution {\n  text-shadow: 0px 0px #fa5a46, 1px 1px #fa5a46, 2px 2px #fa5a46, 3px 3px #fa5a46, 4px 4px #fa5a46, 5px 5px #fa5a46, 6px 6px #fa5a46, 7px 7px #fa5a46, 8px 8px #fa5a46, 9px 9px #fa5a46, 10px 10px #fa5a46, 11px 11px #fa5a46, 12px 12px #fa5a46, 13px 13px #fa5a46, 14px 14px #fa5a46, 15px 15px #fa5a46, 16px 16px #fa5a46, 17px 17px #fa5a46, 18px 18px #fa5a46, 19px 19px #fa5a46, 20px 20px #fa5a46, 21px 21px #fa5a46, 22px 22px #fa5a46, 23px 23px #fa5a46, 24px 24px #fa5a46, 25px 25px #fa5a46, 26px 26px #fa5a46, 27px 27px #fa5a46, 28px 28px #fa5a46, 29px 29px #fa5a46, 30px 30px #fa5a46, 31px 31px #fa5a46, 32px 32px #fa5a46, 33px 33px #fa5a46, 34px 34px #fa5a46, 35px 35px #fa5a46, 36px 36px #fa5a46, 37px 37px #fa5a46, 38px 38px #fa5a46, 39px 39px #fa5a46, 40px 40px #fa5a46, 41px 41px #fa5a46, 42px 42px #fa5a46, 43px 43px #fa5a46, 44px 44px #fa5a46, 45px 45px #fa5a46, 46px 46px #fa5a46, 47px 47px #fa5a46, 48px 48px #fa5a46, 49px 49px #fa5a46, 50px 50px #fa5a46, 51px 51px #fa5a46, 52px 52px #fa5a46, 53px 53px #fa5a46, 54px 54px #fa5a46, 55px 55px #fa5a46, 56px 56px #fa5a46, 57px 57px #fa5a46, 58px 58px #fa5a46, 59px 59px #fa5a46, 60px 60px #fa5a46, 61px 61px #fa5a46, 62px 62px #fa5a46, 63px 63px #fa5a46, 64px 64px #fa5a46, 65px 65px #fa5a46, 66px 66px #fa5a46, 67px 67px #fa5a46, 68px 68px #fa5a46, 69px 69px #fa5a46, 70px 70px #fa5a46, 71px 71px #fa5a46, 72px 72px #fa5a46, 73px 73px #fa5a46, 74px 74px #fa5a46, 75px 75px #fa5a46, 76px 76px #fa5a46, 77px 77px #fa5a46, 78px 78px #fa5a46, 79px 79px #fa5a46, 80px 80px #fa5a46, 81px 81px #fa5a46, 82px 82px #fa5a46, 83px 83px #fa5a46, 84px 84px #fa5a46, 85px 85px #fa5a46;\n}\n.button-longshadow.button-caution:active, .button-longshadow.button-caution.active, .button-longshadow.button-caution.is-active,\n.button-longshadow-right.button-caution:active,\n.button-longshadow-right.button-caution.active,\n.button-longshadow-right.button-caution.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow.button-royal,\n.button-longshadow-right.button-royal {\n  text-shadow: 0px 0px #1baa7d, 1px 1px #1baa7d, 2px 2px #1baa7d, 3px 3px #1baa7d, 4px 4px #1baa7d, 5px 5px #1baa7d, 6px 6px #1baa7d, 7px 7px #1baa7d, 8px 8px #1baa7d, 9px 9px #1baa7d, 10px 10px #1baa7d, 11px 11px #1baa7d, 12px 12px #1baa7d, 13px 13px #1baa7d, 14px 14px #1baa7d, 15px 15px #1baa7d, 16px 16px #1baa7d, 17px 17px #1baa7d, 18px 18px #1baa7d, 19px 19px #1baa7d, 20px 20px #1baa7d, 21px 21px #1baa7d, 22px 22px #1baa7d, 23px 23px #1baa7d, 24px 24px #1baa7d, 25px 25px #1baa7d, 26px 26px #1baa7d, 27px 27px #1baa7d, 28px 28px #1baa7d, 29px 29px #1baa7d, 30px 30px #1baa7d, 31px 31px #1baa7d, 32px 32px #1baa7d, 33px 33px #1baa7d, 34px 34px #1baa7d, 35px 35px #1baa7d, 36px 36px #1baa7d, 37px 37px #1baa7d, 38px 38px #1baa7d, 39px 39px #1baa7d, 40px 40px #1baa7d, 41px 41px #1baa7d, 42px 42px #1baa7d, 43px 43px #1baa7d, 44px 44px #1baa7d, 45px 45px #1baa7d, 46px 46px #1baa7d, 47px 47px #1baa7d, 48px 48px #1baa7d, 49px 49px #1baa7d, 50px 50px #1baa7d, 51px 51px #1baa7d, 52px 52px #1baa7d, 53px 53px #1baa7d, 54px 54px #1baa7d, 55px 55px #1baa7d, 56px 56px #1baa7d, 57px 57px #1baa7d, 58px 58px #1baa7d, 59px 59px #1baa7d, 60px 60px #1baa7d, 61px 61px #1baa7d, 62px 62px #1baa7d, 63px 63px #1baa7d, 64px 64px #1baa7d, 65px 65px #1baa7d, 66px 66px #1baa7d, 67px 67px #1baa7d, 68px 68px #1baa7d, 69px 69px #1baa7d, 70px 70px #1baa7d, 71px 71px #1baa7d, 72px 72px #1baa7d, 73px 73px #1baa7d, 74px 74px #1baa7d, 75px 75px #1baa7d, 76px 76px #1baa7d, 77px 77px #1baa7d, 78px 78px #1baa7d, 79px 79px #1baa7d, 80px 80px #1baa7d, 81px 81px #1baa7d, 82px 82px #1baa7d, 83px 83px #1baa7d, 84px 84px #1baa7d, 85px 85px #1baa7d;\n}\n.button-longshadow.button-royal:active, .button-longshadow.button-royal.active, .button-longshadow.button-royal.is-active,\n.button-longshadow-right.button-royal:active,\n.button-longshadow-right.button-royal.active,\n.button-longshadow-right.button-royal.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n\n/*\n* Shadow Left\n*\n*/\n.button-longshadow-left {\n  overflow: hidden;\n}\n.button-longshadow-left.button-primary {\n  text-shadow: 0px 0px #336699, -1px 1px #336699, -2px 2px #336699, -3px 3px #336699, -4px 4px #336699, -5px 5px #336699, -6px 6px #336699, -7px 7px #336699, -8px 8px #336699, -9px 9px #336699, -10px 10px #336699, -11px 11px #336699, -12px 12px #336699, -13px 13px #336699, -14px 14px #336699, -15px 15px #336699, -16px 16px #336699, -17px 17px #336699, -18px 18px #336699, -19px 19px #336699, -20px 20px #336699, -21px 21px #336699, -22px 22px #336699, -23px 23px #336699, -24px 24px #336699, -25px 25px #336699, -26px 26px #336699, -27px 27px #336699, -28px 28px #336699, -29px 29px #336699, -30px 30px #336699, -31px 31px #336699, -32px 32px #336699, -33px 33px #336699, -34px 34px #336699, -35px 35px #336699, -36px 36px #336699, -37px 37px #336699, -38px 38px #336699, -39px 39px #336699, -40px 40px #336699, -41px 41px #336699, -42px 42px #336699, -43px 43px #336699, -44px 44px #336699, -45px 45px #336699, -46px 46px #336699, -47px 47px #336699, -48px 48px #336699, -49px 49px #336699, -50px 50px #336699, -51px 51px #336699, -52px 52px #336699, -53px 53px #336699, -54px 54px #336699, -55px 55px #336699, -56px 56px #336699, -57px 57px #336699, -58px 58px #336699, -59px 59px #336699, -60px 60px #336699, -61px 61px #336699, -62px 62px #336699, -63px 63px #336699, -64px 64px #336699, -65px 65px #336699, -66px 66px #336699, -67px 67px #336699, -68px 68px #336699, -69px 69px #336699, -70px 70px #336699, -71px 71px #336699, -72px 72px #336699, -73px 73px #336699, -74px 74px #336699, -75px 75px #336699, -76px 76px #336699, -77px 77px #336699, -78px 78px #336699, -79px 79px #336699, -80px 80px #336699, -81px 81px #336699, -82px 82px #336699, -83px 83px #336699, -84px 84px #336699, -85px 85px #336699;\n}\n.button-longshadow-left.button-primary:active, .button-longshadow-left.button-primary.active, .button-longshadow-left.button-primary.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-plain {\n  text-shadow: 0px 0px #e6e6e6, -1px 1px #e6e6e6, -2px 2px #e6e6e6, -3px 3px #e6e6e6, -4px 4px #e6e6e6, -5px 5px #e6e6e6, -6px 6px #e6e6e6, -7px 7px #e6e6e6, -8px 8px #e6e6e6, -9px 9px #e6e6e6, -10px 10px #e6e6e6, -11px 11px #e6e6e6, -12px 12px #e6e6e6, -13px 13px #e6e6e6, -14px 14px #e6e6e6, -15px 15px #e6e6e6, -16px 16px #e6e6e6, -17px 17px #e6e6e6, -18px 18px #e6e6e6, -19px 19px #e6e6e6, -20px 20px #e6e6e6, -21px 21px #e6e6e6, -22px 22px #e6e6e6, -23px 23px #e6e6e6, -24px 24px #e6e6e6, -25px 25px #e6e6e6, -26px 26px #e6e6e6, -27px 27px #e6e6e6, -28px 28px #e6e6e6, -29px 29px #e6e6e6, -30px 30px #e6e6e6, -31px 31px #e6e6e6, -32px 32px #e6e6e6, -33px 33px #e6e6e6, -34px 34px #e6e6e6, -35px 35px #e6e6e6, -36px 36px #e6e6e6, -37px 37px #e6e6e6, -38px 38px #e6e6e6, -39px 39px #e6e6e6, -40px 40px #e6e6e6, -41px 41px #e6e6e6, -42px 42px #e6e6e6, -43px 43px #e6e6e6, -44px 44px #e6e6e6, -45px 45px #e6e6e6, -46px 46px #e6e6e6, -47px 47px #e6e6e6, -48px 48px #e6e6e6, -49px 49px #e6e6e6, -50px 50px #e6e6e6, -51px 51px #e6e6e6, -52px 52px #e6e6e6, -53px 53px #e6e6e6, -54px 54px #e6e6e6, -55px 55px #e6e6e6, -56px 56px #e6e6e6, -57px 57px #e6e6e6, -58px 58px #e6e6e6, -59px 59px #e6e6e6, -60px 60px #e6e6e6, -61px 61px #e6e6e6, -62px 62px #e6e6e6, -63px 63px #e6e6e6, -64px 64px #e6e6e6, -65px 65px #e6e6e6, -66px 66px #e6e6e6, -67px 67px #e6e6e6, -68px 68px #e6e6e6, -69px 69px #e6e6e6, -70px 70px #e6e6e6, -71px 71px #e6e6e6, -72px 72px #e6e6e6, -73px 73px #e6e6e6, -74px 74px #e6e6e6, -75px 75px #e6e6e6, -76px 76px #e6e6e6, -77px 77px #e6e6e6, -78px 78px #e6e6e6, -79px 79px #e6e6e6, -80px 80px #e6e6e6, -81px 81px #e6e6e6, -82px 82px #e6e6e6, -83px 83px #e6e6e6, -84px 84px #e6e6e6, -85px 85px #e6e6e6;\n}\n.button-longshadow-left.button-plain:active, .button-longshadow-left.button-plain.active, .button-longshadow-left.button-plain.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-inverse {\n  text-shadow: 0px 0px #090909, -1px 1px #090909, -2px 2px #090909, -3px 3px #090909, -4px 4px #090909, -5px 5px #090909, -6px 6px #090909, -7px 7px #090909, -8px 8px #090909, -9px 9px #090909, -10px 10px #090909, -11px 11px #090909, -12px 12px #090909, -13px 13px #090909, -14px 14px #090909, -15px 15px #090909, -16px 16px #090909, -17px 17px #090909, -18px 18px #090909, -19px 19px #090909, -20px 20px #090909, -21px 21px #090909, -22px 22px #090909, -23px 23px #090909, -24px 24px #090909, -25px 25px #090909, -26px 26px #090909, -27px 27px #090909, -28px 28px #090909, -29px 29px #090909, -30px 30px #090909, -31px 31px #090909, -32px 32px #090909, -33px 33px #090909, -34px 34px #090909, -35px 35px #090909, -36px 36px #090909, -37px 37px #090909, -38px 38px #090909, -39px 39px #090909, -40px 40px #090909, -41px 41px #090909, -42px 42px #090909, -43px 43px #090909, -44px 44px #090909, -45px 45px #090909, -46px 46px #090909, -47px 47px #090909, -48px 48px #090909, -49px 49px #090909, -50px 50px #090909, -51px 51px #090909, -52px 52px #090909, -53px 53px #090909, -54px 54px #090909, -55px 55px #090909, -56px 56px #090909, -57px 57px #090909, -58px 58px #090909, -59px 59px #090909, -60px 60px #090909, -61px 61px #090909, -62px 62px #090909, -63px 63px #090909, -64px 64px #090909, -65px 65px #090909, -66px 66px #090909, -67px 67px #090909, -68px 68px #090909, -69px 69px #090909, -70px 70px #090909, -71px 71px #090909, -72px 72px #090909, -73px 73px #090909, -74px 74px #090909, -75px 75px #090909, -76px 76px #090909, -77px 77px #090909, -78px 78px #090909, -79px 79px #090909, -80px 80px #090909, -81px 81px #090909, -82px 82px #090909, -83px 83px #090909, -84px 84px #090909, -85px 85px #090909;\n}\n.button-longshadow-left.button-inverse:active, .button-longshadow-left.button-inverse.active, .button-longshadow-left.button-inverse.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-action {\n  text-shadow: 0px 0px #22b1e3, -1px 1px #22b1e3, -2px 2px #22b1e3, -3px 3px #22b1e3, -4px 4px #22b1e3, -5px 5px #22b1e3, -6px 6px #22b1e3, -7px 7px #22b1e3, -8px 8px #22b1e3, -9px 9px #22b1e3, -10px 10px #22b1e3, -11px 11px #22b1e3, -12px 12px #22b1e3, -13px 13px #22b1e3, -14px 14px #22b1e3, -15px 15px #22b1e3, -16px 16px #22b1e3, -17px 17px #22b1e3, -18px 18px #22b1e3, -19px 19px #22b1e3, -20px 20px #22b1e3, -21px 21px #22b1e3, -22px 22px #22b1e3, -23px 23px #22b1e3, -24px 24px #22b1e3, -25px 25px #22b1e3, -26px 26px #22b1e3, -27px 27px #22b1e3, -28px 28px #22b1e3, -29px 29px #22b1e3, -30px 30px #22b1e3, -31px 31px #22b1e3, -32px 32px #22b1e3, -33px 33px #22b1e3, -34px 34px #22b1e3, -35px 35px #22b1e3, -36px 36px #22b1e3, -37px 37px #22b1e3, -38px 38px #22b1e3, -39px 39px #22b1e3, -40px 40px #22b1e3, -41px 41px #22b1e3, -42px 42px #22b1e3, -43px 43px #22b1e3, -44px 44px #22b1e3, -45px 45px #22b1e3, -46px 46px #22b1e3, -47px 47px #22b1e3, -48px 48px #22b1e3, -49px 49px #22b1e3, -50px 50px #22b1e3, -51px 51px #22b1e3, -52px 52px #22b1e3, -53px 53px #22b1e3, -54px 54px #22b1e3, -55px 55px #22b1e3, -56px 56px #22b1e3, -57px 57px #22b1e3, -58px 58px #22b1e3, -59px 59px #22b1e3, -60px 60px #22b1e3, -61px 61px #22b1e3, -62px 62px #22b1e3, -63px 63px #22b1e3, -64px 64px #22b1e3, -65px 65px #22b1e3, -66px 66px #22b1e3, -67px 67px #22b1e3, -68px 68px #22b1e3, -69px 69px #22b1e3, -70px 70px #22b1e3, -71px 71px #22b1e3, -72px 72px #22b1e3, -73px 73px #22b1e3, -74px 74px #22b1e3, -75px 75px #22b1e3, -76px 76px #22b1e3, -77px 77px #22b1e3, -78px 78px #22b1e3, -79px 79px #22b1e3, -80px 80px #22b1e3, -81px 81px #22b1e3, -82px 82px #22b1e3, -83px 83px #22b1e3, -84px 84px #22b1e3, -85px 85px #22b1e3;\n}\n.button-longshadow-left.button-action:active, .button-longshadow-left.button-action.active, .button-longshadow-left.button-action.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-highlight {\n  text-shadow: 0px 0px #ff9f2c, -1px 1px #ff9f2c, -2px 2px #ff9f2c, -3px 3px #ff9f2c, -4px 4px #ff9f2c, -5px 5px #ff9f2c, -6px 6px #ff9f2c, -7px 7px #ff9f2c, -8px 8px #ff9f2c, -9px 9px #ff9f2c, -10px 10px #ff9f2c, -11px 11px #ff9f2c, -12px 12px #ff9f2c, -13px 13px #ff9f2c, -14px 14px #ff9f2c, -15px 15px #ff9f2c, -16px 16px #ff9f2c, -17px 17px #ff9f2c, -18px 18px #ff9f2c, -19px 19px #ff9f2c, -20px 20px #ff9f2c, -21px 21px #ff9f2c, -22px 22px #ff9f2c, -23px 23px #ff9f2c, -24px 24px #ff9f2c, -25px 25px #ff9f2c, -26px 26px #ff9f2c, -27px 27px #ff9f2c, -28px 28px #ff9f2c, -29px 29px #ff9f2c, -30px 30px #ff9f2c, -31px 31px #ff9f2c, -32px 32px #ff9f2c, -33px 33px #ff9f2c, -34px 34px #ff9f2c, -35px 35px #ff9f2c, -36px 36px #ff9f2c, -37px 37px #ff9f2c, -38px 38px #ff9f2c, -39px 39px #ff9f2c, -40px 40px #ff9f2c, -41px 41px #ff9f2c, -42px 42px #ff9f2c, -43px 43px #ff9f2c, -44px 44px #ff9f2c, -45px 45px #ff9f2c, -46px 46px #ff9f2c, -47px 47px #ff9f2c, -48px 48px #ff9f2c, -49px 49px #ff9f2c, -50px 50px #ff9f2c, -51px 51px #ff9f2c, -52px 52px #ff9f2c, -53px 53px #ff9f2c, -54px 54px #ff9f2c, -55px 55px #ff9f2c, -56px 56px #ff9f2c, -57px 57px #ff9f2c, -58px 58px #ff9f2c, -59px 59px #ff9f2c, -60px 60px #ff9f2c, -61px 61px #ff9f2c, -62px 62px #ff9f2c, -63px 63px #ff9f2c, -64px 64px #ff9f2c, -65px 65px #ff9f2c, -66px 66px #ff9f2c, -67px 67px #ff9f2c, -68px 68px #ff9f2c, -69px 69px #ff9f2c, -70px 70px #ff9f2c, -71px 71px #ff9f2c, -72px 72px #ff9f2c, -73px 73px #ff9f2c, -74px 74px #ff9f2c, -75px 75px #ff9f2c, -76px 76px #ff9f2c, -77px 77px #ff9f2c, -78px 78px #ff9f2c, -79px 79px #ff9f2c, -80px 80px #ff9f2c, -81px 81px #ff9f2c, -82px 82px #ff9f2c, -83px 83px #ff9f2c, -84px 84px #ff9f2c, -85px 85px #ff9f2c;\n}\n.button-longshadow-left.button-highlight:active, .button-longshadow-left.button-highlight.active, .button-longshadow-left.button-highlight.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-caution {\n  text-shadow: 0px 0px #fa5a46, -1px 1px #fa5a46, -2px 2px #fa5a46, -3px 3px #fa5a46, -4px 4px #fa5a46, -5px 5px #fa5a46, -6px 6px #fa5a46, -7px 7px #fa5a46, -8px 8px #fa5a46, -9px 9px #fa5a46, -10px 10px #fa5a46, -11px 11px #fa5a46, -12px 12px #fa5a46, -13px 13px #fa5a46, -14px 14px #fa5a46, -15px 15px #fa5a46, -16px 16px #fa5a46, -17px 17px #fa5a46, -18px 18px #fa5a46, -19px 19px #fa5a46, -20px 20px #fa5a46, -21px 21px #fa5a46, -22px 22px #fa5a46, -23px 23px #fa5a46, -24px 24px #fa5a46, -25px 25px #fa5a46, -26px 26px #fa5a46, -27px 27px #fa5a46, -28px 28px #fa5a46, -29px 29px #fa5a46, -30px 30px #fa5a46, -31px 31px #fa5a46, -32px 32px #fa5a46, -33px 33px #fa5a46, -34px 34px #fa5a46, -35px 35px #fa5a46, -36px 36px #fa5a46, -37px 37px #fa5a46, -38px 38px #fa5a46, -39px 39px #fa5a46, -40px 40px #fa5a46, -41px 41px #fa5a46, -42px 42px #fa5a46, -43px 43px #fa5a46, -44px 44px #fa5a46, -45px 45px #fa5a46, -46px 46px #fa5a46, -47px 47px #fa5a46, -48px 48px #fa5a46, -49px 49px #fa5a46, -50px 50px #fa5a46, -51px 51px #fa5a46, -52px 52px #fa5a46, -53px 53px #fa5a46, -54px 54px #fa5a46, -55px 55px #fa5a46, -56px 56px #fa5a46, -57px 57px #fa5a46, -58px 58px #fa5a46, -59px 59px #fa5a46, -60px 60px #fa5a46, -61px 61px #fa5a46, -62px 62px #fa5a46, -63px 63px #fa5a46, -64px 64px #fa5a46, -65px 65px #fa5a46, -66px 66px #fa5a46, -67px 67px #fa5a46, -68px 68px #fa5a46, -69px 69px #fa5a46, -70px 70px #fa5a46, -71px 71px #fa5a46, -72px 72px #fa5a46, -73px 73px #fa5a46, -74px 74px #fa5a46, -75px 75px #fa5a46, -76px 76px #fa5a46, -77px 77px #fa5a46, -78px 78px #fa5a46, -79px 79px #fa5a46, -80px 80px #fa5a46, -81px 81px #fa5a46, -82px 82px #fa5a46, -83px 83px #fa5a46, -84px 84px #fa5a46, -85px 85px #fa5a46;\n}\n.button-longshadow-left.button-caution:active, .button-longshadow-left.button-caution.active, .button-longshadow-left.button-caution.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.button-longshadow-left.button-royal {\n  text-shadow: 0px 0px #1baa7d, -1px 1px #1baa7d, -2px 2px #1baa7d, -3px 3px #1baa7d, -4px 4px #1baa7d, -5px 5px #1baa7d, -6px 6px #1baa7d, -7px 7px #1baa7d, -8px 8px #1baa7d, -9px 9px #1baa7d, -10px 10px #1baa7d, -11px 11px #1baa7d, -12px 12px #1baa7d, -13px 13px #1baa7d, -14px 14px #1baa7d, -15px 15px #1baa7d, -16px 16px #1baa7d, -17px 17px #1baa7d, -18px 18px #1baa7d, -19px 19px #1baa7d, -20px 20px #1baa7d, -21px 21px #1baa7d, -22px 22px #1baa7d, -23px 23px #1baa7d, -24px 24px #1baa7d, -25px 25px #1baa7d, -26px 26px #1baa7d, -27px 27px #1baa7d, -28px 28px #1baa7d, -29px 29px #1baa7d, -30px 30px #1baa7d, -31px 31px #1baa7d, -32px 32px #1baa7d, -33px 33px #1baa7d, -34px 34px #1baa7d, -35px 35px #1baa7d, -36px 36px #1baa7d, -37px 37px #1baa7d, -38px 38px #1baa7d, -39px 39px #1baa7d, -40px 40px #1baa7d, -41px 41px #1baa7d, -42px 42px #1baa7d, -43px 43px #1baa7d, -44px 44px #1baa7d, -45px 45px #1baa7d, -46px 46px #1baa7d, -47px 47px #1baa7d, -48px 48px #1baa7d, -49px 49px #1baa7d, -50px 50px #1baa7d, -51px 51px #1baa7d, -52px 52px #1baa7d, -53px 53px #1baa7d, -54px 54px #1baa7d, -55px 55px #1baa7d, -56px 56px #1baa7d, -57px 57px #1baa7d, -58px 58px #1baa7d, -59px 59px #1baa7d, -60px 60px #1baa7d, -61px 61px #1baa7d, -62px 62px #1baa7d, -63px 63px #1baa7d, -64px 64px #1baa7d, -65px 65px #1baa7d, -66px 66px #1baa7d, -67px 67px #1baa7d, -68px 68px #1baa7d, -69px 69px #1baa7d, -70px 70px #1baa7d, -71px 71px #1baa7d, -72px 72px #1baa7d, -73px 73px #1baa7d, -74px 74px #1baa7d, -75px 75px #1baa7d, -76px 76px #1baa7d, -77px 77px #1baa7d, -78px 78px #1baa7d, -79px 79px #1baa7d, -80px 80px #1baa7d, -81px 81px #1baa7d, -82px 82px #1baa7d, -83px 83px #1baa7d, -84px 84px #1baa7d, -85px 85px #1baa7d;\n}\n.button-longshadow-left.button-royal:active, .button-longshadow-left.button-royal.active, .button-longshadow-left.button-royal.is-active {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n\n/*\n* Button Sizes\n*\n* This file creates the various button sizes\n* (ex. .button-large, .button-small, etc.)\n*/\n.button-giant {\n  font-size: 28px;\n  height: 70px;\n  line-height: 70px;\n  padding: 0 70px;\n}\n.button-jumbo {\n  font-size: 24px;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 60px;\n}\n.button-large {\n  font-size: 20px;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 50px;\n}\n.button-normal {\n  font-size: 16px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0 40px;\n}\n.button-small {\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 30px;\n}\n.button-tiny {\n  font-size: 9.6px;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 24px;\n}\na:hover,\na:focus {\n  color: #000;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ladda-spinner div {\n    top: 5px !important;\n    left: 5px !important;\n}\n.quick_shortcuts .btn-responsive,.quick_shortcuts .btn-block {\n    margin-top: 0.5rem;\n}\n.ui-group-buttons .btn-default{\n    background-color: #ccc;\n}\n.example-buttons .btn{\n    padding: 0.6rem 1.25rem;\n    font-size: 1.1rem;\n}\n.hvr-buzz{\n    padding-right: 40px;\n    padding-left: 40px;\n    color: #666;\n}\n.ui-group-buttons .or-lg:before{\n        width:1.5em;\n        height:1.5em;\n        top: 7px;\n        left:85%;\n}\n.ui-group-buttons .or-lg:after{\n        height:2.75rem !important;\n}\n.or-sm:after{\n        border-bottom: 2rem solid #5a5a5a !important;\n}\n.pad_left .ladda-button{\n        margin-bottom: 10px;\n}\n.flatbuttons  .hvr-buzz:hover{\n        color: #333;\n}\n.button:active,.btn:active,.btn-success:focus,.ui-group-buttons .btn-default,.ui-group-buttons a{\n        color:#fff !important;\n}\n.button-default:active,.hvr-buzz:active,.btn-default.text-dark:active{\n        color: #333 !important;\n}\n.btn-animate-vertical{\n        padding: 8px 12px;\n}\n.ui-group-buttons .or:after{\n        height:2.75em;\n}\n.ui-group-buttons .or.or-sm{\n        height: 1.4em;\n}\n@media(max-width: 1024px){\n.boxed .pad_left{\n            padding-left: 0;\n}\n.boxed .pad_left .text-left .col-md-2,.boxed .pad_left .text-left .col-sm-4{\n            padding-left: 13px;\n            padding-right: 13px;\n            margin-right: 10px;\n}\n.labled_buttons .col-md-6{\n            margin-right: 10px;\n}\n}\n.btn-labeled{\n        margin-bottom: 10px;\n}\n.flatbuttons ul{\n        padding-top: 0;\n}\n.flatbuttons button{\n        margin-top: 0;\n}\n", ""]);

// exports


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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/advbuttons.css?vue&type=style&index=3&lang=css&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/advbuttons.css?vue&type=style&index=3&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* flatbuttons */\nli {\r\n    list-style : none;\n}\n.flatbuttons {\r\n    padding-left : 4%;\n}\n.flatbuttons ul {\r\n    padding : 20px;\n}\n.flatbuttons ul li {\r\n    width      : 145px;\r\n    float      : left;\r\n    padding    : 5px;\r\n    list-style : none;\n}\n.flatbuttons div {\r\n    clear          : both;\r\n    padding-top    : 15px;\r\n    padding-bottom : 0;\n}\n.btn-rounded .button {\r\n    padding : 0 18px;\n}\n.flatbuttons .icon-btn {\r\n    padding : 0 29px;\n}\r\n/* flatbuttons for small width. */\n.flatbuttons_small ul li {\r\n    width   : 138px;\r\n    float   : left;\r\n    padding : 10px 20px 20px 0;\n}\r\n/*quick icons*/\n.panel-body .btn:not(.btn-block) {\r\n    margin-bottom : 10px;\n}\r\n/*Group buttons panel*/\n.ui-group-buttons .or {\r\n    position  : relative;\r\n    float     : left;\r\n    width     : .3em;\r\n    height    : 1.3em;\r\n    z-index   : 3;\r\n    font-size : 12px\n}\n.ui-group-buttons .or:before {\r\n    position           : absolute;\r\n    top                : 50%;\r\n    left               : 50%;\r\n    content            : 'or';\r\n    background-color   : #5a5a5a;\r\n    margin-top         : -.1em;\r\n    margin-left        : -.9em;\r\n    width              : 1.8em;\r\n    height             : 1.8em;\r\n    line-height        : 1.55;\r\n    color              : #fff;\r\n    font-style         : normal;\r\n    font-weight        : 400;\r\n    text-align         : center;\r\n    border-radius      : 500px;\r\n    -webkit-box-shadow : 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n    box-shadow         : 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-sizing : border-box;\r\n    -moz-box-sizing    : border-box;\r\n    box-sizing         : border-box\n}\n.ui-group-buttons .or:after {\r\n    position         : absolute;\r\n    top              : 0;\r\n    left             : 0;\r\n    content          : ' ';\r\n    width            : .3em;\r\n    height           : 2.84em;\r\n    background-color : rgba(0, 0, 0, 0);\r\n    border-top       : .6em solid #5a5a5a;\r\n    border-bottom    : .6em solid #5a5a5a\n}\n.ui-group-buttons .or.or-lg {\r\n    height    : 1.3em;\r\n    font-size : 16px\n}\n.ui-group-buttons .or.or-lg:after {\r\n    height : 2.85em\n}\n.ui-group-buttons .or.or-sm {\r\n    height : 1em\n}\n.ui-group-buttons .or.or-sm:after {\r\n    height : 2.5em\n}\n.ui-group-buttons .or.or-xs {\r\n    height : .25em\n}\n.ui-group-buttons .or.or-xs:after {\r\n    height  : 1.84em;\r\n    z-index : -1000\n}\n.ui-group-buttons {\r\n    display        : inline-block;\r\n    vertical-align : middle\n}\n.ui-group-buttons:after {\r\n    content    : \".\";\r\n    display    : block;\r\n    height     : 0;\r\n    clear      : both;\r\n    visibility : hidden\n}\n.ui-group-buttons .btn {\r\n    float         : left;\r\n    border-radius : 0\n}\n.ui-group-buttons .btn:first-child {\r\n    margin-left               : 0;\r\n    border-top-left-radius    : .25em;\r\n    border-bottom-left-radius : .25em;\r\n    padding-right             : 15px\n}\n.ui-group-buttons .btn:last-child {\r\n    border-top-right-radius    : .25em;\r\n    border-bottom-right-radius : .25em;\r\n    padding-left               : 15px\n}\r\n/*Group buttons panel ens here*/\r\n\r\n/*Buttons With Labels*/\n.btn-label {\r\n    position   : relative;\r\n    left       : -12px;\r\n    display    : inline-block;\r\n    padding    : 6px 15px;\r\n    background : rgba(0, 0, 0, 0.15);\r\n    /*border-radius: 3px 0 0 3px;*/\n}\n.btn-label.label-right {\r\n    left : 13px;\n}\n.btn-labeled {\r\n    padding-top    : 0;\r\n    padding-bottom : 0;\n}\n.btn_3d {\r\n    box-shadow : 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2) !important;\n}\n.button-circle {\r\n    width  : 115px;\r\n    height : 115px;\n}\r\n/*outline buttons*/\n.flatbuttons button {\r\n    margin-top : 20px;\n}\n.btn-up:before {\r\n    left                : 11%;\r\n    top                 : 373px;\r\n    margin-left         : -8px;\r\n    border-bottom-color : #6699cc;\n}\n.btn-direction:before {\r\n    position    : absolute;\r\n    line-height : 0;\r\n    content     : '';\r\n    border      : 8px solid transparent;\n}\n.btn-primary.btn-up:before {\r\n    border-bottom-color : #6699cc;\n}\n.btn-warning.btn-right:focus:before,\r\n.btn-warning.btn-right:hover:before {\r\n    border-left-color : #f0ad4e;\n}\n.btn-warning.btn-right:before {\r\n    border-left-color : #f0ad4e;\n}\n.btn-right:before {\r\n    top               : 56%;\r\n    left              : 33%;\r\n    margin-top        : -8px;\r\n    border-left-color : #e4eaec;\n}\n.btn-success.btn-bottom:before {\r\n    border-top-color : #66cc99;\n}\n.btn-bottom:before {\r\n    bottom           : 39.1%;\r\n    left             : 47%;\r\n    margin-left      : -8px;\r\n    border-top-color : #66cc99;\n}\n.btn-danger.btn-left:before {\r\n    border-right-color : #ff6666;\n}\n.btn-left:before {\r\n    top                : 56%;\r\n    left               : 58.8%;\r\n    margin-top         : -8px;\r\n    border-right-color : #ff6666;\n}\r\n/*animate button*/\n.btn-animate-side:hover span > .icon {\r\n    opacity : 1;\n}\n.btn-animate-side span > .icon {\r\n    position           : absolute;\r\n    top                : 91%;\r\n    left               : 90px;\r\n    display            : block;\r\n    opacity            : 0;\r\n    -webkit-transition : opacity .2s ease-out 0s;\r\n    -o-transition      : opacity .2s ease-out 0s;\r\n    transition         : opacity .2s ease-out 0s;\r\n    -webkit-transform  : translate(-20px, -50%);\r\n    -ms-transform      : translate(-20px, -50%);\r\n    -o-transform       : translate(-20px, -50%);\r\n    transform          : translate(-20px, -50%);\n}\n.btn-animate-vertical:hover span > .icon {\r\n    opacity : 1;\n}\n.btn-animate-vertical span > .icon {\r\n    position          : absolute;\r\n    top               : inherit;\r\n    left              : 33%;\r\n    display           : block;\r\n    font-size         : 24px;\r\n    -webkit-transform : translate(-50%, -100%);\r\n    -ms-transform     : translate(-50%, -100%);\r\n    -o-transform      : translate(-50%, -100%);\r\n    transform         : translate(-50%, -100%);\n}\n.btn .icon {\r\n    width       : 1em;\r\n    margin      : -1px 3px 0;\r\n    line-height : inherit;\r\n    text-align  : center;\n}\n.btn-animate span {\r\n    display : block;\r\n    width   : 100%;\r\n    height  : 100%;\n}\n.btn-animate-side span:hover {\r\n    -webkit-transition : -webkit-transform .2s ease-out 0s;\r\n    -o-transition      : -o-transform .2s ease-out 0s;\r\n    transition         : transform .2s ease-out 0s;\n}\n.btn-animate-side:hover {\r\n    padding : 8px 28px;\n}\r\n/* vertical animation code*/\n.btn-animate-vertical span {\r\n    -webkit-transition : all .2s ease-out 0s;\r\n    -o-transition      : all .2s ease-out 0s;\r\n    transition         : all .2s ease-out 0s;\n}\n.btn-animate-vertical:focus,\r\n.btn-animate-vertical:active,\r\n.btn-animate-vertical:hover {\r\n    outline : none;\n}\n.btn-animate-vertical span > .icon {\r\n    opacity           : 0;\r\n    position          : absolute;\r\n    top               : -2px;\r\n    left              : 50%;\r\n    display           : block;\r\n    font-size         : 24px;\r\n    -webkit-transform : translate(-50%, -100%);\r\n    -ms-transform     : translate(-50%, -100%);\r\n    -o-transform      : translate(-50%, -100%);\r\n    transform         : translate(-50%, -100%);\n}\n.btn-animate-vertical:hover span {\r\n    -webkit-transform : translate(0, 150%);\r\n    -ms-transform     : translate(0, 150%);\r\n    -o-transform      : translate(0, 150%);\r\n    transform         : translate(0, 150%)\n}\n.btn-animate-vertical.btn-xs span > .icon {\r\n    top       : -5px;\r\n    font-size : 18px\n}\n.btn-animate-vertical.btn-sm span > .icon {\r\n    top       : -3px;\r\n    font-size : 21px\n}\n.btn-animate-vertical.btn-lg span > .icon {\r\n    font-size : 37px\n}\r\n/*side animation code*/\n.btn-animate-side {\r\n    padding : 8px 28px\n}\n.btn-animate-side span {\r\n    -webkit-transition : -webkit-transform .2s ease-out 0s;\r\n    -o-transition      : -o-transform .2s ease-out 0s;\r\n    transition         : transform .2s ease-out 0s\n}\n.btn-animate-side span > .icon {\r\n    position           : absolute;\r\n    top                : 50%;\r\n    left               : 0;\r\n    display            : block;\r\n    opacity            : 0;\r\n    -webkit-transition : opacity .2s ease-out 0s;\r\n    -o-transition      : opacity .2s ease-out 0s;\r\n    transition         : opacity .2s ease-out 0s;\r\n    -webkit-transform  : translate(-20px, -50%);\r\n    -ms-transform      : translate(-20px, -50%);\r\n    -o-transform       : translate(-20px, -50%);\r\n    transform          : translate(-20px, -50%)\n}\n.btn-animate-side:hover span {\r\n    -webkit-transform : translate(10px, 0);\r\n    -ms-transform     : translate(10px, 0);\r\n    -o-transform      : translate(10px, 0);\r\n    transform         : translate(10px, 0)\n}\n.btn-animate-side:hover span > .icon {\r\n    opacity : 1\n}\n.btn-animate-side.btn-xs {\r\n    padding : 3px 14px\n}\n.btn-animate-side.btn-xs span > .icon {\r\n    left : 5px\n}\n.btn-animate-side.btn-xs:hover span {\r\n    -webkit-transform : translate(8px, 0);\r\n    -ms-transform     : translate(8px, 0);\r\n    -o-transform      : translate(8px, 0);\r\n    transform         : translate(8px, 0)\n}\n.btn-animate-side.btn-sm {\r\n    padding : 6px 22px\n}\n.btn-animate-side.btn-sm span > .icon {\r\n    left : 3px\n}\n.btn-animate-side.btn-sm:hover span {\r\n    -webkit-transform : translate(8px, 0);\r\n    -ms-transform     : translate(8px, 0);\r\n    -o-transform      : translate(8px, 0);\r\n    transform         : translate(8px, 0)\n}\n.btn-animate-side.btn-lg {\r\n    padding : 10px 33px\n}\n.btn-animate-side.btn-lg span > .icon {\r\n    left : -6px\n}\n.btn-animate-side.btn-lg:hover span {\r\n    -webkit-transform : translate(14px, 0);\r\n    -ms-transform     : translate(14px, 0);\r\n    -o-transform      : translate(14px, 0);\r\n    transform         : translate(14px, 0)\n}\n.btn-floating {\r\n    width              : 56px;\r\n    height             : 56px;\r\n    padding            : 0;\r\n    margin             : 0;\r\n    font-size          : 24px;\r\n    text-align         : center;\r\n    border-radius      : 100%;\r\n    -webkit-box-shadow : 0 6px 10px rgba(0, 0, 0, .15);\r\n    box-shadow         : 0 6px 10px rgba(0, 0, 0, .15);\n}\n.btn-floating.btn-sm {\r\n    width     : 40px;\r\n    height    : 40px;\r\n    padding   : 0;\r\n    font-size : 15px;\n}\r\n/*contract overlay button size*/\n.ladda-button[data-style=contract-overlay] {\r\n    width : 140px;\n}\n.pad_left {\r\n    padding-left : 40px;\n}\n.flatbuttons div {\r\n    padding-top : 10px;\n}\n.m-r-50 {\r\n    margin-right : 50px;\n}\n.btn-group.drop_btn {\r\n    padding-top : 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./buttons.vue?vue&type=style&index=1&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./buttons.vue?vue&type=style&index=4&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/advbuttons.css?vue&type=style&index=3&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/advbuttons.css?vue&type=style&index=3&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./advbuttons.css?vue&type=style&index=3&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/advbuttons.css?vue&type=style&index=3&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=template&id=04c1e435&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/buttons.vue?vue&type=template&id=04c1e435& ***!
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
                  "<i class='fa fa-fw ti-settings'></i> 2D Transforms Flat Buttons"
              }
            },
            [
              _c("div", { staticClass: "flatbuttons" }, [
                _c("div", { staticClass: "text-left" }, [
                  _c("h5", [_vm._v("Radiused Buttons")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mb-5" }, [
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default btn-lg hvr-buzz butn",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Buzz")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-primary-flat hvr-hang"
                        },
                        [_vm._v("Hang\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-action-flat hvr-sink"
                        },
                        [_vm._v("Sink\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-highlight-flat hvr-pop"
                        },
                        [_vm._v("Pop\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-caution-flat hvr-float"
                        },
                        [_vm._v("Float\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-rounded button-royal-flat hvr-rotate"
                        },
                        [_vm._v("Rotate\n                                ")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left btn-rounded" }, [
                  _c("h5", [_vm._v("Rounded Buttons")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mb-5" }, [
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-default button-pill button-flat hvr-grow"
                        },
                        [
                          _vm._v(
                            "\n                                    Grow Button\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-primary-flat hvr-shrink"
                        },
                        [
                          _vm._v(
                            "\n                                    ShrinkButton\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-action-flat hvr-pulse"
                        },
                        [
                          _vm._v(
                            "\n                                    Pulse Button\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-highlight-flat hvr-pulse-grow"
                        },
                        [
                          _vm._v(
                            "\n                                    Pulse-grow\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-caution-flat hvr-pulse-shrink"
                        },
                        [
                          _vm._v(
                            "\n                                    Pulse-shrink\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-pill button-royal-flat hvr-push"
                        },
                        [
                          _vm._v(
                            "\n                                    Push Button\n                                "
                          )
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left" }, [
                  _c("h5", [_vm._v("Rectangle Box")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mb-5" }, [
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-default button-flat hvr-wobble-skew"
                        },
                        [_vm._v("Button")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-primary-flat hvr-wobble-bottom"
                        },
                        [_vm._v("Button")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-action-flat hvr-wobble-to-top-right"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-highlight-flat hvr-wobble-vertical"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-caution-flat hvr-wobble-horizontal"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-royal-flat hvr-skew-backward"
                        },
                        [_vm._v("Button")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left" }, [
                  _c("h5", [_vm._v("Cirlce Buttons")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "mb-5" }, [
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-default button-circle button-flat hvr-wobble-top"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-primary-flat hvr-skew"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-action-flat hvr-wobble-to-top-right"
                        },
                        [
                          _vm._v(
                            "\n                                    Button\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-highlight-flat hvr-pulse-grow"
                        },
                        [
                          _vm._v(
                            "\n                                    Button\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-caution-flat hvr-grow"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "button button-circle button-royal-flat hvr-buzz-out"
                        },
                        [_vm._v("Button\n                                ")]
                      )
                    ])
                  ])
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
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            {
              attrs: {
                title:
                  "<i class='ti-bell'></i> Shadow and Glow Transitions Buttons"
              }
            },
            [
              _c("div", { staticClass: "flatbuttons_small" }, [
                _c("ul", [
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-default button-glow button-rounded button-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-primary-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-action-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-highlight-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-caution-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-glow button-rounded button-royal-flat hvr-float-shadow"
                      },
                      [
                        _vm._v(
                          "\n                                Button\n                            "
                        )
                      ]
                    )
                  ])
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
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-rocket'></i> Quick Shortcuts" } },
            [
              _c("div", { staticClass: "quick_shortcuts" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6 col-md-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-list-alt" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Apps\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-bookmark" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Bookmarks\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-signal" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Reports\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-comment" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Comments\n                                ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-md-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-user" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Users\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-file" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Notes\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-picture-o" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Photos\n                                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary  btn-responsive",
                        attrs: { role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-tag" }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" Tags\n                                ")
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-md-12 mt-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-lg btn-block",
                      attrs: { role: "button" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-globe" }),
                      _vm._v(" Website\n                            ")
                    ]
                  )
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
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-rocket'></i> 3-D Buttons" } },
            [
              _c("div", { staticClass: "flatbuttons" }, [
                _c("ul", [
                  _c("li", [
                    _c(
                      "button",
                      { staticClass: "button button-default button-3d" },
                      [_vm._v("Button")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-3d button-primary button-rounded btn_3d"
                      },
                      [_vm._v("Button\n                            ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-3d button-action button-pill btn_3d"
                      },
                      [_vm._v("Button\n                            ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-3d button-highlight button-circle btn_3d"
                      },
                      [_vm._v("Button\n                            ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "button button-3d button-caution icon-btn btn_3d"
                      },
                      [
                        _c("i", { staticClass: "fa ti-instagram" }),
                        _vm._v(" Button\n                            ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "button",
                      { staticClass: "button button-3d button-royal btn_3d" },
                      [_vm._v("Button")]
                    )
                  ])
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
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              attrs: {
                title: "<i class='ti-arrow-circle-up'></i> Spinner Buttons"
              }
            },
            [
              _c("div", { staticClass: "pad_left" }, [
                _c("div", { staticClass: "text-left" }, [
                  _c("div", { staticClass: "row " }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("h5", [_vm._v("Buttons")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "expand-left" }
                        },
                        [
                          _vm._v(
                            "Expand-left\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "expand-right" }
                        },
                        [
                          _vm._v(
                            "Expand-right\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "expand-up" }
                        },
                        [_vm._v("Expand-up\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "slide-down" }
                        },
                        [_vm._v("Slide-down\n                                ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "contract" }
                        },
                        [_vm._v("Contract")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3 col-xl-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-primary button_normal",
                          attrs: { "data-style": "zoom-in" }
                        },
                        [_vm._v("Zoom-in\n                                ")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row " }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("h5", [_vm._v("Icon Buttons")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "slide-left" }
                        },
                        [
                          _c("i", {
                            staticClass: "fa ti-arrow-circle-left",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            " Slide-left\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "slide-right" }
                        },
                        [
                          _vm._v("Slide-right "),
                          _c("i", {
                            staticClass: "fa ti-arrow-circle-right",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "slide-up" }
                        },
                        [
                          _vm._v("Slide-up "),
                          _c("i", {
                            staticClass: "fa ti-arrow-circle-up",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "contract" }
                        },
                        [
                          _c("i", {
                            staticClass: "fa ti-filter",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            "\n                                    Contract\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "ladda-button btn btn-info button_normal text-white",
                          attrs: { "data-style": "zoom-out" }
                        },
                        [
                          _c("i", {
                            staticClass: "fa ti-zoom-out",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Zoom-out\n                                ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12 col-sm-6" }, [
                      _c("div", { staticClass: "row text-left" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("h5", [_vm._v("Button Sizes")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ladda-button btn btn-warning btn-lg button_normal text-white",
                              attrs: { "data-style": "expand-right" }
                            },
                            [
                              _vm._v(
                                "Large\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ladda-button btn btn-warning  button_normal text-white",
                              attrs: { "data-style": "expand-right" }
                            },
                            [
                              _vm._v(
                                "Small\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12 col-sm-6" }, [
                      _c("div", { staticClass: "row text-left" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("h5", [_vm._v("Progress Button Spinners")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-5" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ladda-button btn btn-success button_progress text-white",
                              attrs: { "data-style": "expand-right" }
                            },
                            [
                              _vm._v(
                                "Expand-right\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ladda-button btn btn-success button_progress text-white",
                              attrs: { "data-style": "contract" }
                            },
                            [
                              _vm._v(
                                "contract\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
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
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              attrs: { title: "<i class='fa fa-fw ti-settings'></i> Buttons" }
            },
            [
              _c("div", { staticClass: "flatbuttons" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("h5", { staticClass: "example-title" }, [
                      _vm._v("Icon Button & Dropdown")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "example example-buttons" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-default m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-location-pin",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-primary m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-layout-grid3",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-success m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-bell",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-info m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-calendar",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-icon btn-warning btn-round m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-time",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-icon btn-danger btn-round m-r-50 mb-2",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon fa fa-fw ti-flag-alt-2",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "btn-group drop_btn",
                          attrs: { role: "group" }
                        },
                        [
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "pt-0",
                              attrs: {
                                right: "",
                                split: "",
                                variant: "primary"
                              }
                            },
                            [
                              _c("template", { slot: "button-content" }, [
                                _c("i", { staticClass: "ti-calendar more" })
                              ]),
                              _vm._v(" "),
                              _c("b-dropdown-item", [_vm._v("Dropdown")]),
                              _vm._v(" "),
                              _c("b-dropdown-item", [_vm._v("Dropdown")])
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 " }, [
                    _c("div", { staticClass: "example-wrap" }, [
                      _c("h5", { staticClass: "example-title" }, [
                        _vm._v("Button Animation")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "btn-group display_media",
                          attrs: { role: "group" }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-animate btn-animate-side btn-success m-r-50",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass: "icon fa fa-fw ti-import",
                                      attrs: { "aria-hidden": "true" }
                                    }),
                                    _vm._v("Side Animation")
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-animate btn-animate-vertical btn-lg btn-success m-r-50",
                                  attrs: { type: "button" }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass: "icon fa fa-fw ti-import",
                                      attrs: { "aria-hidden": "true" }
                                    }),
                                    _vm._v(
                                      "Vertical\n                                                                  Animation"
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
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
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            {
              attrs: {
                title: "<i class='ti-layout-column3'></i> Group buttons"
              }
            },
            [
              _c("div", [
                _c("div", { staticClass: "col-md-12 text-center" }, [
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-success",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [_c("span", { staticClass: "fa fa-thumbs-up" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [_c("span", { staticClass: "fa fa-thumbs-down" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-success",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [_c("span", { staticClass: "fa fa-floppy-o" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [_c("span", { staticClass: "fa fa-trash" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-success",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-check" }),
                        _vm._v(" Sign Up\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default",
                        attrs: { href: "#/buttons", role: "button" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-remove" }),
                        _vm._v(" Reset\n                            ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-lg",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Large")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or or-lg" }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-lg",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Large")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Default")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or" }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Success")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "ui-group-buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary ",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n                                Small\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "or or-sm" }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success ",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v(
                          "\n                                Small\n                            "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("br")
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
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            {
              staticClass: "labled-buttons",
              attrs: { title: "<i class='ti-save'></i> Buttons With Labels" }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12 col-md-12 col-12 col-sm-12" },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-success",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-check" })
                          ]),
                          _vm._v(" Success\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-danger",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-remove" })
                          ]),
                          _vm._v(" Cancel\n                            ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-warning",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-bookmark" })
                          ]),
                          _vm._v(" Bookmark\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-primary",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-camera" })
                          ]),
                          _vm._v(" Camera\n                            ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-default text-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-chevron-left" })
                          ]),
                          _vm._v(" Left\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-default text-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _vm._v("\n                                Right "),
                          _c("span", { staticClass: "btn-label label-right" }, [
                            _c("i", { staticClass: "fa fa-chevron-right" })
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-success",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-fw ti-thumb-up" })
                          ]),
                          _vm._v(" Up\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-warning",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-fw ti-thumb-down" })
                          ]),
                          _vm._v(" Down\n                            ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-info",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-refresh" })
                          ]),
                          _vm._v(" Refresh\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-labeled btn-primary",
                          attrs: { type: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-trash" })
                          ]),
                          _vm._v(" Trash\n                            ")
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-warning btn-labeled text-white",
                          attrs: { role: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label butn_clr" }, [
                            _c("i", { staticClass: "fa fa-info-circle" })
                          ]),
                          _vm._v(" Info Web\n                            ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-success btn-labeled text-white",
                          attrs: { role: "button" }
                        },
                        [
                          _c("span", { staticClass: "btn-label" }, [
                            _c("i", { staticClass: "fa fa-globe" })
                          ]),
                          _vm._v(" Web\n                            ")
                        ]
                      )
                    ])
                  ])
                ]
              )
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

/***/ "./resources/components/pages/buttons.vue":
/*!************************************************!*\
  !*** ./resources/components/pages/buttons.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_vue_vue_type_template_id_04c1e435___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.vue?vue&type=template&id=04c1e435& */ "./resources/components/pages/buttons.vue?vue&type=template&id=04c1e435&");
/* harmony import */ var _buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.vue?vue&type=script&lang=js& */ "./resources/components/pages/buttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var hover_css_css_hover_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hover.css/css/hover-min.css?vue&type=style&index=0&lang=css& */ "./node_modules/hover.css/css/hover-min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _buttons_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons.vue?vue&type=style&index=1&lang=sass& */ "./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass&");
/* harmony import */ var ladda_bootstrap_dist_ladda_themeless_min_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ladda-bootstrap/dist/ladda-themeless.min.css?vue&type=style&index=2&lang=css& */ "./node_modules/ladda-bootstrap/dist/ladda-themeless.min.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _css_advbuttons_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/advbuttons.css?vue&type=style&index=3&lang=css& */ "./resources/css/advbuttons.css?vue&type=style&index=3&lang=css&");
/* harmony import */ var _buttons_vue_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons.vue?vue&type=style&index=4&lang=css& */ "./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");










/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_7__["default"])(
  _buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _buttons_vue_vue_type_template_id_04c1e435___WEBPACK_IMPORTED_MODULE_0__["render"],
  _buttons_vue_vue_type_template_id_04c1e435___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/buttons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/buttons.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/components/pages/buttons.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./buttons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass&":
/*!**********************************************************************************!*\
  !*** ./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./buttons.vue?vue&type=style&index=1&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=style&index=1&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./buttons.vue?vue&type=style&index=4&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=style&index=4&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/buttons.vue?vue&type=template&id=04c1e435&":
/*!*******************************************************************************!*\
  !*** ./resources/components/pages/buttons.vue?vue&type=template&id=04c1e435& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_template_id_04c1e435___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./buttons.vue?vue&type=template&id=04c1e435& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/buttons.vue?vue&type=template&id=04c1e435&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_template_id_04c1e435___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_template_id_04c1e435___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/css/advbuttons.css?vue&type=style&index=3&lang=css&":
/*!***********************************************************************!*\
  !*** ./resources/css/advbuttons.css?vue&type=style&index=3&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_advbuttons_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./advbuttons.css?vue&type=style&index=3&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/advbuttons.css?vue&type=style&index=3&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_advbuttons_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_advbuttons_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_advbuttons_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_advbuttons_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_advbuttons_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);