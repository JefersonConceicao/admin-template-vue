(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1361:function(t,s,a){"use strict";var i=a(725);a.n(i).a},1362:function(t,s,a){(t.exports=a(30)(!1)).push([t.i,"\n.shipping_perc{\n     margin-top: 52px;\n     margin-left: -32px;\n     position: absolute;\n}\n.top_revenue li{\n     line-height: 26px;\n}\n.sale-tag{\n     margin-top: 10px;\n     position: absolute;\n}\n.sale-tag:after{\n     content: ' ';\n     position: absolute;\n     width: 0;\n     height: 0;\n     left: 30px;\n     right: auto;\n     top: 0px;\n     bottom: auto;\n     border: 10px solid;\n     border-color: #ff6666  transparent transparent transparent;\n}\n.sale-tag:before{\n     content: ' ';\n     position: absolute;\n     width: 0;\n     height: 0;\n     left: 30px;\n     right: auto;\n     top: -1px;\n     bottom: auto;\n     border: 10px solid;\n     border-color:  transparent transparent  #ff6666 transparent;\n}\n.visit_sources li {\n     font-size: 15px;\n     line-height: 30px;\n}\n.visit_sources li i{\n     line-height: 3;\n     font-size:16px;\n     padding: 0.75rem;\n     border-radius: 20px;\n     border: 1px solid #c1c1c1;\n}\n.new_visits .ct-series-b .ct-slice-donut{\n     stroke: #66cc99;\n}\n.new_visits .ct-series-a .ct-slice-donut{\n     stroke:#6699cc;\n}\n.new_visits .v-chartist-container,.marketing_camp .v-chartist-container{\n     height: 300px;\n}\n.donut-label{\n     height:5px;\n     width: 5px;\n}\n.ct-label {\n     fill: rgb(0, 0, 0);\n     color: rgb(0, 0, 0);\n     font-size: 0.75rem;\n     line-height: 1;\n}\n.marketing_camp .ct-series-d .ct-slice-pie{\n     fill:#6699cc;\n}\n.marketing_camp .ct-series-a .ct-slice-pie{\n     fill:#66cc99;\n}\n.marketing_camp .ct-series-b .ct-slice-pie{\n     fill:#ff6666;\n}\n.marketing_camp .ct-series-c .ct-slice-pie{\n     fill: #ec9f1c;\n}\n.ct-series-a .ct-line,.ct-series-a .ct-point{\n     stroke: #66cc99;\n}\n.top_revenue{\n     margin-top: -8px;\n}\n@media(max-width:320px){\n.ct-label.ct-horizontal.ct-end{\n        margin-left: -5px;\n        transform: rotate(40deg);\n}\n}\n@media(max-width:1440px) {\n.most_trending .nav-link{\n         padding: 0.7rem 1rem;\n}\n}\n@media(max-width:375px){\n.edashboard{\n         margin-top: 15px;\n}\n}\n@media(min-width:320px) and (max-width: 425px){\n.top_revenue{\n         margin-top: 0;\n}\n}\n",""])},2206:function(t,s,a){"use strict";a.r(s);var i,e=a(720),n=a.n(e),r=(a(643),a(13)),l=a.n(r),c=a(582);l.a.use(c.default);var o={name:"edashboard",data:function(){return{value:70,val3:70,progress:30,visited:[{src:a(450),price:"$250",mrp:"$500",name:"US-Polo T-shirt",sale:"50%",visits:"22,350"},{src:a(644),price:"$450.45",mrp:"$585",name:"US-Polo Red Shirt",sale:"23%",visits:"11,260"},{src:a(721),price:"$280",mrp:"$350",name:"Gift box",sale:"20%",visits:"10,360"}],trending:[{src:a(450),price:"$250",mrp:"$500",name:"US-Polo T-shirt",sale:"50%",visits:"22,350"},{src:a(722),price:"$1000",mrp:"1500",name:"Apple Macbook pro",sale:"33%",visits:"16,234",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."},{src:a(644),price:"$450.45",mrp:"$585",name:"US-Polo Red Shirt",sale:"23%",visits:"11,260"}],time:{data:{labels:["12am","4am","8am","12pm","4pm","8pm"],series:[{name:"series-1",data:[{x:new Date(143134652600),y:53},{x:new Date(143234652600),y:40},{x:new Date(143340052600),y:45},{x:new Date(143366652600),y:40},{x:new Date(143410652600),y:20},{x:new Date(143508652600),y:32}]},{name:"series-2",data:[{x:new Date(143134652600),y:53},{x:new Date(143234652600),y:35},{x:new Date(143334652600),y:30},{x:new Date(143384652600),y:30},{x:new Date(143568652600),y:10}]}]},options:{fullWidth:!0,chartPadding:{right:40}}},donut:{data:{labels:["Old 6,25,300","New 20,598"],series:[83,17]},options:{donut:!0,donutWidth:45},responsiveoptions:[["screen and (min-width: 320px)",{labelOffset:50,chartPadding:20}],["screen and (min-width: 640px)",{chartPadding:20,labelOffset:50,labelDirection:"explode",labelInterpolationFnc:function(t){return t}}],["screen and (min-width: 1024px)",{labelOffset:50,chartPadding:20}]]},pie:{data:{labels:["Social media","TV ads","Brochures","Hoardings"],series:[40,30,15,15]},options:{},responsiveoptions:[["screen and (min-width: 640px)",{chartPadding:30,labelOffset:50,labelDirection:"explode",labelInterpolationFnc:function(t){return t}}],["screen and (min-width: 1024px)",{labelOffset:45,chartPadding:20}]]}}},components:{VueChartist:n.a},mounted:function(){var t=this;i=this.$store.subscribe((function(s,a){"left_menu"==s.type&&setTimeout((function(){t.$refs.chartist8.renderChart()}))}))},beforeRouteLeave:function(t,s,a){i(),a()}},d=(a(723),a(1361),a(21)),p=Object(d.a)(o,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"edashboard"},[i("h5",[t._v("Today's sales")]),t._v(" "),i("div",{staticClass:"row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-sm-12 col-xl-6"},[i("b-card",{staticClass:"bg-primary-card",attrs:{"header-tag":"h5"}},[i("vue-chartist",{ref:"chartist8",attrs:{data:t.time.data,options:t.time.options,type:"Line"}})],1)],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4 col-lg-6"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("h5",{staticClass:"text-center"},[t._v("\n                        Today's Shipments\n                    ")]),t._v(" "),i("div",{staticClass:"text-center"},[t._m(1),t._v(" "),i("circle-slider",{attrs:{side:150,"circle-width":9,"progress-width":8,"knob-radius":7,"progress-color":"#418AC9","knob-color":"#418AC9","circle-color":"#edeff0"},model:{value:t.val3,callback:function(s){t.val3=s},expression:"val3"}})],1),t._v(" "),i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-sm-6 text-center"},[t._v("\n                            45% completed\n                            "),i("b-progress",{attrs:{height:"3px",value:t.value,variant:"success"}})],1),t._v(" "),i("div",{staticClass:"col-sm-6 text-center"},[t._v("\n                            55% in progress\n                            "),i("b-progress",{attrs:{height:"3px",value:t.progress,variant:"danger"}})],1)])])])]),t._v(" "),i("div",{staticClass:"col-sm-8 col-lg-6"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("h5",{staticClass:"text-center"},[t._v("Todays top product by revenue")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("img",{staticClass:"img-fluid",attrs:{src:a(450),alt:"product"}})]),t._v(" "),t._m(2)])])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[i("b-tabs",{staticClass:"mt-4 most_trending"},[i("b-tab",{attrs:{title:"Most visited",active:""}},[i("div",{staticClass:"row mt-3"},t._l(t.visited,(function(s,a){return i("div",{key:a,staticClass:"col-sm-4"},[i("span",{staticClass:"bg-danger text-white pl-2 pr-2 sale-tag"},[t._v(t._s(s.sale))]),t._v(" "),i("img",{staticClass:"img-fluid",attrs:{src:s.src,alt:"product"}}),t._v(" "),i("ul",{staticClass:"pl-0"},[i("li",[i("h4",{staticClass:"mt-2"},[t._v(t._s(s.price))])]),t._v(" "),i("li",[i("p",{staticClass:"text-secondary mb-0"},[t._v("M.R.P: "),i("del",[t._v(" "+t._s(s.mrp))])])]),t._v(" "),i("li",[t._v("Name: "+t._s(s.name))]),t._v(" "),i("li",[t._v("Number of visitors: "),i("span",{staticClass:"text-danger"},[t._v(t._s(s.visits))])])])])})),0)]),t._v(" "),i("b-tab",{attrs:{title:"Trending products"}},[i("div",{staticClass:"row mt-3"},t._l(t.trending,(function(s,a){return i("div",{key:a,staticClass:"col-sm-4"},[i("span",{staticClass:"bg-danger text-white pl-2 pr-2 sale-tag"},[t._v(t._s(s.sale))]),t._v(" "),i("img",{staticClass:"img-fluid",attrs:{src:s.src,alt:"product"}}),t._v(" "),i("ul",{staticClass:"pl-0"},[i("li",[i("h4",{staticClass:"mt-2"},[t._v(t._s(s.price))])]),t._v(" "),i("li",[i("p",{staticClass:"text-secondary mb-0"},[t._v("M.R.P: "),i("del",[t._v(" "+t._s(s.mrp))])])]),t._v(" "),i("li",[t._v("Name: "+t._s(s.name))]),t._v(" "),i("li",[t._v("Number of visitors: "),i("span",{staticClass:"text-danger"},[t._v(t._s(s.visits))])])])])})),0)])],1)],1)]),t._v(" "),i("div",{staticClass:"row mt-3"},[t._m(3),t._v(" "),i("div",{staticClass:"col-sm-6 col-xl-4"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body new_visits"},[i("h5",[t._v("Visitors")]),t._v(" "),i("vue-chartist",{ref:"chartist6",attrs:{data:t.donut.data,options:t.donut.options,type:"Pie",responsiveOptions:t.donut.responsiveoptions}})],1)])]),t._v(" "),i("div",{staticClass:"col-sm-6 col-xl-5"},[i("div",{staticClass:"card marketing_camp"},[i("div",{staticClass:"card-body"},[i("h5",[t._v("\n                       Marketing campaign\n                   ")]),t._v(" "),i("vue-chartist",{ref:"chartist6",attrs:{data:t.pie.data,options:t.pie.options,type:"Pie",responsiveOptions:t.pie.responsiveoptions}})],1)])])])])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-12 col-xl-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card p-3 text-center bg-success"},[a("h5",{staticClass:"text-white"},[t._v("Total sales")]),t._v(" "),a("i",{staticClass:"fa fa-bar-chart text-white fa-2x mt-3 mb-3"}),t._v(" "),a("h5",{staticClass:"text-white font-weight-bold"},[a("i",{staticClass:"fa fa-long-arrow-up"}),t._v(" 15%")])])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card p-3 text-center bg-primary"},[a("h5",{staticClass:"text-white"},[t._v("Total orders")]),t._v(" "),a("i",{staticClass:"fa fa-shopping-cart text-white fa-2x mt-3 mb-3"}),t._v(" "),a("h5",{staticClass:"text-white font-weight-bold"},[a("i",{staticClass:"fa fa-long-arrow-up"}),t._v(" 2,23,100")])])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card p-3 text-center bg-warning"},[a("h5",{staticClass:"text-white"},[t._v("Total products")]),t._v(" "),a("i",{staticClass:"fa fa-list-alt text-white mt-3 mb-3 fa-2x"}),t._v(" "),a("h5",{staticClass:"text-white font-weight-bold"},[a("i",{staticClass:"fa fa-long-arrow-up"}),t._v(" 6,56,529")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"shipping_perc"},[this._v("\n                            70% "),s("br"),this._v("bouce rate\n                        ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-6"},[a("ul",{staticClass:"pl-0 top_revenue"},[a("li",[t._v("Name: US Polo T-shirt")]),t._v(" "),a("li",[t._v("Seller: Lorvent Solutions")]),t._v(" "),a("li",[a("p",[a("span",{staticClass:"fa fa-star star_icon text-warning"}),t._v(" "),a("span",{staticClass:"fa fa-star star_icon text-warning"}),t._v(" "),a("span",{staticClass:"fa fa-star star_icon text-warning"}),t._v(" "),a("span",{staticClass:"fa fa-star star_icon text-warning"}),t._v(" "),a("span",{staticClass:"fa fa-star-half star_icon text-warning"})])]),t._v(" "),a("li",[a("span",{staticClass:"text-success"},[t._v("Offer 1")]),t._v(": Lorem ipsum dolor sit amet, consectetur adipisicing elit.....\n                              ")]),t._v(" "),a("li",[a("span",{staticClass:"text-primary"},[t._v("Number of sales today")]),t._v(": "),a("span",{staticClass:"text-danger font-weight-bold"},[t._v("12,550")])]),t._v(" "),a("li",[a("span",{staticClass:"text-primary"},[t._v("Total income")]),t._v(": "),a("span",{staticClass:"text-danger font-weight-bold"},[t._v("31,37,500")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-6 col-xl-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",[t._v("Visitors sources")]),t._v(" "),a("ul",{staticClass:"pl-0 visit_sources"},[a("li",[a("i",{staticClass:"ti-facebook text-primary"}),t._v(" Facebook "),a("span",{staticClass:"text-danger float-right mt-3"},[t._v("15,320")])]),t._v(" "),a("li",[a("i",{staticClass:"ti-twitter text-primary"}),t._v(" Twitter "),a("span",{staticClass:"text-danger float-right mt-3"},[t._v("15,320")])]),t._v(" "),a("li",[a("i",{staticClass:"ti-instagram text-primary"}),t._v(" Instagram "),a("span",{staticClass:"text-danger float-right mt-3"},[t._v("15,320")])]),t._v(" "),a("li",[a("i",{staticClass:"ti-mobile text-success"}),t._v(" Application "),a("span",{staticClass:"text-danger float-right mt-3"},[t._v("15,320")])]),t._v(" "),a("li",[a("i",{staticClass:"ti-home text-warning"}),t._v(" Store"),a("span",{staticClass:"text-danger float-right mt-3"},[t._v("15,320")])]),t._v(" "),a("li",[a("i",{staticClass:"ti-desktop text-danger"}),t._v(" Direct site"),a("span",{staticClass:"text-danger float-right mt-3"},[t._v("15,320")])])])])])])}],!1,null,null,null);s.default=p.exports},450:function(t,s){t.exports="/laravel_vue/images/product.png?921f475804236cccb1e348d8ea00ae2a"},644:function(t,s){t.exports="/laravel_vue/images/product2.png?8d301375df448ee3e714523880e4068a"},721:function(t,s){t.exports="/laravel_vue/images/product3.png?8d301375df448ee3e714523880e4068a"},722:function(t,s){t.exports="/laravel_vue/images/product4.png?8d301375df448ee3e714523880e4068a"},725:function(t,s,a){var i=a(1362);"string"==typeof i&&(i=[[t.i,i,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};a(31)(i,e);i.locals&&(t.exports=i.locals)}}]);