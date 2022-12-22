(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1422:function(t,a){t.exports="/images/complexform1.png?e8a770c8d98b813a9a59f8449456da4a"},1430:function(t,a,e){"use strict";var n=e(754);e.n(n).a},1431:function(t,a,e){(t.exports=e(30)(!1)).push([t.i,"#complex-form {\n    border           : 1px solid #aaa;\n    background-color : #fff;\n    border-radius    : 3px;\n    padding-top      : 20px;\n    padding-bottom   : 20px;\n}\n.grid-form h3 {\n    font-size : 22px;\n}\n.grid-form fieldset legend {\n    border-bottom : 2px solid #777;\n    color         : #666;\n    margin-bottom : 0;\n    font-size: 16px;\n}\n.grid-form [data-row-span] [data-field-span] label:first-child {\n    font-size      : small;\n    letter-spacing : 0.5px;\n}\n.grid-form [data-row-span] [data-field-span]:hover,\n.grid-form [data-row-span] [data-field-span].focus {\n    background-color : #f5f5f5;\n}\n.select2-container {\n    vertical-align : middle;\n    border         : 1px solid #ccc;\n    border-radius  : 2px;\n}\n.select2-container--bootstrap .select2-selection {\n    background-color : #EBF1F6;\n}\n.select2-container--bootstrap:hover .select2-selection {\n    background-color : #fff;\n}\n.grid-form .custom-checkbox{\n    cursor: default !important;\n}\n.select2-container{\n    width: 100% !important;\n}\n.select2-dropdown,.dd-w.dd-bottom{\n    z-index: 99;\n}\n.complex-dob{\n    padding-bottom: 25px !important;\n}\n.picker.dob{\n    width: 100%;\n}\n.multiselect .multiselect__tags{\n    padding-top: 4px;\n   min-height: 30px;\n   height: 33px;\n}\n.flatpickr-calendar.open{\n    z-index: 99 !important;\n}",""])},2209:function(t,a,e){"use strict";e.r(a);e(1423);var n=e(587),s=e.n(n),i=e(980),r=e.n(i),d=(e(981),{name:"complex_forms",components:{Multiselect:s.a,flatPickr:r.a},data:function(){return{date:new Date,fromPage:null,toPage:null,value:{name:"Country",language:"lang"},options:[{name:"India",language:"India"},{name:"America",language:"America"},{name:"Germany",language:"Germany"},{name:"Japan",language:"Japan"},{name:"England",language:"England"}]}},mounted:function(){},methods:{},destroyed:function(){}}),l=(e(1426),e(1428),e(1430),e(21)),v=Object(l.a)(d,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"row",attrs:{id:"complex-form"}},[n("div",{staticClass:"col-lg-12"},[n("form",{staticClass:"grid-form"},[n("div",{staticClass:"text-center"},[n("img",{attrs:{src:e(1422),alt:"bank name",width:"200"}}),t._v(" "),n("h3",[t._v("ACCOUNT OPENING FORM")])]),t._v(" "),t._m(0),t._v(" "),n("fieldset",[n("legend",[t._v("Personal Details (Sole/First Accountholder/Minor)")]),t._v(" "),n("div",{attrs:{"data-row-span":"4"}},[n("div",{attrs:{"data-field-span":"1"}},[n("label",[t._v("Title")]),t._v(" "),n("b-form-radio",{attrs:{checked:"false",name:"prefix"}},[t._v(" Mr.")]),t._v(" "),n("b-form-radio",{attrs:{checked:"false",name:"prefix"}},[t._v(" Mrs.")]),t._v(" "),n("b-form-radio",{attrs:{checked:"false",name:"prefix"}},[t._v(" Ms.")])],1),t._v(" "),t._m(1)]),t._v(" "),n("div",{attrs:{"data-row-span":"2"}},[n("div",{staticClass:"complex-dob",attrs:{"data-field-span":"1"}},[n("label",[t._v("Date of birth")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",model:{value:t.date,callback:function(a){t.date=a},expression:"date"}})],1),t._v(" "),n("div",{attrs:{"data-field-span":"1"}},[t._m(2),t._v(" "),n("multiselect",{attrs:{options:t.options,placeholder:"Select one",label:"name","track-by":"name"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("br"),t._v(" "),t._m(5)]),t._v(" "),n("br"),t._v(" "),t._m(6),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t._m(7),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("fieldset",[n("legend",[t._v("Account Details")]),t._v(" "),n("div",{attrs:{"data-row-span":"2"}},[n("div",{attrs:{"data-field-span":"1"}},[n("label",[t._v("Choice of account")]),t._v(" "),n("b-form-radio",{attrs:{name:"account-type",checked:"false"}},[t._v("Savings")]),t._v(" "),n("b-form-radio",{attrs:{name:"account-type",checked:"false"}},[t._v("Current")]),t._v(" \n                            "),n("b-form-radio",{attrs:{name:"account-type",checked:"false"}},[t._v("Fixed Deposit")])],1),t._v(" "),n("div",{attrs:{"data-field-span":"1"}},[n("label",[t._v("Mode of funding")]),t._v(" "),n("b-form-radio",{attrs:{name:"transfer-type",checked:"false"}},[t._v("Cash")]),t._v(" "),n("b-form-radio",{attrs:{name:"transfer-type",checked:"false"}},[t._v("Cheque")]),t._v(" \n                            "),n("b-form-radio",{attrs:{name:"transfer-type",checked:"false"}},[t._v("NEFT")])],1)]),t._v(" "),t._m(8),t._v(" "),n("br"),t._v(" "),n("fieldset",[n("legend",[t._v("Details of Fixed Deposit")]),t._v(" "),n("div",{attrs:{"data-row-span":"2"}},[n("div",{attrs:{"data-field-span":"1"}},[n("label",[t._v("Types of deposit")]),t._v(" "),n("b-form-radio",{attrs:{name:"deposit-type",checked:"false"}},[t._v("Ordinary")]),t._v(" "),n("b-form-radio",{attrs:{name:"deposit-type",checked:"false"}},[t._v("Cumulative")])],1),t._v(" "),n("div",{attrs:{"data-field-span":"1"}},[n("label",[t._v("Mode of funding")]),t._v(" "),n("b-form-radio",{attrs:{name:"fund-type",checked:"false"}},[t._v("Cash")]),t._v(" "),n("b-form-radio",{attrs:{name:"fund-type",checked:"false"}},[t._v("Cheque")]),t._v(" "),n("b-form-radio",{attrs:{name:"fund-type",checked:"false"}},[t._v("NEFT")])],1)]),t._v(" "),t._m(9)])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("fieldset",[t._m(10),t._v(" "),n("div",{attrs:{"data-row-span":"12"}},[n("div",{attrs:{"data-field-span":"2"}},[n("b-form-checkbox",[t._v("Non-executive")])],1),t._v(" "),n("div",{attrs:{"data-field-span":"2"}},[n("b-form-checkbox",[t._v("Non-executive")])],1),t._v(" "),n("div",{attrs:{"data-field-span":"2"}},[n("b-form-checkbox",[t._v("Housewife")])],1),t._v(" "),n("div",{attrs:{"data-field-span":"2"}},[n("b-form-checkbox",[t._v(" Student")])],1),t._v(" "),n("div",{attrs:{"data-field-span":"2"}},[n("b-form-checkbox",[t._v(" Other")])],1),t._v(" "),n("div",{attrs:{"data-field-span":"2"}},[n("b-form-checkbox",[t._v("Unemployed")])],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),n("div",{attrs:{"data-row-span":"2"}},[n("div",{attrs:{"data-field-span":"1"}},[n("label",[t._v("Education")]),t._v(" "),n("b-form-radio",{attrs:{name:"education-type",checked:"false"}},[t._v("Under Graduate")]),t._v(" "),n("b-form-radio",{attrs:{name:"education-type",checked:"false"}},[t._v("Graduate")]),t._v(" "),n("b-form-radio",{attrs:{name:"education-type",checked:"false"}},[t._v("Others")])],1),t._v(" "),n("div",{attrs:{"data-field-span":"1"}},[n("label",[t._v("Monthly Income")]),t._v(" "),n("b-form-radio",{attrs:{name:"income",checked:"false"}},[t._v("Zero Income")]),t._v(" "),n("b-form-radio",{attrs:{name:"income",checked:"false"}},[t._v("Less than $10,000")]),t._v(" "),n("b-form-radio",{attrs:{name:"income",checked:"false"}},[t._v(" $10,000+")])],1)]),t._v(" "),n("div",{attrs:{"data-row-span":"2"}},[n("div",{attrs:{"data-field-span":"1"}},[n("label",[t._v("Maritial Status")]),t._v(" "),n("b-form-radio",{attrs:{name:"marital-status",checked:"false"}},[t._v("Married")]),t._v(" "),n("b-form-radio",{attrs:{name:"marital-status",checked:"false"}},[t._v("Single")])],1),t._v(" "),t._m(13)]),t._v(" "),n("br"),t._v(" "),t._m(14)]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t._m(15),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t._m(16)])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("fieldset",[a("legend",[this._v("Please open an account at")]),this._v(" "),a("div",{attrs:{"data-row-span":"1"}},[a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Branch Name")]),this._v(" "),a("input",{attrs:{type:"text",autofocus:""}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{"data-field-span":"3"}},[a("label",[this._v("Full Name")]),this._v(" "),a("input",{attrs:{type:"text"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{staticClass:"typo__label mb-0"},[a("h6",{staticClass:"mb-1"},[this._v("Nationality")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{"data-row-span":"4"}},[e("div",{attrs:{"data-field-span":"2","data-field-error":"Please enter a valid email address"}},[e("label",[t._v("E-mail")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Mobile No.")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Existing Bank Account No. (if any)")]),t._v(" "),e("input",{attrs:{type:"text"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{"data-row-span":"2"}},[a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("In case of a minor please provide details (Name of parent and natural\n                                guardian)\n                            ")]),this._v(" "),a("input",{attrs:{type:"text"}})]),this._v(" "),a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Name of father/spouse")]),this._v(" "),a("input",{attrs:{type:"text"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("fieldset",[e("legend",[t._v("Residential address")]),t._v(" "),e("div",{attrs:{"data-row-span":"2"}},[e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Flat no. and bldg. name")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Road no./name")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{attrs:{"data-row-span":"4"}},[e("div",{attrs:{"data-field-span":"3"}},[e("label",[t._v("Area and landmark")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("City")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{attrs:{"data-row-span":"4"}},[e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Telephone Residence")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Office")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Fax")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Pin code")]),t._v(" "),e("input",{attrs:{type:"text"}})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("fieldset",[e("legend",[t._v("Mailing Address (If different from the First Accountholder's address)\n                    ")]),t._v(" "),e("div",{attrs:{"data-row-span":"1"}},[e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Company name and department/ Flat no. and bldg. name")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{attrs:{"data-row-span":"4"}},[e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Road no./name")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Area and landmark")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("City")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Pin Code")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{attrs:{"data-row-span":"4"}},[e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Telephone Residence")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Office")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Fax")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Mobile No.")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{attrs:{"data-row-span":"1"}},[e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("E-mail")]),t._v(" "),e("input",{attrs:{type:"text"}})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("fieldset",[e("legend",[t._v("Details of Introduction by Existing Customer (If applicable)")]),t._v(" "),e("div",{attrs:{"data-row-span":"2"}},[e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Customer Name")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Account No.")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{attrs:{"data-row-span":"1"}},[e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Introducer's signature")]),t._v(" "),e("textarea",{staticClass:"resize_vertical"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{"data-row-span":"1"}},[a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Amount")]),this._v(" "),a("input",{attrs:{type:"text"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{"data-row-span":"4"}},[e("div",{attrs:{"data-field-span":"2"}},[e("label",[t._v("Amount")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("No. of deposits")]),t._v(" "),e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{attrs:{"data-field-span":"1"}},[e("label",[t._v("Individual Deposit Amount")]),t._v(" "),e("input",{attrs:{type:"text"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("legend",[this._v("Personal Details\n                        "),a("small",[this._v("(Occupation)")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{"data-row-span":"1"}},[a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Job Title")]),this._v(" "),a("input",{attrs:{type:"text"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{"data-row-span":"2"}},[a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Department")]),this._v(" "),a("input",{attrs:{type:"text"}})]),this._v(" "),a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Nature of business")]),this._v(" "),a("input",{attrs:{type:"text"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Spouse name")]),this._v(" "),a("input",{attrs:{type:"text"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("fieldset",[a("legend",[this._v("Other existing bank accounts, if any")]),this._v(" "),a("div",{attrs:{"data-row-span":"2"}},[a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Name of the Bank / branch")]),this._v(" "),a("input",{attrs:{type:"text"}})]),this._v(" "),a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Name of the Bank / branch")]),this._v(" "),a("input",{attrs:{type:"text"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("fieldset",[a("legend",[this._v("Reason for Account opening")]),this._v(" "),a("div",{attrs:{"data-row-span":"1"}},[a("div",{attrs:{"data-field-span":"1"}},[a("label",[this._v("Please specify")]),this._v(" "),a("input",{attrs:{type:"text"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("fieldset",[a("legend",[this._v("Terms And Conditions")]),this._v(" "),a("div",{attrs:{"data-row-span":"1"}},[a("div",{attrs:{"data-field-span":"1"}},[a("label"),this._v(" "),a("label",[a("input",{attrs:{type:"checkbox"}}),this._v(" I/We confirm having read and understood the account\n                                rules of The Banking Corporation Limited ('the Bank'), and hereby agree to be\n                                bound by the terms and conditions and amendments governing the account(s) issued\n                                by the Bank from time-to-time.")])])])])}],!1,null,"153f867c",null);a.default=v.exports},754:function(t,a,e){var n=e(1431);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(31)(n,s);n.locals&&(t.exports=n.locals)}}]);