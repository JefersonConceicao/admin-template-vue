(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{2222:function(a,t,d){"use strict";d.r(t);var o={name:"modals",data:function(){return{stop_close:!1}},methods:{stop:function(a){if(!this.stop_close)return a.cancel()},shown:function(){alert("Modal opened")},open_modal:function(){console.log(this.$refs),this.$refs.modal21.show()},hidden:function(){alert("Modal Hidden")},success:function(){alert("OK Clicked")},cancel:function(){alert("Close Clicked")}}},l=d(21),e=Object(l.a)(o,(function(){var a=this,t=a.$createElement,d=a._self._c||t;return d("div",[d("b-card",{staticClass:"bg-primary-card",attrs:{header:"Modals","header-tag":"h4"}},[d("div",{staticClass:"row"},[d("div",{staticClass:"col-lg-12"},[d("b-card",{staticClass:"bg-primary-card"},[d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal1",modifiers:{modal1:!0}}],staticClass:"mt-3 mb-3"},[a._v("Launch demo modal")]),a._v(" "),d("b-btn",{staticClass:"mt-3 mb-3",on:{click:a.open_modal}},[a._v("Launch modal with ref")]),a._v(" "),d("b-modal",{ref:"modal1",attrs:{id:"modal1",title:"Modal"}},[d("h1",[a._v("modal")])]),a._v(" "),d("b-modal",{ref:"modal21",attrs:{id:"modal21",title:"Modal"}},[d("h1",[a._v("modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-12 mt-3"},[d("b-card",{staticClass:"bg-info-card"},[d("h4",[a._v("Stop closing on backdrop click")]),a._v(" "),d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal2",modifiers:{modal2:!0}}]},[a._v("Launch demo modal")]),a._v(" "),d("b-modal",{ref:"modal2",attrs:{"no-close-on-backdrop":"",id:"modal2",title:"Modal"}},[d("h1",[a._v("modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal4",modifiers:{modal4:!0}}]},[a._v("Launch small modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal4",title:"Small Modal",size:"sm"}},[d("h1",[a._v("modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal5",modifiers:{modal5:!0}}]},[a._v("Launch Normal modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal5",title:"Normal Modal",size:"md"}},[d("h1",[a._v("modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal6",modifiers:{modal6:!0}}]},[a._v("Launch Large modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal6",title:"Large Modal",size:"lg"}},[d("h1",[a._v("modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("h4",[a._v("Background Primary Modal ")]),a._v(" "),d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal8",modifiers:{modal8:!0}}]},[a._v("Primary modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal8",title:"Priamry Modal","header-bg-variant":"primary","header-text-variant":"light","footer-bg-variant":"primary","footer-text-variant":"light",size:"md"}},[d("h1",[a._v(" Primary modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("h4",[a._v("Background Info Modal ")]),a._v(" "),d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal9",modifiers:{modal9:!0}}]},[a._v("Info modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal9",title:"Info Modal","header-bg-variant":"info","header-text-variant":"light","footer-bg-variant":"info","footer-text-variant":"light"}},[d("h1",[a._v(" Info modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("h4",[a._v("Background Warning Modal ")]),a._v(" "),d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal10",modifiers:{modal10:!0}}]},[a._v("Warning modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal10",title:"Warning Modal","header-bg-variant":"warning","header-text-variant":"light","footer-bg-variant":"warning","footer-text-variant":"light"}},[d("h1",[a._v(" Warning modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("h4",[a._v("Background Danger Modal ")]),a._v(" "),d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal11",modifiers:{modal11:!0}}]},[a._v("Danger Modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal11",title:"Danger Modal","header-bg-variant":"danger","header-text-variant":"light","footer-bg-variant":"danger","footer-text-variant":"light"}},[d("h1",[a._v("Danger modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("h4",[a._v("Background Success Modal ")]),a._v(" "),d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal12",modifiers:{modal12:!0}}]},[a._v("Success Modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal12",title:"Success Modal","header-bg-variant":"success","header-text-variant":"light","footer-bg-variant":"success","footer-text-variant":"light"}},[d("h1",[a._v(" Success modal")])])],1)],1),a._v(" "),d("div",{staticClass:"col-lg-4 mt-3"},[d("b-card",[d("h4",[a._v("Background Secondary Modal ")]),a._v(" "),d("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal13",modifiers:{modal13:!0}}]},[a._v("Secondary modal")]),a._v(" "),d("b-modal",{attrs:{id:"modal13",title:"Deafult Modal","header-bg-variant":"secondary","header-text-variant":"light","footer-bg-variant":"secondary","footer-text-variant":"light"}},[d("h1",[a._v("modal")])])],1)],1)])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);