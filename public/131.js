(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/insignia/dist/insignia.min.css?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/insignia/dist/insignia.min.css?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nsg-editor{padding:10px;cursor:text}.nsg-tag{display:inline-block;border:1px solid #666;padding:3px;margin:4px}.nsg-invalid{border-color:#c00}.nsg-tag-remove:after{margin-left:4px;padding:0 4px;content:'x';background-color:#ccc;cursor:pointer}.nsg-input{display:inline-block;padding:3px 3px 3px 8px;margin:5px 0}.nsg-input[placeholder]{min-width:100%}", ""]);

// exports


/***/ }),

/***/ "./node_modules/insignia/dist/insignia.min.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./node_modules/insignia/dist/insignia.min.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_insignia_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--5-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--5-2!./insignia.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/insignia/dist/insignia.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_insignia_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_insignia_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_insignia_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_insignia_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_insignia_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/insignia/dist/insignia.min.js":
/*!****************************************************!*\
  !*** ./node_modules/insignia/dist/insignia.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var require;var require;!function(e){if(true)module.exports=e();else { var t; }}(function(){return function e(t,n,r){function i(o,u){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!u&&l)return require(o,!0);if(a)return a(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t){"use strict";var n=e("crossvent"),r=e("./dom"),i=e("./text"),a=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent","webkitBoxSizing","mozBoxSizing","boxSizing","padding","border"],o=20;t.exports=function(e){function t(){var e,t,n=c();for(t=0;t<a.length;t++)e=n[a[t]],void 0!==e&&null!==e&&(s.style[a[t]]=e);s.disabled="disabled",s.style.whiteSpace="pre",s.style.position="absolute",s.style.top=s.style.left="-9999em"}function u(){var t=e.value;if(t!==s.value){i(s,t);var n=s.offsetWidth+o;e.style.width=n+"px"}}function l(t){var r=t?"remove":"add";n[r](e,"keydown",u),n[r](e,"keyup",u),n[r](e,"input",u),n[r](e,"paste",u),n[r](e,"change",u)}function f(){l(!0),s.parentElement.removeChild(s),e.style.width=""}function c(){return window.getComputedStyle?window.getComputedStyle(e):e.currentStyle}var s=r("span");return document.body.appendChild(s),t(),l(),{remap:t,refresh:u,destroy:f}}},{"./dom":2,"./text":12,crossvent:7}],2:[function(e,t){"use strict";t.exports=function(e,t){var n=document.createElement(e);return t&&(n.className=t),n}},{}],3:[function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){function t(e){for(var t=arguments.length<=1||void 0===arguments[1]?"data":arguments[1],n="data"===t?function(n){return gt(n[t])===gt(e)}:function(n){return n[t]===e},r=0;r<it.length;r++)if(n(it[r]))return it[r];return null}function n(e){for(var t=arguments.length<=1||void 0===arguments[1]?"data":arguments[1],n="data"===t?function(n){return gt(n[t])===gt(e)}:function(n){return n[t]===e},r=0;r<it.length;r++)if(n(it[r]))return r;return null}function i(e){var t=ft(e),n={data:e,valid:t};if(at.preventInvalid&&!t)return xt;var r=v(n);return r?(n.el=r,it.push(n),xt.emit("add",e,r),u(),xt):xt}function a(e){return e?(m(e.el),it.splice(it.indexOf(e),1),xt.emit("remove",e.data),u(),xt):xt}function u(){it.slice().forEach(function(e,t){it.splice(t,1);var n=ft(e.data,t);n?(e.el.classList.add("nsg-valid"),e.el.classList.remove("nsg-invalid")):(e.el.classList.add("nsg-invalid"),e.el.classList.remove("nsg-valid"),xt.emit("invalid",e.data,e.el)),e.valid=n,it.splice(t,0,e)})}function f(e){return a(t(e))}function s(e){return a(t(e,"el"))}function v(e){return A(ht,e)}function m(e){e.parentElement&&e.parentElement.removeChild(e)}function A(e,t){var n=t.data,r="string"==typeof n&&0===n.trim().length;if(r)return null;var i=d["default"]("span","nsg-tag");return ct(i,t),at.deletion&&i.appendChild(d["default"]("span","nsg-tag-remove")),e.appendChild(i),i}function D(e){return e}function L(){return it.filter(function(e){return e.valid}).map(function(e){return e.data})}function z(){return it.map(function(e){return e.data})}function _(){var t=bt.querySelector(".nsg-tag");t||St?t&&St&&(e.removeAttribute("placeholder"),St=!1):(e.setAttribute("placeholder",Ct),St=!0)}function j(t){var n=t?"remove":"add",r=t?"off":"on";l["default"][n](e,"keydown",X),l["default"][n](e,"keypress",$),l["default"][n](e,"paste",G),l["default"][n](bt,"click",U),st&&(l["default"][n](document.documentElement,"blur",M,!0),l["default"][n](document.documentElement,"mousedown",P)),Ct&&(xt[r]("add",_),xt[r]("remove",_),l["default"][n](e,"keydown",_),l["default"][n](e,"keypress",_),l["default"][n](e,"paste",_),l["default"][n](bt,"click",_),_())}function q(){return j(!0),e.value="",e.className=e.className.replace(O,""),bt.className=bt.className.replace(I,""),ht.parentElement&&ht.parentElement.removeChild(ht),yt.parentElement&&yt.parentElement.removeChild(yt),wt.destroy(),xt.destroyed=!0,xt.destroy=xt.addItem=xt.removeItem=function(){return xt},xt.tags=xt.value=function(){return null},xt}function R(){return(new Date).valueOf()}function M(){Et>R()||F(!0)}function P(e){for(var t=e.target;t;)t===bt&&(Et=R()+100),t=t.parentElement}function U(t){var n=t.target;if(N.test(n.className))return s(n.parentElement),void e.focus();for(var r=n,i=k.test(r.className);i===!1&&r.parentElement;)r=r.parentElement,i=k.test(r.className);i&&lt?Z(r,B):n!==e&&(V(),e.focus())}function V(){Z(yt.lastChild,B),J([ot],!0)}function F(e){return(e?H:J)([ot],e),e&&tt(yt,W),xt}function W(e,t){ht.appendChild(t)}function X(t){var n=o["default"](e),r=t.which||t.keyCode||t.charCode,i=0===n.start&&0===n.end&&ht.lastChild,a=n.start===e.value.length&&n.end===e.value.length&&yt.firstChild;if(lt)if(r===w)ht.firstChild?Z(ht.firstChild,{}):o["default"](e,{start:0,end:0});else if(r===E)yt.lastChild?Z(yt.lastChild,B):o["default"](e,B);else if(r===b&&i)s(ht.lastChild);else if(r===C&&a)Z(yt.firstChild,{});else{if(r!==x||!i)return;Z(ht.lastChild,B)}else if(r===b&&i)s(ht.lastChild);else if(r===C&&a)ht.appendChild(yt.firstChild);else if(r===x&&i)yt.insertBefore(ht.lastChild,yt.firstChild);else if(-1===S.indexOf(r))return;return t.preventDefault(),!1}function $(e){var t=e.which||e.keyCode||e.charCode;return String.fromCharCode(t)===ot?(F(),e.preventDefault(),!1):void 0}function G(){setTimeout(function(){return J()},0)}function H(e,t){K(e,t)}function J(t,n){K(t,n,o["default"](e))}function K(t,n,r){function a(){r&&(r.start-=c,r.end-=c,o["default"](e,r))}var u=n||!r?1/0:r.start,l=e.value.slice(0,u).concat(t||[]).split(ot);if(!(l.length<1)&&lt){var f=l.pop()+e.value.slice(u),c=l.join(ot).length;l.forEach(function(e){return i(dt(e))}),e.value=f,a(),wt.refresh()}}function Q(e,t){p["default"](e,mt(t.data))}function Y(e){return p["default"](e)}function Z(t,n){if(t){J([ot],!0);var r=t.parentElement;if(r===ht)for(;r.lastChild!==t;)yt.insertBefore(r.lastChild,yt.firstChild);else for(;r.firstChild!==t;)ht.appendChild(r.firstChild);var i=n.remove?"":Y(t);s(t),e.value=i,e.focus(),o["default"](e,n),wt.refresh()}}function et(){var t=e.parentElement.children;return[].concat(r(t)).some(function(t){return t!==e&&t.nodeType===y})}function tt(e,t){[].concat(r(e.children)).forEach(function(e,n){return t(Y(e),e,n)})}function nt(e,t){var r=n(e);return r===t||null===r}var rt=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],it=[],at=rt,ot=at.delimiter||T;if(1!==ot.length)throw new Error("insignia expected a single-character delimiter string");var ut=et(e);if(ut||!h.test(e.tagName))throw new Error("insignia expected an input element without any siblings");var lt=at.free!==!1,ft=at.validate||nt,ct=at.render||Q,st=at.convertOnBlur!==!1,dt=D,vt=at.getText,pt=at.getValue,mt="string"==typeof vt?function(e){return e[vt]}:"function"==typeof vt?vt:function(e){return e.toString()},gt="string"==typeof pt?function(e){return e[pt]}:"function"==typeof pt?pt:function(e){return e},ht=d["default"]("span","nsg-tags nsg-tags-before"),yt=d["default"]("span","nsg-tags nsg-tags-after"),bt=e.parentElement,Et=R();e.className+=" nsg-input",bt.className+=" nsg-editor",bt.insertBefore(ht,e),bt.insertBefore(yt,e.nextSibling);var wt=g["default"](e),xt=c["default"]({addItem:i,findItem:function(e){return t(e)},findItemIndex:function(e){return n(e)},findItemByElement:function(e){return t(e,"el")},removeItem:f,removeItemByElement:s,value:L,allValues:z,refresh:F,destroy:q}),Ct=e.getAttribute("placeholder"),St=!0;return j(),(document.activeElement===e?J:H)([ot],!0),xt}var a=e("sell"),o=n(a),u=e("crossvent"),l=n(u),f=e("contra/emitter"),c=n(f),s=e("./dom"),d=n(s),v=e("./text"),p=n(v),m=e("./autosize"),g=n(m),h=/^input$/i,y=1,b=8,E=35,w=36,x=37,C=39,S=[E,w],k=/\bnsg-tag\b/,N=/\bnsg-tag-remove\b/,I=/\bnsg-editor\b/g,O=/\bnsg-input\b/g,B={start:"end",end:"end"},T=" ";t.exports=i},{"./autosize":1,"./dom":2,"./text":12,"contra/emitter":6,crossvent:7,sell:10}],4:[function(e,t){t.exports=function(e,t){return Array.prototype.slice.call(e,t)}},{}],5:[function(e,t){"use strict";var n=e("ticky");t.exports=function(e,t,r){e&&n(function(){e.apply(r||null,t||[])})}},{ticky:11}],6:[function(e,t){"use strict";var n=e("atoa"),r=e("./debounce");t.exports=function(e,t){var i=t||{},a={};return void 0===e&&(e={}),e.on=function(t,n){return a[t]?a[t].push(n):a[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete a[t];else if(0===r)a={};else{var i=a[t];if(!i)return e;i.splice(i.indexOf(n),1)}return e},e.emit=function(){var t=n(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var o=(a[t]||[]).slice(0);return function(){var a=n(arguments),u=this||e;if("error"===t&&i["throws"]!==!1&&!o.length)throw 1===a.length?a[0]:a;return o.forEach(function(n){i.async?r(n,a,u):n.apply(u,a),n._once&&e.off(t,n)}),e}},e}},{"./debounce":5,atoa:4}],7:[function(e,t){(function(n){"use strict";function r(e,t,n,r){return e.addEventListener(t,n,r)}function i(e,t,n){return e.attachEvent("on"+t,f(e,t,n))}function a(e,t,n,r){return e.removeEventListener(t,n,r)}function o(e,t,n){var r=c(e,t,n);return r?e.detachEvent("on"+t,r):void 0}function u(e,t,n){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(t,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function i(){return new d(t,{detail:n})}var a=-1===v.indexOf(t)?i():r();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}function l(e,t,r){return function(t){var i=t||n.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,r.call(e,i)}}function f(e,t,n){var r=c(e,t,n)||l(e,t,n);return h.push({wrapper:r,element:e,type:t,fn:n}),r}function c(e,t,n){var r=s(e,t,n);if(r){var i=h[r].wrapper;return h.splice(r,1),i}}function s(e,t,n){var r,i;for(r=0;r<h.length;r++)if(i=h[r],i.element===e&&i.type===t&&i.fn===n)return r}var d=e("custom-event"),v=e("./eventmap"),p=n.document,m=r,g=a,h=[];n.addEventListener||(m=i,g=o),t.exports={add:m,remove:g,fabricate:u}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":8,"custom-event":9}],8:[function(e,t){(function(e){"use strict";var n=[],r="",i=/^on/;for(r in e)i.test(r)&&n.push(r.slice(2));t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t){(function(e){function n(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}var r=e.CustomEvent;t.exports=n()?r:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t){"use strict";function n(e){return{start:e.selectionStart,end:e.selectionEnd}}function r(e){function t(t,r){return n!==e&&(n?n.focus():e.blur()),{start:t,end:r}}var n=document.activeElement;n!==e&&e.focus();var r=document.selection.createRange(),o=r.getBookmark(),u=e.value,l=i(u),f=r.parentElement();if(null===f||!a(f))return t(0,0);r.text=l+r.text+l;var c=e.value;return e.value=u,r.moveToBookmark(o),r.select(),t(c.indexOf(l),c.lastIndexOf(l)-l.length)}function i(e){var t;do t="@@marker."+Math.random()*new Date;while(-1!==e.indexOf(t));return t}function a(e){return"INPUT"===e.tagName&&"text"===e.type||"TEXTAREA"===e.tagName}function o(e,t){e.selectionStart=l(e,t.start),e.selectionEnd=l(e,t.end)}function u(e,t){var n=e.createTextRange();"end"===t.start&&"end"===t.end?(n.collapse(!1),n.select()):(n.collapse(!0),n.moveEnd("character",l(e,t.end)),n.moveStart("character",l(e,t.start)),n.select())}function l(e,t){return"end"===t?e.value.length:t||0}function f(e,t){return 2===arguments.length&&s(e,t),c(e)}var c=n,s=o;document.selection&&document.selection.createRange&&(c=r,s=u),t.exports=f},{}],11:[function(e,t){var n,r="function"==typeof setImmediate;n=r?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},t.exports=n},{}],12:[function(e,t){"use strict";function n(e,t){return 2===arguments.length&&(e.innerText=e.textContent=t),"string"==typeof e.innerText?e.innerText:e.textContent}t.exports=n},{}]},{},[3])(3)});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/insignia/dist/insignia.min.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/insignia/dist/insignia.min.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--5-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--5-2!./insignia.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/insignia/dist/insignia.min.css?vue&type=style&index=0&lang=css&");

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