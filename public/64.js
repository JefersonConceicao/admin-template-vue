(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1766:function(t,a,e){"use strict";var i=e(839);e.n(i).a},1767:function(t,a,e){(t.exports=e(30)(!1)).push([t.i,".flotChart {\r\n    width    : 100%;\r\n    height   : 320px;\r\n    position : relative;\n}\n.flotChart1 {\r\n    width    : 100%;\r\n    height   : 300px;\r\n    position : relative;\n}\n#basicFlotLegend .legendLabel,\r\n#basicFlotLegend-barchart .legendLabel,\r\n#basicFlotLegend-stac .legendLabel {\r\n    padding-left  : 4px;\r\n    padding-right : 6px;\n}\n#basicFlotLegend1 .legendLabel {\r\n    padding-left  : 4px;\r\n    padding-right : 6px;\n}\n#area-chart .legendLabel,\r\n#chart-spline .legendLabel {\r\n    padding-left  : 4px;\r\n    padding-right : 3px;\n}\n#area-chart .legendColorBox,\r\n#chart-spline .legendColorBox {\r\n    padding-top : 3px;\n}\n#tooltip {\r\n    clear            : both;\r\n    z-index          : 100;\r\n    background-color : #736e6e;\r\n    padding          : 5px;\r\n    color            : #fff;\n}\n#tooltip .label {\r\n    clear         : both;\r\n    display       : block;\r\n    margin-bottom : 2px;\n}\n.card.body-bg .card-body{\r\n    background : #66ccff;\n}\n.flotChart2 {\r\n    width  : 100%;\r\n    height : 365px;\n}\n.flotChart3 {\r\n    width  : 100%;\r\n    height : 250px;\n}\n@media (max-width : 425px) {\n#bar-chart-stacked .flot-x-axis {\r\n        font-size : 9px;\n}\n}\n.flotTip{\r\n    display: none !important;\n}\r\n",""])},2303:function(t,a,e){"use strict";e.r(a);var i=e(838).a,o=(e(1766),e(21)),r=Object(o.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("card",{attrs:{title:"<i class='ti-bar-chart-alt'></i> Spline Line Chart"}},[e("div",{staticClass:"flotLegend",attrs:{id:"basicFlotLegend1"}}),t._v(" "),e("div",{staticClass:"flotChart",attrs:{id:"basicflot"}})])],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("card",{attrs:{title:"<i class='ti-bar-chart-alt'></i> Line Chart"}},[e("div",{staticClass:"flotLegend",attrs:{id:"basicFlotLegend"}}),t._v(" "),e("div",{staticClass:"flotChart1",attrs:{id:"line-chart"}})])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("card",{staticClass:"body-bg",attrs:{title:"<i class='ti-bar-chart'></i> Bar Charts"}},[e("div",{staticClass:"flotLegend",attrs:{id:"basicFlotLegend-barchart"}}),t._v(" "),e("div",{staticClass:"flotChart1",attrs:{id:"bar-chart"}})])],1),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("card",{attrs:{title:"<i class='ti-bar-chart'></i> Stacked Bar Charts"}},[e("div",{staticClass:"flotLegend",attrs:{id:"basicFlotLegend-stac"}}),t._v(" "),e("div",{staticClass:"flotChart1",attrs:{id:"bar-chart-stacked"}})])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("card",{attrs:{title:" <i class='ti-pie-chart'></i> Donut"}},[e("div",{staticClass:"flotChart2",attrs:{id:"donut"}})])],1),t._v(" "),e("div",{staticClass:"col-lg-8"},[e("card",{attrs:{title:"<i class='ti-pie-chart'></i> Pie Charts"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"flotChart1",attrs:{id:"placeholdertranslabel"}})]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"flotChart1",attrs:{id:"placeholdertiltedpie"}})])])])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("card",{attrs:{title:'<i class="ti-bar-chart"></i> Real Time Charts'}},[e("div",{staticClass:"flotChart3",attrs:{id:"realtime"}})])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("card",{attrs:{title:"<i class='ti-bar-chart'></i> Area Chart"}},[e("div",{staticClass:"flotChart3",attrs:{id:"area-chart"}})])],1),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("card",{attrs:{title:"<i class='ti-bar-chart'></i> Spline Area Chart"}},[e("div",{staticClass:"flotChart3",attrs:{id:"chart-spline"}})])],1)])])}),[],!1,null,null,null);a.default=r.exports},426:function(t,a,e){var i=e(431);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(31)(i,o);i.locals&&(t.exports=i.locals)},430:function(t,a,e){"use strict";var i=e(426);e.n(i).a},431:function(t,a,e){(t.exports=e(30)(!1)).push([t.i,"\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n",""])},433:function(t,a,e){"use strict";var i={name:"card",data:function(){return{show:!0,isActive:!1}},methods:{hide:function(){this.isActive=!0}},mounted:function(){},props:{title:{required:!1}},destroy:function(){}},o=(e(430),e(21)),r=Object(o.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card",class:{dNone:t.isActive}},[e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("span",{staticClass:"float-right"},[e("i",{staticClass:"fa fa-fw ti-angle-up",class:{rotate:t.show},on:{click:function(a){t.show=!t.show}}}),t._v(" "),e("i",{staticClass:"fa fa-fw ti-close removecard",on:{click:t.hide}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,null,null);a.a=r.exports},676:function(t,a,e){(function(t){!function(t,a,e){a=window;var i,o=[],r=t.resize=t.extend(t.resize,{}),l=!1,s="setTimeout",n="resize",d=n+"-special-event",c="pendingDelay",h="activeDelay",f="throttleWindow";function p(e){!0===l&&(l=e||1);for(var s=o.length-1;s>=0;s--){var h=t(o[s]);if(h[0]==a||h.is(":visible")){var f=h.width(),u=h.height(),b=h.data(d);!b||f===b.w&&u===b.h||(h.trigger(n,[b.w=f,b.h=u]),l=e||!0)}else(b=h.data(d)).w=0,b.h=0}null!==i&&(l&&(null==e||e-l<1e3)?i=a.requestAnimationFrame(p):(i=setTimeout(p,r[c]),l=!1))}r[c]=200,r[h]=20,r[f]=!0,t.event.special[n]={setup:function(){if(!r[f]&&this[s])return!1;var a=t(this);o.push(this),a.data(d,{w:a.width(),h:a.height()}),1===o.length&&(i=e,p())},teardown:function(){if(!r[f]&&this[s])return!1;for(var a=t(this),e=o.length-1;e>=0;e--)if(o[e]==this){o.splice(e,1);break}a.removeData(d),o.length||(l?cancelAnimationFrame(i):clearTimeout(i),i=null)},add:function(a){if(!r[f]&&this[s])return!1;var i;function o(a,o,r){var l=t(this),s=l.data(d)||{};s.w=o!==e?o:l.width(),s.h=r!==e?r:l.height(),i.apply(this,arguments)}if(t.isFunction(a))return i=a,o;i=a.handler,a.handler=o}},a.requestAnimationFrame||(a.requestAnimationFrame=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(t,e){return a.setTimeout((function(){t((new Date).getTime())}),r[h])}),a.cancelAnimationFrame||(a.cancelAnimationFrame=a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||clearTimeout)}(t,this),t.plot.plugins.push({init:function(t){function a(){var a=t.getPlaceholder();0!=a.width()&&0!=a.height()&&(t.resize(),t.setupGrid(),t.draw())}t.hooks.bindEvents.push((function(t,e){t.getPlaceholder().resize(a)})),t.hooks.shutdown.push((function(t,e){t.getPlaceholder().unbind("resize",a)}))},options:{},name:"resize",version:"1.0"})}).call(this,e(429))},838:function(t,a,e){"use strict";(function(t){var i=e(433);e(675),e(676),e(1762),e(677),e(678),e(1763),e(1764),e(1765);a.a={name:"flot_charts",components:{card:i.a},mounted:function(){t(document).ready((function(){var a=t("#basicflot"),e=t.plot(a,[{data:[[0,5],[1,30],[2,10],[3,15],[4,30],[5,5],[6,12],[7,10],[8,55],[9,13],[10,25],[11,10],[12,12],[13,6],[14,40],[15,5],[16,5]],label:"Sales",color:"#6699cc"},{data:[[0,3],[1,20],[2,5],[3,2],[4,20],[5,3],[6,2],[7,0],[8,3],[9,1],[10,0],[11,1],[12,0],[13,2],[14,1],[15,20],[16,5]],label:"Profit",color:"#ff6666",opacity:"1"}],{series:{lines:{show:!1},splines:{show:!0,tension:.4,lineWidth:1,fill:.4},points:{radius:0,show:!0},shadowSize:2},legend:{container:"#basicFlotLegend1",noColumns:0},grid:{hoverable:!0,clickable:!0,borderColor:"#ddd",borderWidth:0,labelMargin:5,backgroundColor:"#fff"},colors:["#6699cc","#ff6666"],xaxis:{},yaxis:{ticks:4}}),i=null;a.bind("plothover",(function(a,e,o){if(t("#x").text(e.x.toFixed(2)),t("#y").text(e.y.toFixed(2)),o){if(i!=o.dataIndex){i=o.dataIndex,t("#tooltip").remove();var r=o.datapoint[0].toFixed(2),l=o.datapoint[1].toFixed(2);!function(a,e,i){t('<div id="tooltip" class="tooltipflot">'+i+"</div>").css({position:"absolute",display:"none",top:e+5,left:a+5}).appendTo("body").fadeIn(200)}(o.pageX,o.pageY,o.series.label+" on "+parseInt(r)+" = "+parseInt(l))}}else t("#tooltip").remove(),i=null})).bind("plotclick",(function(t,a,i){i&&e.highlight(i.series,i.datapoint)})),t((function(){var a,e;a=[{label:"Total visitors",data:[[1262304e6,100],[12649824e5,560],[12674016e5,1605],[127008e7,1129],[1272672e6,2163],[12753504e5,1905],[12779424e5,2002],[12806208e5,2917],[12832992e5,2700],[12858912e5,2700],[12885696e5,2100],[12911616e5,2700]],color:"#66cc99"},{label:"Total Sales",data:[[1262304e6,434],[12649824e5,232],[12674016e5,875],[127008e7,553],[1272672e6,975],[12753504e5,1379],[12779424e5,789],[12806208e5,1026],[12832992e5,1240],[12858912e5,1892],[12885696e5,1147],[12911616e5,2256]],color:"#f0ad4e"}],e={xaxis:{min:new Date(2009,12,1).getTime(),max:new Date(2010,11,2).getTime(),mode:"time",tickSize:[1,"month"],monthNames:["01","02","03","04","05","06","07","08","09","10","11","12"],tickLength:0},yaxis:{},series:{lines:{show:!0,fill:!1,lineWidth:2},points:{show:!0,radius:4.5,fill:!0,fillColor:"#ffffff",lineWidth:2}},grid:{hoverable:!0,clickable:!1,borderWidth:0},legend:{container:"#basicFlotLegend",show:!0},tooltip:!0,tooltipOpts:{content:"%s: %y"}};var i=t("#line-chart");i.length&&t.plot(i,a,e)}));t.plot("#bar-chart",[{data:[["1",100],["2",80],["3",66],["4",48],["5",68],["6",48],["7",66],["8",80],["9",64],["10",48],["11",64],["12",100]],label:"Project",color:"#dcdcdc"}],{series:{bars:{align:"center",lineWidth:0,show:!0,barWidth:.6,fill:.9}},grid:{borderColor:"#ddd",borderWidth:1,hoverable:!0},legend:{container:"#basicFlotLegend-barchart",show:!0},tooltip:!0,tooltipOpts:{content:"%s: %y"},xaxis:{tickColor:"#ddd",mode:"categories"},yaxis:{tickColor:"#ddd"},shadowSize:0});t.plot("#bar-chart-stacked",[{data:[["Jan",130],["Feb",63],["Mar",104],["Apr",54],["May",92],["Jun",150],["Jul",50],["Aug",80],["Sep",120],["Oct",91],["Nov",79],["Dec",112]],label:"New Visitor",color:"#6699cc"},{data:[["Jan",58],["Feb",30],["Mar",46],["Apr",35],["May",55],["Jun",46],["Jul",20],["Aug",50],["Sep",50],["Oct",40],["Nov",35],["Dec",57]],label:"Returning Visitor",color:"#66cc99"}],{series:{stack:!0,bars:{align:"center",lineWidth:0,show:!0,barWidth:.6,fill:.9}},grid:{borderColor:"#ddd",borderWidth:1,hoverable:!0},legend:{container:"#basicFlotLegend-stac",show:!0},tooltip:!0,tooltipOpts:{content:"%x : %y",defaultTheme:!1},xaxis:{tickColor:"#ddd",mode:"categories"},yaxis:{tickColor:"#ddd"},shadowSize:0});function o(t,a){return"<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>"+t+"<br/>"+Math.round(a.percent)+"%</div>"}t.plot(t("#donut"),[{label:"Google+",data:180,color:"#ff6666"},{label:"Profile",data:150,color:"#f0ad4e"},{label:"Facebook ",data:130,color:"#6699cc"},{label:"Twitter ",data:190,color:"#66ccff"},{label:"Linkedin",data:120,color:"#6699cc"}],{series:{pie:{innerRadius:.5,show:!0}},legend:{show:!1},grid:{hoverable:!0},tooltip:!0,tooltipOpts:{content:"%p.0%, %s"}}),t((function(){for(var a=[],e=Math.floor(6*Math.random())+3,i=0;i<e;i++)a[i]={label:"Series"+(i+1),data:Math.floor(100*Math.random())+1};t.plot("#placeholdertranslabel",a,{series:{pie:{show:!0,radius:1,label:{show:!0,radius:1,formatter:o,background:{opacity:.8}}}},legend:{show:!1},colors:["#6699cc","#f0ad4e","#66ccff","#dcdcdc"]}),t("#footer").prepend("Flot "+t.plot.version+" &ndash; ")})),t((function(){for(var a=[],e=Math.floor(6*Math.random())+3,i=0;i<e;i++)a[i]={label:"Series"+(i+1),data:Math.floor(100*Math.random())+1};t.plot("#placeholdertiltedpie",a,{series:{pie:{show:!0,radius:1,tilt:.5,label:{show:!0,radius:1,formatter:o,background:{opacity:.8}},combine:{color:"#999",threshold:.1}}},legend:{show:!1},colors:["#DCDCDC","#f0ad4e","#6699cc","#66ccff"]}),t("#footer").prepend("Flot "+t.plot.version+" &ndash; ")}));var r=[];function l(){for(r.length>0&&(r=r.slice(1));r.length<300;){var t=(r.length>0?r[r.length-1]:50)+10*Math.random()-5;t<0&&(t=0),t>100&&(t=100),r.push(t)}for(var a=[],e=0;e<r.length;++e)a.push([e,r[e]]);return a}var s=t.plot(t("#realtime"),[l()],{colors:["#66ccff"],series:{shadowSize:0,lines:{show:!0,fill:!0,fillColor:{colors:[{opacity:.5},{opacity:.5}]}}},yaxis:{min:0,max:120},xaxis:{show:!1},grid:{backgroundColor:"#fff",borderWidth:1,borderColor:"#fff"}});!function t(){s.setData([l()]),s.draw(),setTimeout(t,50)}();t.plot("#area-chart",[{data:[["Jan",50],["Feb",80],["Mar",60],["Apr",90],["May",60],["Jun",80],["Jul",80]],label:"Product 1",color:"#66ccff"},{data:[["Jan",20],["Feb",40],["Mar",30],["Apr",40],["May",30],["Jun",30],["Jul",50]],label:"product 2",color:"#f0ad4e"}],{series:{lines:{show:!0,fill:.8},points:{show:!0,radius:4}},grid:{borderColor:"#ddd",borderWidth:1,hoverable:!0},tooltip:!0,tooltipOpts:{content:"%x : %y",defaultTheme:!1},xaxis:{tickColor:"#ddd",mode:"categories"},yaxis:{tickColor:"#ddd"},shadowSize:0});t.plot("#chart-spline",[{data:[["Jan",50],["Feb",80],["Mar",60],["Apr",90],["May",60],["Jun",80],["Jul",70]],label:"Product 1",color:"#DCDCDC"},{data:[["Jan",20],["Feb",40],["Mar",30],["Apr",40],["May",30],["Jun",30],["Jul",50]],label:"Product 2",color:"#66ccff"}],{series:{lines:{show:!1},splines:{show:!0,tension:.4,lineWidth:2,fill:.8},points:{show:!0,radius:4}},grid:{borderColor:"#ddd",borderWidth:1,hoverable:!0},tooltip:!0,tooltipOpts:{content:"%x : %y",defaultTheme:!1},xaxis:{tickColor:"#ddd",mode:"categories"},yaxis:{tickColor:"#ddd"},shadowSize:0})}))},destroyed:function(){}}}).call(this,e(429))},839:function(t,a,e){var i=e(1767);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(31)(i,o);i.locals&&(t.exports=i.locals)}}]);