(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1764:function(t,a,e){"use strict";var s=e(844);e.n(s).a},1765:function(t,a,e){(t.exports=e(30)(!1)).push([t.i,"\n@media(min-width: 320px) and(max-width: 425px){\n.chart-type-buttons .btn{\n       display: block;\n}\n}\n",""])},2234:function(t,a,e){"use strict";e.r(a);var s=e(433),r=e(1763),n={name:"blank",data:function(){return{barvals:[17,40,33,44,126,156,324,333,478,495,373]}},components:{card:s.a},mounted:function(){var t=this.barvals,a={labels:["2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],datasets:[{title:"Events",values:t,formatted:t.map((function(t){return t+" reports"}))}]},e={0:{values:[0,0,0,0,0,0,0,0,0,0,0,0]},1:{values:[2,3,3,2,1,4,0,1,2,7,11,4]},2:{values:[7,7,2,4,0,1,5,3,1,2,0,1]},3:{values:[0,2,6,2,2,1,2,3,6,3,7,10]},4:{values:[9,10,8,10,6,5,8,8,24,15,10,13]},5:{values:[9,13,16,9,4,5,7,10,14,22,23,24]},6:{values:[20,22,28,19,28,19,14,19,51,37,29,38]},7:{values:[29,20,22,16,16,19,24,26,57,31,46,27]},8:{values:[36,24,38,27,15,22,24,38,32,57,139,26]},9:{values:[37,36,32,33,12,34,52,45,58,57,64,35]},10:{values:[36,46,45,32,27,31,30,36,39,49,0,0]}},s=document.querySelector("#chart-composite-1"),n=document.querySelector("#chart-composite-2"),i=new r.a({parent:s,title:"Fireball/Bolide Events - Yearly (more than 5 reports)",data:a,type:"bar",height:180,colors:["#ff6666"],is_navigable:1,is_series:1,region_fill:1}),o=new r.a({parent:n,data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{values:[36,46,45,32,27,31,30,36,39,49,0,0]}]},type:"line",height:180,colors:["#20c997"],is_series:1});i.parent.addEventListener("data-select",(function(t){o.update_values([e[t.index]])}));var l=new r.a({parent:"#chart-types",title:"My Awesome Chart",data:{labels:["12am-3am","3am-6am","6am-9am","9am-12pm","12pm-3pm","3pm-6pm","6pm-9pm","9pm-12am"],datasets:[{title:"Some Data",values:[25,40,30,35,8,52,17,-4]},{title:"Another Set",values:[25,50,-10,15,18,32,27,14]},{title:"Yet Another",values:[15,20,-3,-15,58,12,-17,37]}]},type:"pie",height:250,colors:["#20c997","#fd7e14","#66ccff"],is_series:1,format_tooltip_x:function(t){return(t+"").toUpperCase()},format_tooltip_y:function(t){return t+" pts"}});Array.prototype.slice.call(document.querySelectorAll(".chart-type-buttons button")).map((function(t){t.addEventListener("click",(function(t){var a=t.target,e=a.getAttribute("data-type"),s=l.get_different_chart(e);s&&(l=s),l.setColors(["#20c997","#fd7e14","#66ccff"],e),l.refresh(),Array.prototype.slice.call(a.parentNode.querySelectorAll("button")).map((function(t){t.classList.remove("active")})),a.classList.add("active")}))}));var c={parent:"#chart-trends",title:"Mean Total Sunspot Count - Yearly",data:{labels:[1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],datasets:[{values:[132.9,150,149.4,148,94.4,97.6,54.1,49.2,22.5,18.4,39.3,131,220.1,218.9,198.9,162.4,91,60.5,20.6,14.8,33.9,123,211.1,191.8,203.3,133,76.1,44.9,25.1,11.6,28.9,88.3,136.3,173.9,170.4,163.6,99.3,65.3,45.8,24.7,12.6,4.2,4.8,24.9,80.8,84.5,94,113.3,69.8,39.8]}]},type:"line",height:250,colors:["#20c997"],is_series:1,show_dots:0,heatline:1,x_axis_mode:"tick",y_axis_mode:"span"};new r.a(c),Array.prototype.slice.call(document.querySelectorAll(".chart-plot-buttons button")).map((function(t){t.addEventListener("click",(function(t){var a=t.target,e=a.getAttribute("data-type"),s=[];s="line"===e?[0,0,0]:"region"===e?[0,0,1]:[0,1,0],c.show_dots=s[0],c.heatline=s[1],c.region_fill=s[2],c.init=!1,new r.a(c),Array.prototype.slice.call(a.parentNode.querySelectorAll("button")).map((function(t){t.classList.remove("active")})),a.classList.add("active")}))}))},methods:{addbarvals:function(){this.barvals=this.barvals.split(" "),this.$store.commit("newfrapbar",this.barvals)}},destroyed:function(){}},i=(e(1764),e(21)),o=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("card",{attrs:{title:"<h4 class='card-title'>Bar Charrts</h4>"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 push-sm-1 later",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"border",attrs:{id:"chart-composite-1"}},[e("svg",{attrs:{height:"225"}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.barvals,expression:"barvals"}],staticClass:"form-control mt-2",attrs:{type:"text"},domProps:{value:t.barvals},on:{input:function(a){a.target.composing||(t.barvals=a.target.value)}}}),t._v(" "),e("button",{staticClass:"mt-2 btn btn-success",on:{click:t.addbarvals}},[t._v("Submit")]),t._v(" "),e("span",{staticClass:"mt-1"},[t._v("Click or use arrow keys to navigate data points")])]),t._v(" "),e("div",{staticClass:"col-sm-6 push-sm-1 later",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"border",attrs:{id:"chart-composite-2"}},[e("svg",{attrs:{height:"225"}})])])])])]),t._v(" "),e("card",{attrs:{title:"<h4 class='card-title'>Default charts</h4>"}},[e("div",{staticClass:"border",attrs:{id:"chart-types"}}),t._v(" "),e("div",{staticClass:"btn-group chart-type-buttons margin-vertical-px mt-3",attrs:{role:"group"}},[e("button",{staticClass:"btn btn-sm btn-primary  p-1 p-sm-2",attrs:{type:"button","data-type":"bar"}},[t._v("Bar ")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary p-1 p-sm-2",attrs:{type:"button","data-type":"line"}},[t._v("Line ")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary p-1 p-sm-2",attrs:{type:"button","data-type":"scatter"}},[t._v("Scatter ")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary p-1 p-sm-2",attrs:{type:"button","data-type":"pie"}},[t._v("Pie ")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary p-1 p-sm-2",attrs:{type:"button","data-type":"percentage"}},[t._v("Percentage")])])]),t._v(" "),e("card",{attrs:{title:"<h4 class='card-title'>Plot Trends</h4>"}},[e("div",{staticClass:"border",attrs:{id:"chart-trends"}}),t._v(" "),e("div",{staticClass:"btn-group chart-plot-buttons mt-1  mt-3",attrs:{role:"group"}},[e("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button","data-type":"line"}},[t._v("Line")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary active",attrs:{type:"button","data-type":"heatline"}},[t._v("HeatLine")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button","data-type":"region"}},[t._v("Region")])])])],1)}),[],!1,null,null,null);a.default=o.exports},426:function(t,a,e){var s=e(431);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(31)(s,r);s.locals&&(t.exports=s.locals)},430:function(t,a,e){"use strict";var s=e(426);e.n(s).a},431:function(t,a,e){(t.exports=e(30)(!1)).push([t.i,"\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n",""])},433:function(t,a,e){"use strict";var s={name:"card",data:function(){return{show:!0,isActive:!1}},methods:{hide:function(){this.isActive=!0}},mounted:function(){},props:{title:{required:!1}},destroy:function(){}},r=(e(430),e(21)),n=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card",class:{dNone:t.isActive}},[e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("span",{staticClass:"float-right"},[e("i",{staticClass:"fa fa-fw ti-angle-up",class:{rotate:t.show},on:{click:function(a){t.show=!t.show}}}),t._v(" "),e("i",{staticClass:"fa fa-fw ti-close removecard",on:{click:t.hide}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,null,null);a.a=n.exports},844:function(t,a,e){var s=e(1765);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(31)(s,r);s.locals&&(t.exports=s.locals)}}]);