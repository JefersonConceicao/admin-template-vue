(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1378:function(t,n,a){"use strict";var s=a(734);a.n(s).a},1379:function(t,n,a){(n=t.exports=a(30)(!1)).i(a(975),""),n.i(a(976),""),n.push([t.i,"\n\n",""])},1380:function(t,n,a){"use strict";var s=a(735);a.n(s).a},1381:function(t,n,a){(t.exports=a(30)(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* to do list */\n.todoside-menu a:hover{\n    background-color: #f5f5f5;\n}\n.todoside-menu a{\n    font-size: 15px;\n    color: #333;\n}\n.faExclamationCircle::before{\n    content: \"imp\";\n    font-size: 14px;\n    top:-8px;\n    position: relative;\n}\n.tasksearch,.tasks-list{\n    box-shadow:0px 0px 1px 1px #cfcfcf;\n}\n.todo .box-shadow{\n    box-shadow: 0px 0px 1px 1px #cfcfcf;\n}\n.tasks-table-list{\n    max-height: 80vh;\n    margin-bottom: 10px;\n}\n.todoside-menu .side-content .active{\n    color: #66cc99;\n    font-weight: 600;\n}\n.table td .custom-control.custom-checkbox{\n    margin-top: 3px;\n}\n.custom-control-inline{\n    margin-right: 0;\n}\n.task-type{\n    border-bottom: 1px solid #eee;\n}\n.textDanger{\n    /*color: #ff6666;*/\n    font-weight: 600;\n}\n.textDanger::before{\n    content: '.';\n    font-size: 42px;\n    line-height: 5px;\n    font-weight: 900;\n    top: -3px;\n    left: -5px;\n    position: relative;\n    color: #ff6666;\n}\n.tasks-my-scrollbar{\n    width: 100%;\n    max-height:450px;\n}\n.tasks-scroll-me{\n    background:#fff;\n    min-width: 992px;\n}\n",""])},2208:function(t,n,a){"use strict";a.r(n);var s=a(974),e={name:"blank",data:function(){return{modalTask:!1,newtaskname:"",newtaskdesc:"",newtaskdeadline:"",newimportant:"",newstatus:"",tasks:[{tasktitle:"Task-1",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:!0,status:"pending"},{tasktitle:"Task-2",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:!0,status:"pending"},{tasktitle:"Task-3",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:!1,status:"completed"},{tasktitle:"Task-4",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true",status:"completed"},{tasktitle:"Task-5",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true",status:"completed"},{tasktitle:"Task-6",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true",status:"pending"},{tasktitle:"Task-7",taskdescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?",taskdeadline:"14/04/2018",important:"true",status:"pending"}],edittitle:"",editdescription:"",editdeadline:"",important:"",editnewstatus:"",taskid:"",search:"",options:{height:"1000px"}}},components:{VueScrollbar:a.n(s).a},mounted:function(){},methods:{addTask:function(){this.tasks.push({tasktitle:this.newtaskname,taskdescription:this.newtaskdesc,taskdeadline:this.newtaskdeadline,important:this.newimportant,status:"pending"}),this.newtaskname="",this.newtaskdesc="",this.newtaskdeadline="",this.newimportant=!1,this.newstatus="",this.modalTask=!1},updateModal:function(t){this.tasks[t].tasktitle=this.edittitle,this.tasks[t].taskdescription=this.editdescription,this.tasks[t].taskdeadline=this.editdeadline,this.tasks[t].status=this.newstatus,this.$refs.editmodal.hide(),this.modalTask=!1},editModal:function(t){this.edittitle=this.tasks[t].tasktitle,this.editdescription=this.tasks[t].taskdescription,this.editdeadline=this.tasks[t].taskdeadline,this.editnewstatus=this.tasks[t].status,this.taskid=t,this.$refs.editmodal.show()},deleteModal:function(t){this.tasks.splice(t,1)}},computed:{allTasks:function(){var t=this;return this.tasks.filter((function(n){return n.tasktitle.toLowerCase().indexOf(t.search.toLowerCase())>=0}))}}},i=(a(1378),a(1380),a(21)),o=Object(i.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"todo mt-3"},[a("div",{staticClass:"todoside-menu"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-5 col-lg-3"},[a("div",{staticClass:"side-content "},[a("div",{staticClass:"box-shadow"},[a("h1",{staticClass:"p-3 mb-0"},[t._v("Todo's")]),t._v(" "),a("div",{staticClass:"p-3"},[a("button",{staticClass:"btn btn-primary btn-block",on:{click:function(n){t.modalTask=!t.modalTask}}},[t._v("Add Task")])]),t._v(" "),a("b-modal",{attrs:{"hide-footer":!0,title:"Add Your Task Here"},model:{value:t.modalTask,callback:function(n){t.modalTask=n},expression:"modalTask"}},[a("b-container",{attrs:{fluid:""}},[a("form",[a("label",{staticClass:"mt-2",attrs:{for:"tasktitle"}},[t._v("Task Title")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newtaskname,expression:"newtaskname"}],staticClass:"form-control",attrs:{type:"text",id:"tasktitle",placeholder:"Enter Title"},domProps:{value:t.newtaskname},on:{input:function(n){n.target.composing||(t.newtaskname=n.target.value)}}}),t._v(" "),a("label",{staticClass:"mt-2",attrs:{for:"taskdesc"}},[t._v("Task Description")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newtaskdesc,expression:"newtaskdesc"}],staticClass:"form-control",attrs:{name:"description",placeholder:"Add description here",rows:"5",id:"taskdesc"},domProps:{value:t.newtaskdesc},on:{input:function(n){n.target.composing||(t.newtaskdesc=n.target.value)}}}),t._v(" "),a("label",{staticClass:"mt-2",attrs:{for:"deadline"}},[t._v("Deadline")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newtaskdeadline,expression:"newtaskdeadline"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Deadline",id:"deadline"},domProps:{value:t.newtaskdeadline},on:{input:function(n){n.target.composing||(t.newtaskdeadline=n.target.value)}}}),t._v(" "),a("label",[a("b-form-checkbox",{staticClass:"mt-2",model:{value:t.newimportant,callback:function(n){t.newimportant=n},expression:"newimportant"}}),t._v(" Click if this a important task")],1),t._v(" "),a("b-btn",{staticClass:"float-right mt-2",attrs:{variant:"primary"},on:{click:t.addTask}},[t._v("\n                                            Submit\n                                        ")])],1)])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)],1)])]),t._v(" "),a("div",{staticClass:"col-12 col-md-7 col-lg-9"},[a("div",{staticClass:"tasksearch p-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mt-4 mb-4",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search},on:{input:function(n){n.target.composing||(t.search=n.target.value)}}})]),t._v(" "),a("div",{staticClass:"tasks-list mt-5 mb-3"},[t._m(6),t._v(" "),a("vue-scrollbar",{ref:"Scrollbar",attrs:{classes:"tasks-my-scrollbar"}},[a("div",{staticClass:"tasks-scroll-me"},[a("div",{staticClass:"tasks-table-list table-responsive"},[a("table",{staticClass:"table"},t._l(t.allTasks,(function(n,s){return a("tr",[a("td",[a("b-form-checkbox")],1),t._v(" "),a("td",[a("h5",{class:{textDanger:1==n.important}},[t._v(t._s(n.tasktitle))]),t._v(" "),a("p",[t._v(t._s(n.taskdescription))]),t._v(" "),a("span",{staticClass:"text-danger"},[t._v("Deadline:")]),t._v(" "+t._s(n.taskdeadline)+"\n                                                "),a("span",{staticClass:"float-right mr-5"},[a("span",{staticClass:"text-danger"},[t._v("Status:")]),t._v(" "+t._s(n.status))])]),t._v(" "),a("td",{staticClass:"align-center"},[a("span",{staticClass:"fa fa-edit",on:{click:function(n){return t.editModal(s)}}})]),t._v(" "),a("td",{staticClass:"align-center"},[a("span",{staticClass:"fa fa-trash-o",on:{click:function(n){return t.deleteModal(s)}}})])])})),0)])])])],1)])])])]),t._v(" "),a("b-modal",{ref:"editmodal",attrs:{"hide-footer":"",title:"Using Component Methods"}},[a("div",{staticClass:"d-block"},[a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.edittitle,expression:"edittitle"}],staticClass:"form-control mt-3",attrs:{type:"text",placeholder:"Enter title"},domProps:{value:t.edittitle},on:{input:function(n){n.target.composing||(t.edittitle=n.target.value)}}}),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editdescription,expression:"editdescription"}],staticClass:"form-control mt-3",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.editdescription},on:{input:function(n){n.target.composing||(t.editdescription=n.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editdeadline,expression:"editdeadline"}],staticClass:"form-control mt-3",attrs:{type:"email",placeholder:"Enter deadline"},domProps:{value:t.editdeadline},on:{input:function(n){n.target.composing||(t.editdeadline=n.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newstatus,expression:"newstatus"}],staticClass:"form-control mt-3",attrs:{id:"dropdown"},on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.newstatus=n.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Status")]),t._v(" "),a("option",[t._v("Pending")]),t._v(" "),a("option",[t._v("Completed")])])])]),t._v(" "),a("b-btn",{staticClass:"mt-3 text-white",attrs:{variant:"success",block:""},on:{click:function(n){return t.updateModal(t.taskid)}}},[t._v("Update")]),t._v(" "),a("b-btn",{staticClass:"mt-3 text-white",attrs:{variant:"danger",block:""}},[t._v("Cancel")])],1),t._v(" "),a("b-modal",{ref:"deletemodal",attrs:{"hide-footer":"",title:"Using Component Methods"}},[a("div",{staticClass:"d-block text-center"},[a("h3",[t._v("Are you sure you want to delete modal")])]),t._v(" "),a("b-btn",{staticClass:"mt-3 text-danger",attrs:{variant:"outline-danger",block:""}},[t._v("Yes")]),t._v(" "),a("b-btn",{staticClass:"mt-3 text-primary",attrs:{variant:"outline-primary",block:""}},[t._v("No")])],1)],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"alltasks border-bottom border-secondary d-block p-3 active",attrs:{href:"#/task"}},[n("i",{staticClass:"fa fa-tasks",attrs:{"aria-hidden":"true"}}),this._v("  All Tasks")])},function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"today d-block p-3",attrs:{href:"#/task"}},[n("i",{staticClass:"fa fa-list-ol",attrs:{"aria-hidden":"true"}}),this._v("  Today's Tasks (10)")])},function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"needaction d-block p-3",attrs:{href:"#/task"}},[n("i",{staticClass:"fa fa-reply",attrs:{"aria-hidden":"true"}}),this._v("  Action Needed Taks (25)")])},function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"important d-block p-3",attrs:{href:"#/task"}},[n("i",{staticClass:"fa fa-exclamation-circle",attrs:{"aria-hidden":"true"}}),this._v("  Important Tasks (13)")])},function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"pending d-block p-3",attrs:{href:"#/task"}},[n("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),this._v("  Pending Taks (15)")])},function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"deleted d-block p-3",attrs:{href:"#/task"}},[n("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}}),this._v("  Deleted Tasks")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"task-type p-3"},[n("h4",[this._v("All Tasks")])])}],!1,null,null,null);n.default=o.exports},734:function(t,n,a){var s=a(1379);"string"==typeof s&&(s=[[t.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};a(31)(s,e);s.locals&&(t.exports=s.locals)},735:function(t,n,a){var s=a(1381);"string"==typeof s&&(s=[[t.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};a(31)(s,e);s.locals&&(t.exports=s.locals)}}]);