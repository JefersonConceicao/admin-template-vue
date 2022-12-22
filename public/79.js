(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1542:function(s,t,n){"use strict";var i=n(805);n.n(i).a},1543:function(s,t,n){var i=n(45);(s.exports=n(30)(!1)).push([s.i,"/*grid layouts*/\n.grid-property {\n    padding          : 1.5em 0;\n    background-color : #fff;\n    border           : 2px solid #888;\n    border-radius    : 3px;\n}\n.grid-section {\n    margin-top : 77px;\n}\n.grid-section h3 {\n    margin-left : 15px;\n}\n/*grid layout responsive*/\n@media only screen and (max-width : 768px) {\n.grid-selection2 {\n        margin-top : 22px;\n}\n}\n@media only screen and (max-width : 425px) {\n.grid-selection1 {\n        margin-top : 22px;\n}\n}\n/*grid-stack*/\n.grid-stack-item-content {\n    background : url("+i(n(438))+");\n    color      : #2c3e50;\n    text-align : center;\n    font-size  : 20px;\n}\n.grid-stack-item-content .fa {\n    font-size : 64px;\n    display   : block;\n    margin    : 20px 0 10px 0;\n}\n.grid-stack > .grid-stack-item > .grid-stack-item-content {\n    cursor : move;\n}",""])},2223:function(s,t,n){"use strict";n.r(t);var i={name:"grid_layout",components:{card:n(433).a},mounted:function(){},destroyed:function(){}},a=(n(1542),n(21)),d=Object(a.a)(i,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 "},[n("card",{attrs:{title:"<i class='ti-layout-menu-v'></i> Responsive Grid Examples"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("p",[s._v("\n                            This demostrates Bootstrap Grid system and how it responds to different screen\n                            sizes.\n                        ")]),s._v(" "),n("div",{},[n("p",{staticClass:"d-lg-block d-md-none d-sm-none d-none"},[s._v("\n                                lg indicates that the large grid displaying. The grid stacks horizontally\n                                < 1200px.\n                            ")]),s._v(" "),n("p",{staticClass:"d-md-block d-lg-none d-sm-none d-none"},[s._v("\n                                md indicates that the medium grid displaying. The grid stacks horizontally\n                                < 992px.\n                            ")]),s._v(" "),n("p",{staticClass:"d-sm-block d-md-none d-lg-none d-xl-none d-none"},[s._v("\n                                sm indicates that the small grid displaying. The grid stacks horizontally\n                                < 768px.\n                            ")]),s._v(" "),n("p",{staticClass:"d-block d-sm-none d-md-none d-lg-none d-xl-none"},[s._v("\n                                xs indicates that the extra small grid displaying. This grid is always\n                                horizontal.\n                            ")])])]),s._v(" "),n("div",{staticClass:"col-md-12 grid-section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-md-4 col-sm-3 col-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",{staticClass:"d-lg-block d-md-none d-sm-none d-none"},[s._v(".col-lg-4")]),s._v(" "),n("span",{staticClass:"d-md-block d-lg-none d-none d-sm-none"},[s._v(".col-md-4")]),s._v(" "),n("span",{staticClass:"d-sm-block d-md-none d-lg-none d-none"},[s._v(".col-sm-3")]),s._v(" "),n("span",{staticClass:"d-block d-md-none d-sm-none d-lg-none"},[s._v(".col-4")])])]),s._v(" "),n("div",{staticClass:"col-lg-4 col-md-2 col-sm-3 col-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",{staticClass:"d-lg-block d-md-none d-sm-none d-none"},[s._v(".col-lg-4")]),s._v(" "),n("span",{staticClass:"d-md-block d-lg-none d-none d-sm-none"},[s._v(".col-md-2")]),s._v(" "),n("span",{staticClass:"d-sm-block d-md-none d-lg-none d-none"},[s._v(".col-sm-3")]),s._v(" "),n("span",{staticClass:"d-block d-md-none d-sm-none d-lg-none"},[s._v(".col-4")])])]),s._v(" "),n("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 col-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",{staticClass:"d-lg-block d-md-none d-sm-none d-none"},[s._v(".col-lg-4")]),s._v(" "),n("span",{staticClass:"d-md-block d-lg-none d-none d-sm-none"},[s._v(".col-md-6")]),s._v(" "),n("span",{staticClass:"d-sm-block d-md-none d-lg-none d-none"},[s._v(".col-sm-6")]),s._v(" "),n("span",{staticClass:"d-block d-md-none d-sm-none d-lg-none"},[s._v(".col-4")])])])])]),s._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"grid-section"},[n("div",{staticClass:"row"},[n("label",{staticClass:"col-12"},[s._v("xs Grid")]),s._v(" "),n("div",{staticClass:"col-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-4")])])]),s._v(" "),n("div",{staticClass:"col-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-4")])])]),s._v(" "),n("div",{staticClass:"col-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-4")])])])])])]),s._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"grid-section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("label",[s._v("sm Grid")])]),s._v(" "),n("div",{staticClass:"col-sm-2"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-sm-2")])])]),s._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:" text-center grid-property "},[n("span",[s._v(".col-sm-4")])])]),s._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-sm-6")])])])])])]),s._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"grid-section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("label",[s._v("md Grid")])]),s._v(" "),n("div",{staticClass:"col-md-2"},[n("div",{staticClass:" text-center grid-property "},[n("span",[s._v(".col-md-2")])])]),s._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-md-4")])])]),s._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-md-6")])])])])])]),s._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"grid-section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("label",[s._v("lg Grid")])]),s._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:" text-center grid-property "},[n("span",[s._v(".col-lg-4")])])]),s._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-lg-4")])])]),s._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"text-center grid-property "},[n("span",[s._v(".col-lg-4")])])])])])])])])],1)]),s._v(" "),n("div",{staticClass:"background-overlay"})])}),[],!1,null,null,null);t.default=d.exports},426:function(s,t,n){var i=n(431);"string"==typeof i&&(i=[[s.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(31)(i,a);i.locals&&(s.exports=i.locals)},430:function(s,t,n){"use strict";var i=n(426);n.n(i).a},431:function(s,t,n){(s.exports=n(30)(!1)).push([s.i,"\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n",""])},433:function(s,t,n){"use strict";var i={name:"card",data:function(){return{show:!0,isActive:!1}},methods:{hide:function(){this.isActive=!0}},mounted:function(){},props:{title:{required:!1}},destroy:function(){}},a=(n(430),n(21)),d=Object(a.a)(i,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"card",class:{dNone:s.isActive}},[n("div",{staticClass:"card-header"},[n("h3",{staticClass:"card-title",domProps:{innerHTML:s._s(s.title)}}),s._v(" "),n("span",{staticClass:"float-right"},[n("i",{staticClass:"fa fa-fw ti-angle-up",class:{rotate:s.show},on:{click:function(t){s.show=!s.show}}}),s._v(" "),n("i",{staticClass:"fa fa-fw ti-close removecard",on:{click:s.hide}})])]),s._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"show"}],staticClass:"card-body"},[s._t("default")],2)])}),[],!1,null,null,null);t.a=d.exports},438:function(s,t){s.exports="/images/brick-wall.png?effad1520fc39d8897385d7004d2dbf4"},805:function(s,t,n){var i=n(1543);"string"==typeof i&&(i=[[s.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(31)(i,a);i.locals&&(s.exports=i.locals)}}]);