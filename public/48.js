(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1555:function(t,e,n){(function(e,n){t.exports=function t(e,n,r){function a(o,s){if(!n[o]){if(!e[o]){if(i)return i(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[o]={exports:{}};e[o][0].call(u.exports,(function(t){var n=e[o][1][t];return a(n||t)}),u,u.exports,t,e,n,r)}return n[o].exports}for(var i=!1,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(t,e){"use strict";var n=t("crossvent"),r=t("./dom"),a=t("./text"),i=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent","webkitBoxSizing","mozBoxSizing","boxSizing","padding","border"];e.exports=function(t){function e(){var t,e,n=l();for(e=0;e<i.length;e++)null!=(t=n[i[e]])&&(u.style[i[e]]=t);u.disabled="disabled",u.style.whiteSpace="pre",u.style.position="absolute",u.style.top=u.style.left="-9999em"}function o(){var e=t.value;if(e!==u.value){a(u,e);var n=u.offsetWidth+20;t.style.width=n+"px"}}function s(e){var r=e?"remove":"add";n[r](t,"keydown",o),n[r](t,"keyup",o),n[r](t,"input",o),n[r](t,"paste",o),n[r](t,"change",o)}function l(){return window.getComputedStyle?window.getComputedStyle(t):t.currentStyle}var u=r("span");return document.body.appendChild(u),e(),s(),{remap:e,refresh:o,destroy:function(){s(!0),u.parentElement.removeChild(u),t.style.width=""}}}},{"./dom":2,"./text":12,crossvent:7}],2:[function(t,e){"use strict";e.exports=function(t,e){var n=document.createElement(t);return e&&(n.className=e),n}},{}],3:[function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var a=n(t("sell")),i=n(t("crossvent")),o=n(t("contra/emitter")),s=n(t("./dom")),l=n(t("./text")),u=n(t("./autosize")),c=/^input$/i,d=1,f=8,v=35,p=36,m=37,g=39,h=[v,p],b=/\bnsg-tag\b/,y=/\bnsg-tag-remove\b/,x=/\bnsg-editor\b/g,C=/\bnsg-input\b/g,w={start:"end",end:"end"},E=" ";e.exports=function(t){function e(t){for(var e=arguments.length<=1||void 0===arguments[1]?"data":arguments[1],n="data"===e?function(n){return gt(n[e])===gt(t)}:function(n){return n[e]===t},r=0;r<at.length;r++)if(n(at[r]))return at[r];return null}function n(t){for(var e=arguments.length<=1||void 0===arguments[1]?"data":arguments[1],n="data"===e?function(n){return gt(n[e])===gt(t)}:function(n){return n[e]===t},r=0;r<at.length;r++)if(n(at[r]))return r;return null}function k(t){var e=ut(t),n={data:t,valid:e};if(it.preventInvalid&&!e)return wt;var r=O(n);return r?(n.el=r,at.push(n),wt.emit("add",t,r),S(),wt):wt}function _(t){return t?(T(t.el),at.splice(at.indexOf(t),1),wt.emit("remove",t.data),S(),wt):wt}function S(){at.slice().forEach((function(t,e){at.splice(e,1);var n=ut(t.data,e);n?(t.el.classList.add("nsg-valid"),t.el.classList.remove("nsg-invalid")):(t.el.classList.add("nsg-invalid"),t.el.classList.remove("nsg-valid"),wt.emit("invalid",t.data,t.el)),t.valid=n,at.splice(e,0,t)}))}function N(t){return _(e(t))}function I(t){return _(e(t,"el"))}function O(t){return B(ht,t)}function T(t){t.parentElement&&t.parentElement.removeChild(t)}function B(t,e){var n=e.data;if("string"==typeof n&&0===n.trim().length)return null;var r=s.default("span","nsg-tag");return ct(r,e),it.deletion&&r.appendChild(s.default("span","nsg-tag-remove")),t.appendChild(r),r}function A(t){return t}function D(){return at.filter((function(t){return t.valid})).map((function(t){return t.data}))}function L(){return at.map((function(t){return t.data}))}function z(){var e=yt.querySelector(".nsg-tag");e||kt?e&&kt&&(t.removeAttribute("placeholder"),kt=!1):(t.setAttribute("placeholder",Et),kt=!0)}function j(e){var n=e?"remove":"add",r=e?"off":"on";i.default[n](t,"keydown",q),i.default[n](t,"keypress",W),i.default[n](t,"paste",H),i.default[n](yt,"click",J),dt&&(i.default[n](document.documentElement,"blur",M,!0),i.default[n](document.documentElement,"mousedown",P)),Et&&(wt[r]("add",z),wt[r]("remove",z),i.default[n](t,"keydown",z),i.default[n](t,"keypress",z),i.default[n](t,"paste",z),i.default[n](yt,"click",z),z())}function R(){return j(!0),t.value="",t.className=t.className.replace(C,""),yt.className=yt.className.replace(x,""),ht.parentElement&&ht.parentElement.removeChild(ht),bt.parentElement&&bt.parentElement.removeChild(bt),Ct.destroy(),wt.destroyed=!0,wt.destroy=wt.addItem=wt.removeItem=function(){return wt},wt.tags=wt.value=function(){return null},wt}function F(){return(new Date).valueOf()}function M(){xt>F()||V(!0)}function P(t){for(var e=t.target;e;)e===yt&&(xt=F()+100),e=e.parentElement}function J(e){var n=e.target;if(y.test(n.className))return I(n.parentElement),void t.focus();for(var r=n,a=b.test(r.className);!1===a&&r.parentElement;)r=r.parentElement,a=b.test(r.className);a&&lt?Z(r,w):n!==t&&(U(),t.focus())}function U(){Z(bt.lastChild,w),G([ot],!0)}function V(t){return(t?X:G)([ot],t),t&&et(bt,$),wt}function $(t,e){ht.appendChild(e)}function q(e){var n=a.default(t),r=e.which||e.keyCode||e.charCode,i=0===n.start&&0===n.end&&ht.lastChild,o=n.start===t.value.length&&n.end===t.value.length&&bt.firstChild;if(lt)if(r===p)ht.firstChild?Z(ht.firstChild,{}):a.default(t,{start:0,end:0});else if(r===v)bt.lastChild?Z(bt.lastChild,w):a.default(t,w);else if(r===f&&i)I(ht.lastChild);else if(r===g&&o)Z(bt.firstChild,{});else{if(r!==m||!i)return;Z(ht.lastChild,w)}else if(r===f&&i)I(ht.lastChild);else if(r===g&&o)ht.appendChild(bt.firstChild);else if(r===m&&i)bt.insertBefore(ht.lastChild,bt.firstChild);else if(-1===h.indexOf(r))return;return e.preventDefault(),!1}function W(t){var e=t.which||t.keyCode||t.charCode;return String.fromCharCode(e)===ot?(V(),t.preventDefault(),!1):void 0}function H(){setTimeout((function(){return G()}),0)}function X(t,e){K(t,e)}function G(e,n){K(e,n,a.default(t))}function K(e,n,r){var i=n||!r?1/0:r.start,o=t.value.slice(0,i).concat(e||[]).split(ot);if(!(o.length<1)&&lt){var s=o.pop()+t.value.slice(i),l=o.join(ot).length;o.forEach((function(t){return k(ft(t))})),t.value=s,r&&(r.start-=l,r.end-=l,a.default(t,r)),Ct.refresh()}}function Q(t,e){l.default(t,mt(e.data))}function Y(t){return l.default(t)}function Z(e,n){if(e){G([ot],!0);var r=e.parentElement;if(r===ht)for(;r.lastChild!==e;)bt.insertBefore(r.lastChild,bt.firstChild);else for(;r.firstChild!==e;)ht.appendChild(r.firstChild);var i=n.remove?"":Y(e);I(e),t.value=i,t.focus(),a.default(t,n),Ct.refresh()}}function tt(){var e=t.parentElement.children;return[].concat(r(e)).some((function(e){return e!==t&&e.nodeType===d}))}function et(t,e){[].concat(r(t.children)).forEach((function(t,n){return e(Y(t),t,n)}))}function nt(t,e){var r=n(t);return r===e||null===r}var rt=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],at=[],it=rt,ot=it.delimiter||E;if(1!==ot.length)throw new Error("insignia expected a single-character delimiter string");var st=tt();if(st||!c.test(t.tagName))throw new Error("insignia expected an input element without any siblings");var lt=!1!==it.free,ut=it.validate||nt,ct=it.render||Q,dt=!1!==it.convertOnBlur,ft=A,vt=it.getText,pt=it.getValue,mt="string"==typeof vt?function(t){return t[vt]}:"function"==typeof vt?vt:function(t){return t.toString()},gt="string"==typeof pt?function(t){return t[pt]}:"function"==typeof pt?pt:function(t){return t},ht=s.default("span","nsg-tags nsg-tags-before"),bt=s.default("span","nsg-tags nsg-tags-after"),yt=t.parentElement,xt=F();t.className+=" nsg-input",yt.className+=" nsg-editor",yt.insertBefore(ht,t),yt.insertBefore(bt,t.nextSibling);var Ct=u.default(t),wt=o.default({addItem:k,findItem:function(t){return e(t)},findItemIndex:function(t){return n(t)},findItemByElement:function(t){return e(t,"el")},removeItem:N,removeItemByElement:I,value:D,allValues:L,refresh:V,destroy:R}),Et=t.getAttribute("placeholder"),kt=!0;return j(),(document.activeElement===t?G:X)([ot],!0),wt}},{"./autosize":1,"./dom":2,"./text":12,"contra/emitter":6,crossvent:7,sell:10}],4:[function(t,e){e.exports=function(t,e){return Array.prototype.slice.call(t,e)}},{}],5:[function(t,e){"use strict";var n=t("ticky");e.exports=function(t,e,r){t&&n((function(){t.apply(r||null,e||[])}))}},{ticky:11}],6:[function(t,e){"use strict";var n=t("atoa"),r=t("./debounce");e.exports=function(t,e){var a=e||{},i={};return void 0===t&&(t={}),t.on=function(e,n){return i[e]?i[e].push(n):i[e]=[n],t},t.once=function(e,n){return n._once=!0,t.on(e,n),t},t.off=function(e,n){var r=arguments.length;if(1===r)delete i[e];else if(0===r)i={};else{var a=i[e];if(!a)return t;a.splice(a.indexOf(n),1)}return t},t.emit=function(){var e=n(arguments);return t.emitterSnapshot(e.shift()).apply(this,e)},t.emitterSnapshot=function(e){var o=(i[e]||[]).slice(0);return function(){var i=n(arguments),s=this||t;if("error"===e&&!1!==a.throws&&!o.length)throw 1===i.length?i[0]:i;return o.forEach((function(n){a.async?r(n,i,s):n.apply(s,i),n._once&&t.off(e,n)})),t}},t}},{"./debounce":5,atoa:4}],7:[function(t,n){(function(e){"use strict";function r(t,n,r){return function(n){var a=n||e.event;a.target=a.target||a.srcElement,a.preventDefault=a.preventDefault||function(){a.returnValue=!1},a.stopPropagation=a.stopPropagation||function(){a.cancelBubble=!0},a.which=a.which||a.keyCode,r.call(t,a)}}function a(t,e,n){var r=function(t,e,n){var r,a;for(r=0;r<c.length;r++)if((a=c[r]).element===t&&a.type===e&&a.fn===n)return r}(t,e,n);if(r){var a=c[r].wrapper;return c.splice(r,1),a}}var i=t("custom-event"),o=t("./eventmap"),s=e.document,l=function(t,e,n,r){return t.addEventListener(e,n,r)},u=function(t,e,n,r){return t.removeEventListener(e,n,r)},c=[];e.addEventListener||(l=function(t,e,n){return t.attachEvent("on"+e,function(t,e,n){var i=a(t,e,n)||r(t,0,n);return c.push({wrapper:i,element:t,type:e,fn:n}),i}(t,e,n))},u=function(t,e,n){var r=a(t,e,n);return r?t.detachEvent("on"+e,r):void 0}),n.exports={add:l,remove:u,fabricate:function(t,e,n){var r=-1===o.indexOf(e)?new i(e,{detail:n}):function(){var t;return s.createEvent?(t=s.createEvent("Event")).initEvent(e,!0,!0):s.createEventObject&&(t=s.createEventObject()),t}();t.dispatchEvent?t.dispatchEvent(r):t.fireEvent("on"+e,r)}}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":8,"custom-event":9}],8:[function(t,n){(function(t){"use strict";var e=[],r="",a=/^on/;for(r in t)a.test(r)&&e.push(r.slice(2));n.exports=e}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(t,n){(function(t){var e=t.CustomEvent;n.exports=function(){try{var t=new e("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?e:"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(t,e){"use strict";function n(t,e){return"end"===e?t.value.length:e||0}var r=function(t){return{start:t.selectionStart,end:t.selectionEnd}},a=function(t,e){t.selectionStart=n(t,e.start),t.selectionEnd=n(t,e.end)};document.selection&&document.selection.createRange&&(r=function(t){function e(e,r){return n!==t&&(n?n.focus():t.blur()),{start:e,end:r}}var n=document.activeElement;n!==t&&t.focus();var r=document.selection.createRange(),a=r.getBookmark(),i=t.value,o=function(t){var e;do{e="@@marker."+Math.random()*new Date}while(-1!==t.indexOf(e));return e}(i),s=r.parentElement();if(null===s||!function(t){return"INPUT"===t.tagName&&"text"===t.type||"TEXTAREA"===t.tagName}(s))return e(0,0);r.text=o+r.text+o;var l=t.value;return t.value=i,r.moveToBookmark(a),r.select(),e(l.indexOf(o),l.lastIndexOf(o)-o.length)},a=function(t,e){var r=t.createTextRange();"end"===e.start&&"end"===e.end?(r.collapse(!1),r.select()):(r.collapse(!0),r.moveEnd("character",n(t,e.end)),r.moveStart("character",n(t,e.start)),r.select())}),e.exports=function(t,e){return 2===arguments.length&&a(t,e),r(t)}},{}],11:[function(t,e){var r;r="function"==typeof n?function(t){n(t)}:function(t){setTimeout(t,0)},e.exports=r},{}],12:[function(t,e){"use strict";e.exports=function(t,e){return 2===arguments.length&&(t.innerText=t.textContent=e),"string"==typeof t.innerText?t.innerText:t.textContent}},{}]},{},[3])(3)}).call(this,n(18),n(235).setImmediate)},1556:function(t,e,n){"use strict";var r=n(806);n.n(r).a},1557:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,".nsg-editor{padding:10px;cursor:text}.nsg-tag{display:inline-block;border:1px solid #666;padding:3px;margin:4px}.nsg-invalid{border-color:#c00}.nsg-tag-remove:after{margin-left:4px;padding:0 4px;content:'x';background-color:#ccc;cursor:pointer}.nsg-input{display:inline-block;padding:3px 3px 3px 8px;margin:5px 0}.nsg-input[placeholder]{min-width:100%}",""])},1558:function(t,e,n){"use strict";var r=n(807);n.n(r).a},1559:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,".nsg-tag {\r\n    border-color     : #6699cc;\r\n    background-color : #6699cc;\r\n    border-radius    : 4px;\r\n    padding          : 3px 7px;\n}\n.input {\r\n    background-color : #eeeeee;\r\n    color            : #FFF;\r\n    padding          : 10px;\n}\ninput {\r\n    outline          : none;\r\n    background-color : #eeeeee;\r\n    color            : #6699cc;\r\n    border           : 0;\r\n    padding          : 3px;\r\n    margin           : 5px 0;\n}\n.nsg-tag-remove:after {\r\n    background-color : #6699cc;\n}\nlabel.tag1 {\r\n    margin-top    : 15px;\r\n    margin-bottom : 15px;\n}\n.m-t-b-15 {\r\n    margin-top    : 15px;\r\n    margin-bottom : 15px;\n}",""])},2299:function(t,e,n){"use strict";n.r(e);var r=n(805).a,a=(n(1556),n(1558),n(21)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("card",{attrs:{title:"<i class='ti-tag'></i> Markup"}},[n("div",{staticClass:"example example_markup"},[n("div",{staticClass:"parent"},[n("label",{staticClass:"m-t-b-15",attrs:{for:"ty"}},[t._v("Enter a space-separated list of tags:")]),t._v(" "),n("div",{staticClass:"input"},[n("input",{attrs:{id:"ty",value:"hi"}})])]),t._v(" "),n("label",{staticClass:"m-t-b-15",attrs:{for:"custom"}},[t._v("Enter a list of tags using a custom\n                        delimiter: ")]),t._v(" "),n("div",{staticClass:"input"},[n("input",{attrs:{id:"custom",value:"hello"}})]),t._v(" "),n("label",{staticClass:"m-t-b-15",attrs:{for:"del"}},[t._v("If you want, you can allow humans to remove tags by\n                        clicking on the\n                        crosses.")]),t._v(" "),n("div",{staticClass:"input"},[n("input",{attrs:{id:"del",value:"welcome"}})]),t._v(" "),n("label",{staticClass:"m-t-b-15",attrs:{for:"def"}},[t._v("Default values are naturally welcome.")]),t._v(" "),n("div",{staticClass:"input"},[n("input",{attrs:{id:"def",value:"tagging as a service"}})])])])],1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("card",{attrs:{title:" <i class='ti-tag'></i> Categorizing tags"}},[n("div",{staticClass:"example example_tagclass"},[n("label",{staticClass:"m-t-b-15",attrs:{for:"dup"}},[t._v("Duplicates are okay sometimes: ")]),t._v(" "),n("div",{staticClass:"input"},[n("input",{attrs:{id:"dup",value:"hello hello hello"}})]),t._v(" "),n("label",{staticClass:"m-t-b-15",attrs:{for:"lng"}},[t._v("Really long lists behave reasonably well, too.")]),t._v(" "),n("div",{staticClass:"input"},[n("input",{attrs:{id:"lng",value:"Really long lists behave reasonably well, too. Especially if you take into account this is JavaScript!"}})])])])],1)])])}),[],!1,null,null,null);e.default=i.exports},426:function(t,e,n){var r=n(431);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(31)(r,a);r.locals&&(t.exports=r.locals)},430:function(t,e,n){"use strict";var r=n(426);n.n(r).a},431:function(t,e,n){(t.exports=n(30)(!1)).push([t.i,"\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n",""])},433:function(t,e,n){"use strict";var r={name:"card",data:function(){return{show:!0,isActive:!1}},methods:{hide:function(){this.isActive=!0}},mounted:function(){},props:{title:{required:!1}},destroy:function(){}},a=(n(430),n(21)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",class:{dNone:t.isActive}},[n("div",{staticClass:"card-header"},[n("h3",{staticClass:"card-title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("span",{staticClass:"float-right"},[n("i",{staticClass:"fa fa-fw ti-angle-up",class:{rotate:t.show},on:{click:function(e){t.show=!t.show}}}),t._v(" "),n("i",{staticClass:"fa fa-fw ti-close removecard",on:{click:t.hide}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=i.exports},805:function(t,e,n){"use strict";(function(t){var r=n(433),a=n(1555),i=n.n(a);e.a={name:"tags_input",components:{card:r.a},mounted:function(){i()(ty),i()(custom,{delimiter:","}),i()(del,{deletion:!0}),i()(def),i()(lng),i()(dup,{validate:function(){return!0}})},destroyed:function(){}}}).call(this,n(18))},806:function(t,e,n){var r=n(1557);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(31)(r,a);r.locals&&(t.exports=r.locals)},807:function(t,e,n){var r=n(1559);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(31)(r,a);r.locals&&(t.exports=r.locals)}}]);