(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1491:function(e,t,a){"use strict";var s=a(778);a.n(s).a},1492:function(e,t,a){(e.exports=a(30)(!1)).push([e.i,"\n.centeralign[data-v-cf20438c] {\r\n    text-align: -webkit-center;\n}\r\n",""])},2218:function(e,t,a){"use strict";a.r(t);var s=a(433),i=a(973),l={name:"vue_slider",components:{vueSlider:a.n(i).a,card:s.a},data:function(){return{value:15,value1:35,value2:[20,50],value3:"jul"}},mounted:function(){},destroyed:function(){}},n=(a(1491),a(21)),r=Object(n.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("card",{attrs:{title:"<i class='ti-map'></i> Basic"}},[a("h4",[e._v("The value of slider is "+e._s(e.value))]),e._v(" "),a("vue-slider",{staticClass:"m-t-25",model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("vue-slider",{staticClass:"m-t-25 centeralign",attrs:{direction:"vertical",reverse:!0,height:"300px",width:"5"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("card",{attrs:{title:" <i class='ti-map'></i> Options"}},[a("ul",[a("li",[e._v("min : 20")]),e._v(" "),a("li",[e._v("max : 90")]),e._v(" "),a("li",[e._v("reverse : true")]),e._v(" "),a("li",[e._v("tooltip-dir : left")]),e._v(" "),a("li",[e._v("interval : 5")]),e._v(" "),a("li",[e._v("piecewise : true")]),e._v(" "),a("li",[e._v("value : "+e._s(e.value1))])]),e._v(" "),a("vue-slider",{staticClass:"m-t-25",attrs:{"tooltip-dir":"left",reverse:!0,min:20,max:90,interval:5,piecewise:!0},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("card",{attrs:{title:"<i class='ti-map'></i> Range"}},[a("h4",[e._v("The value of slider is "+e._s(e.value2))]),e._v(" "),a("vue-slider",{staticClass:"m-t-25",attrs:{range:!0},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("card",{attrs:{title:"<i class='ti-map'></i> Custom Data"}},[a("h4",[e._v("The value of slider is "+e._s(e.value3))]),e._v(" "),a("vue-slider",{staticClass:"m-t-25",attrs:{data:["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"],piecewise:!0,piecewiseStyle:{backgroundColor:"#000"}},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)],1)])])}),[],!1,null,"cf20438c",null);t.default=r.exports},426:function(e,t,a){var s=a(431);"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(31)(s,i);s.locals&&(e.exports=s.locals)},430:function(e,t,a){"use strict";var s=a(426);a.n(s).a},431:function(e,t,a){(e.exports=a(30)(!1)).push([e.i,"\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n",""])},433:function(e,t,a){"use strict";var s={name:"card",data:function(){return{show:!0,isActive:!1}},methods:{hide:function(){this.isActive=!0}},mounted:function(){},props:{title:{required:!1}},destroy:function(){}},i=(a(430),a(21)),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",class:{dNone:e.isActive}},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),a("span",{staticClass:"float-right"},[a("i",{staticClass:"fa fa-fw ti-angle-up",class:{rotate:e.show},on:{click:function(t){e.show=!e.show}}}),e._v(" "),a("i",{staticClass:"fa fa-fw ti-close removecard",on:{click:e.hide}})])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"card-body"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=l.exports},778:function(e,t,a){var s=a(1492);"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(31)(s,i);s.locals&&(e.exports=s.locals)}}]);