(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1496:function(t,s,a){"use strict";var e=a(781);a.n(e).a},1497:function(t,s,a){(t.exports=a(30)(!1)).push([t.i,'.alert-message[data-v-6e28a89b] {\n    margin      : 13px 0;\n    padding     : 20px;\n    border-left : 3px solid #eee;\n}\n.alert-message h4[data-v-6e28a89b] {\n    margin-top    : 0;\n    margin-bottom : 5px;\n}\n.alert-message p[data-v-6e28a89b]:last-child {\n    margin-bottom : 0;\n}\n.alert-message code[data-v-6e28a89b] {\n    background-color : #fff;\n    border-radius    : 3px;\n}\n.alert-message-success[data-v-6e28a89b] {\n    background-color : #F4FDF0;\n    border-color     : #22d69d;\n}\n.alert-message-success h4[data-v-6e28a89b] {\n    color : #22d69d;\n}\n.alert-message-danger[data-v-6e28a89b] {\n    background-color : #fdf7f7;\n    border-color     : #fb8678;\n}\n.alert-message-danger h4[data-v-6e28a89b] {\n    color : #fb8678;\n}\n.alert-message-warning[data-v-6e28a89b] {\n    background-color : #fcf8f2;\n    border-color     : #ffb65f;\n}\n.alert-message-warning h4[data-v-6e28a89b] {\n    color : #ffb65f;\n}\n.alert-message-info[data-v-6e28a89b] {\n    background-color : #f4f8fa;\n    border-color     : #4fc1e9;\n}\n.alert-message-info h4[data-v-6e28a89b] {\n    color : #4fc1e9;\n}\n.alert-message-default[data-v-6e28a89b] {\n    background-color : #EEE;\n    border-color     : #dcdcdc;\n}\n.alert-message-notice[data-v-6e28a89b] {\n    background-color : #FCFCDD;\n    border-color     : #BDBD89;\n}\n.alert-message-notice h4[data-v-6e28a89b] {\n    color : #444;\n}\n/*list styles*/\n.styled-ul[data-v-6e28a89b] {\n    list-style: disc;\n}\n.styled-ul li ul[data-v-6e28a89b] {\n    list-style-type: circle;\n}\n/*breadcrumbs*/\n.breadcrumb1 > li + li[data-v-6e28a89b]:before {\n    content: "\\BB";\n}\n.breadcrumb2 > li + li[data-v-6e28a89b]:before {\n    content: "\\203A";\n}\n.breadcrumb3 > li + li[data-v-6e28a89b]:before {\n    content: "\\2013   ";\n}\n/*progress bar*/\n.box-body .progress[data-v-6e28a89b] {\n    margin-top :4px;\n}\n/*card*/\n.card[data-v-6e28a89b]{\n    margin-bottom: 2rem;\n}',""])},2217:function(t,s,a){"use strict";a.r(s);var e={name:"general_components",components:{card:a(433).a},data:function(){return{items:[{text:"Dashboard",href:"#"},{text:"UI Features",href:"#"},{text:"General Components",active:!0}]}},mounted:function(){},destroyed:function(){}},i=(a(1496),a(21)),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("card",{attrs:{title:"<i class='ti-layers'></i> Tabbed card"}},[a("b-tabs",[a("b-tab",{attrs:{title:"Tab 1",active:""}},[a("br"),t._v(" "),a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                            When an unknown printer took a galley of type and scrambled it to make a\n                            type specimenbook.\n                        ")]),t._v(" "),a("p",[t._v("It has survived not only five centuries, but also the leap into electronic\n                            typesetting, remaining essentially unchanged.\n                        ")]),t._v(" "),a("p",[t._v("It was popularised in the 1960s with the release of Letraset sheets\n                            containing Lorem Ipsum passages, and software like Aldus PageMaker.\n                        ")])]),t._v(" "),a("b-tab",{attrs:{title:"Tab 2"}},[a("br"),t._v(" "),a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                            When an unknown printer took a galley of type and scrambled it to make a\n                            type specimenbook.\n                        ")]),t._v(" "),a("p",[t._v("It has survived not only five centuries, but also the leap into electronic\n                            typesetting, remaining essentially unchanged.\n                        ")]),t._v(" "),a("p",[t._v("It was popularised in the 1960s with the release of Letraset sheets\n                            containing Lorem Ipsum passages, and software like Aldus PageMaker.\n                        ")])])],1)],1)],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("card",{attrs:{title:"<i class='ti-menu'></i> Progress Bars"}},[a("div",{staticClass:"box-body"},[a("p",[t._v("Default")]),t._v(" "),a("b-progress",{staticClass:"mb-3",attrs:{value:25,max:100}}),t._v(" "),a("p",[t._v("Striped")]),t._v(" "),a("b-progress",{staticClass:"mb-2",attrs:{value:50,variant:"success",striped:!0}}),t._v(" "),a("p",[t._v("Active")]),t._v(" "),a("b-progress",{staticClass:"mb-3",attrs:{value:75,variant:"danger",animated:!0}})],1)])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("card",{attrs:{title:"<i class='ti-alert'></i> Alerts"}},[a("div",{staticClass:"alert alert-success"},[a("p",{staticClass:"mt-1 mb-1"},[t._v("\n                        Well done! You are reading a default Alert message.\n                    ")])]),t._v(" "),a("div",{staticClass:"alert alert-danger"},[a("strong",[t._v("Oh! You can")]),t._v(" "),a("a",{staticClass:"alert-link",attrs:{href:"#"}},[t._v("\n                        Redirect to me\n                    ")]),t._v(" clicking the link on the Alert.\n                ")]),t._v(" "),a("b-alert",{attrs:{show:"",dismissible:"",variant:"primary"}},[a("strong",[t._v("Heads up!")]),t._v(" You are looking at a Dismissable Alert.\n                ")]),t._v(" "),a("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[t._v("\n                    Hey! You are looking at Dismissable Alert with animation.\n                ")])],1)],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("card",{attrs:{title:" <i class='ti-notepad'></i> Notes"}},[a("div",{staticClass:"alert-message alert-message-success"},[a("h4",[t._v("\n                        Alert Message Success\n                    ")]),t._v(" "),a("p",{staticClass:"fnt_size"},[t._v("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                        Ipsum has been the industry's standard dummy text ever since the 1500s.\n                        "),a("strong",[t._v("\n                            strong message\n                        ")]),t._v(" .\n                    ")])]),t._v(" "),a("div",{staticClass:"alert-message alert-message-default"},[a("h4",[t._v("\n                        Alert Message Default\n                    ")]),t._v(" "),a("p",{staticClass:"fnt_size"},[t._v("\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n                        Ipsum has been the industry's standard dummy text ever since the 1500s.\n                        "),a("strong",[t._v("\n                            strong message\n                        ")]),t._v(" .\n                    ")])])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("card",{attrs:{title:"<i class='ti-settings'></i> Typography Heading"}},[a("div",{staticClass:"box-body text-center"},[a("h1",[t._v("\n                        h1. Bootstrap heading\n                    ")]),t._v(" "),a("h2",[t._v("\n                        h2. Bootstrap heading\n                    ")]),t._v(" "),a("h3",[t._v("\n                        h3. Bootstrap heading\n                    ")]),t._v(" "),a("h4",[t._v("\n                        h4. Bootstrap heading\n                    ")]),t._v(" "),a("h5",[t._v("\n                        h5. Bootstrap heading\n                    ")]),t._v(" "),a("h6",[t._v("\n                        h6. Bootstrap heading\n                    ")])])])],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("card",{attrs:{title:" <i class='ti-menu'></i> Horizontal Description"}},[a("div",{staticClass:"box-body"},[a("dl",{staticClass:"row"},[a("dt",{staticClass:"col-4 text-right"},[t._v("\n                            Description lists\n                        ")]),t._v(" "),a("dd",{staticClass:"col-8"},[t._v("\n                            A description list is perfect for defining terms.\n                        ")]),t._v(" "),a("dt",{staticClass:"col-4 text-right"},[t._v("Question")]),t._v(" "),a("dd",{staticClass:"col-8"},[t._v("\n                            Vestibulum id ligula porta felis euismod semper eget lacinia odio.\n                        ")]),t._v(" "),a("dt",{staticClass:"col-4 text-right"},[t._v("\n                            Progress bar\n                        ")]),t._v(" "),a("dd",{staticClass:"col-8"},[t._v("\n                            Etiam porta sem malesuada magna mollis euismod.\n                        ")]),t._v(" "),a("dt",{staticClass:"col-4 text-right"},[t._v("Answer")]),t._v(" "),a("dd",{staticClass:"col-8"},[t._v("\n                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, justo\n                            sit amet risus.\n                        ")]),t._v(" "),a("dt",{staticClass:"col-4 text-right"},[t._v("\n                            Description lists\n                        ")]),t._v(" "),a("dd",{staticClass:"col-8"},[t._v("\n                            A description list is perfect for defining terms.\n                        ")]),t._v(" "),a("dt",{staticClass:"col-4 text-right"},[t._v("Question")]),t._v(" "),a("dd",{staticClass:"col-8"},[t._v("\n                            Vestibulum id ligula porta felis euismod semper.\n                        ")]),t._v(" "),a("dt",{staticClass:"col-4 text-right"},[t._v("Answer")]),t._v(" "),a("dd",{staticClass:"col-8"},[t._v("\n                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, justo\n                            sit amet risus.\n                        ")])])])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("card",{attrs:{title:"<i class='ti-view-list-alt'></i> Unstyled List"}},[a("div",{staticClass:"box-body"},[a("ul",{staticClass:"list-unstyled"},[a("li",[t._v("\n                            Lorem ipsum dolor sit amet\n                        ")]),t._v(" "),a("li",[t._v("\n                            Consectetur adipiscing elit\n                        ")]),t._v(" "),a("li",[t._v("\n                            Integer molestie lorem at massa\n                        ")]),t._v(" "),a("li",[t._v("\n                            Facilisis in pretium nisl aliquet\n                        ")]),t._v(" "),a("li",[t._v("\n                            Nulla volutpat aliquam velit\n                            "),a("ul",[a("li",[t._v("\n                                    Phasellus iaculis neque\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Purus sodales ultricies\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Vestibulum laoreet porttitor sem\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Ac tristique libero volutpat at\n                                ")])])]),t._v(" "),a("li",[t._v("\n                            Faucibus porta lacus fringilla vel\n                        ")]),t._v(" "),a("li",[t._v("\n                            Aenean sit amet erat nunc\n                        ")]),t._v(" "),a("li",[t._v("\n                            Eget porttitor lorem\n                        ")])])])])],1),t._v(" "),a("div",{staticClass:"col-md-4"},[a("card",{attrs:{title:"<i class='ti-list'></i> Unordered List"}},[a("div",{staticClass:"box-body"},[a("ul",{staticClass:"styled-ul"},[a("li",[t._v("\n                            Lorem ipsum dolor sit amet\n                        ")]),t._v(" "),a("li",[t._v("\n                            Consectetur adipiscing elit\n                        ")]),t._v(" "),a("li",[t._v("\n                            Integer molestie lorem at massa\n                        ")]),t._v(" "),a("li",[t._v("\n                            Facilisis in pretium nisl aliquet\n                        ")]),t._v(" "),a("li",[t._v("\n                            Nulla volutpat aliquam velit\n                            "),a("ul",[a("li",[t._v("\n                                    Phasellus iaculis neque\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Purus sodales ultricies\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Vestibulum laoreet porttitor sem\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Ac tristique libero volutpat at\n                                ")])])]),t._v(" "),a("li",[t._v("\n                            Faucibus porta lacus fringilla vel\n                        ")]),t._v(" "),a("li",[t._v("\n                            Aenean sit amet erat nunc\n                        ")]),t._v(" "),a("li",[t._v("\n                            Eget porttitor lorem\n                        ")])])])])],1),t._v(" "),a("div",{staticClass:"col-md-4"},[a("card",{attrs:{title:" <i class='ti-list-ol'></i> Ordered Lists"}},[a("div",{staticClass:"box-body"},[a("ol",[a("li",[t._v("\n                            Lorem ipsum dolor sit amet\n                        ")]),t._v(" "),a("li",[t._v("\n                            Consectetur adipiscing elit\n                        ")]),t._v(" "),a("li",[t._v("\n                            Integer molestie lorem at massa\n                        ")]),t._v(" "),a("li",[t._v("\n                            Facilisis in pretium nisl aliquet\n                        ")]),t._v(" "),a("li",[t._v("\n                            Nulla volutpat aliquam velit\n                            "),a("ol",[a("li",[t._v("\n                                    Phasellus iaculis neque\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Purus sodales ultricies\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Vestibulum laoreet porttitor sem\n                                ")]),t._v(" "),a("li",[t._v("\n                                    Ac tristique libero volutpat at\n                                ")])])]),t._v(" "),a("li",[t._v("\n                            Faucibus porta lacus fringilla vel\n                        ")]),t._v(" "),a("li",[t._v("\n                            Aenean sit amet erat nunc\n                        ")]),t._v(" "),a("li",[t._v("\n                            Eget porttitor lorem\n                        ")])])])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("card",{attrs:{title:"<i class='ti-angle-double-right'></i> Breadcrumbs"}},[a("div",{staticClass:"bs-example"},[a("b-breadcrumb",{attrs:{items:t.items}}),t._v(" "),a("ul",{staticClass:"breadcrumb breadcrumb1 brdr_mrg"},[a("li",{staticClass:"next1"},[a("a",{attrs:{href:"#"}},[t._v("Dashboard")])]),t._v(" "),a("li",{staticClass:"next1"},[a("a",{attrs:{href:"#"}},[t._v("Charts")])]),t._v(" "),a("li",[t._v("\n                            Flot Charts\n                        ")])]),t._v(" "),a("ul",{staticClass:"breadcrumb breadcrumb2 brdr_mrg",staticStyle:{"margin-bottom":"20px"}},[a("li",{staticClass:"next2"},[a("a",{attrs:{href:"#"}},[t._v("Dashboard")])]),t._v(" "),a("li",{staticClass:"next2"},[a("a",{attrs:{href:"#"}},[t._v("Tables")])]),t._v(" "),a("li",[t._v("\n                            Data Tables\n                        ")])]),t._v(" "),a("ul",{staticClass:"breadcrumb breadcrumb3 brdr_mrg",staticStyle:{"margin-bottom":"15px"}},[a("li",{staticClass:"next"},[a("a",{attrs:{href:"#"}},[t._v("Dashboard")])]),t._v(" "),a("li",{staticClass:"next1"},[a("a",{attrs:{href:"#"}},[t._v("Forms")])]),t._v(" "),a("li",[t._v("\n                            Form Elements\n                        ")])])],1)])],1)])])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header bg-primary"},[a("h3",{staticClass:"card-title text-white"},[t._v("\n                        Card Primary\n                    ")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])])])]),t._v(" "),a("div",{staticClass:"col-sm-6 col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header  bg-success"},[a("h3",{staticClass:"card-title text-white"},[t._v("\n                        Card Success\n                    ")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])])])]),t._v(" "),a("div",{staticClass:"col-sm-6 col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header bg-warning"},[a("h3",{staticClass:"card-title text-white"},[t._v("\n                        Card Warning\n                    ")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])])])]),t._v(" "),a("div",{staticClass:"col-sm-6 col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header bg-danger"},[a("h3",{staticClass:"card-title text-white"},[t._v("\n                        Card Danger\n                    ")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])])])]),t._v(" "),a("div",{staticClass:"col-sm-6 col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header bg-info text-white"},[a("h3",{staticClass:"card-title"},[t._v("Card Info")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])])])]),t._v(" "),a("div",{staticClass:"col-sm-6 col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title"},[t._v("\n                        Card Default\n                    ")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])])])])])}],!1,null,"6e28a89b",null);s.default=n.exports},426:function(t,s,a){var e=a(431);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(31)(e,i);e.locals&&(t.exports=e.locals)},430:function(t,s,a){"use strict";var e=a(426);a.n(e).a},431:function(t,s,a){(t.exports=a(30)(!1)).push([t.i,"\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n",""])},433:function(t,s,a){"use strict";var e={name:"card",data:function(){return{show:!0,isActive:!1}},methods:{hide:function(){this.isActive=!0}},mounted:function(){},props:{title:{required:!1}},destroy:function(){}},i=(a(430),a(21)),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card",class:{dNone:t.isActive}},[a("div",{staticClass:"card-header"},[a("h3",{staticClass:"card-title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),a("span",{staticClass:"float-right"},[a("i",{staticClass:"fa fa-fw ti-angle-up",class:{rotate:t.show},on:{click:function(s){t.show=!t.show}}}),t._v(" "),a("i",{staticClass:"fa fa-fw ti-close removecard",on:{click:t.hide}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,null,null);s.a=n.exports},781:function(t,s,a){var e=a(1497);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(31)(e,i);e.locals&&(t.exports=e.locals)}}]);