(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1381:function(t,e,a){"use strict";var n=a(736);a.n(n).a},1382:function(t,e,a){(e=t.exports=a(30)(!1)).i(a(974),""),e.i(a(975),""),e.push([t.i,"\n/*The Wrapper*/\n\n\n\n",""])},1383:function(t,e,a){"use strict";var n=a(737);a.n(n).a},1384:function(t,e,a){(t.exports=a(30)(!1)).push([t.i,"\n.search[data-v-dddb2426]{\n    border: 1px solid #bdb3b3;\n}\n.contact-profile[data-v-dddb2426]{\n    width:50px;\n    height: 50px;\n}\n.box-shadow[data-v-dddb2426]{\n    box-shadow: 0px 0px 1px 1px #cfcfcf;\n}\n.contact-pic[data-v-dddb2426]{\n    width: 50px;\n    height: 50px;\n}\n.table td[data-v-dddb2426]{\n    padding: 16px;\n    vertical-align: middle;\n}\n.contacts-box .custom-control-inline[data-v-dddb2426]{\n    margin-right: 0;\n}\n.custom-control-label[data-v-dddb2426]::before{\n    width: 100px;\n    height: 100px;\n}\n.contact-page[data-v-dddb2426]{\n    font-size: 14px;\n}\n.options a[data-v-dddb2426]:hover,.options2 a[data-v-dddb2426]:hover{\n    background-color: #eee;\n}\n.bg-title[data-v-dddb2426]{\n    background-color: #f5f5f5;\n}\n.options .active[data-v-dddb2426]{\n    background-color: #eee;\n    color: #66cc99 !important;\n    font-weight: 600;\n}\n.custom-control-inline[data-v-dddb2426]{\n    margin-right: 0;\n}\n.total-contacts[data-v-dddb2426]{\n    border-bottom: 1px solid #eee;\n}\n",""])},1385:function(t,e,a){"use strict";var n=a(738);a.n(n).a},1386:function(t,e,a){(t.exports=a(30)(!1)).push([t.i,"\n.my-scrollbar{\n    width: 100%;\n    /*min-width: 300px;*/\n    /*max-height: 450px;*/\n}\n.scroll-me{\n    background:#fff;\n    min-width: 992px;\n}\n",""])},2206:function(t,e,a){"use strict";a.r(e);var n=a(13),o=a.n(n),i=a(973),s=a.n(i);o.a.use(s.a);var r={name:"blank",data:function(){return{modalShow:!1,newname:"",newemail:"",newnumber:"",newlocation:"",newrole:"",contacts:[{name:"Jon",img:a(233),email:"jon@gmail.com",contact_num:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Doe",img:a(436),email:"doe@gmail.com",contact_num:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Addison",img:a(437),email:"addison@gmail.com",contact_num:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Jon",img:a(440),email:"jon@gmail.com",contact_num:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Doe",img:a(233),email:"jon@gmail.com",contact_num:"0123456789",role:"Web developer",location:"Hyderabad"},{name:"Jon",img:a(435),email:"jon@gmail.com",contact_num:"0123456789",role:"Web developer",location:"Hyderabad"}],editname:"",editemail:"",editnumber:"",editlocation:"",editrole:"",contactid:"",search:"",userImage:""}},components:{VueScrollbar:s.a},mounted:function(){},methods:{addContact:function(){this.contacts.push({name:this.newname,email:this.newemail,contact_num:this.newnumber,location:this.newlocation,role:this.newrole,img:this.userImage}),this.newname="",this.newemail="",this.newnumber="",this.newlocation="",this.newrole="",this.modalShow=!1},deletecontact:function(t){this.contacts.splice(t,1)},editcontact:function(t){this.editname=this.contacts[t].name,this.editemail=this.contacts[t].email,this.editnumber=this.contacts[t].contact_num,this.editlocation=this.contacts[t].location,this.editrole=this.contacts[t].role,this.contactid=t,this.$refs.editcontact.show()},updateContact:function(t){this.contacts[t].name=this.editname,this.contacts[t].email=this.editemail,this.contacts[t].contact_num=this.editnumber,this.contacts[t].location=this.editlocation,this.contacts[t].role=this.editrole,this.$refs.editcontact.hide(),this.modalTask=!1},cancel:function(){this.modalTask=!1},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=new FileReader,a=this;e.onload=function(t){a.userImage=t.target.result},e.readAsDataURL(t)}},computed:{allContacts:function(){var t=this;return this.contacts.filter((function(e){return e.name.toLowerCase().indexOf(t.search.toLowerCase())>=0}))}}},c=(a(1381),a(1383),a(1385),a(21)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"contact-page"},[n("div",{staticClass:"container-fluid bg-white"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"p-5 box-shadow mt-3"},[n("h4",[t._m(0),t._v(" "),n("span",{staticClass:"float-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search form-control pl-2 pr-2",attrs:{type:"search",placeholder:"Search here"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])])])])]),t._v(" "),n("div",{staticClass:"container-fluid bg-white mt-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-4 col-lg-3"},[n("div",{staticClass:"box-shadow mt-4"},[n("div",{staticClass:"border-bottom border-secondary p-3"},[n("img",{staticClass:"contact-profile d-inline-block rounded-circle",attrs:{src:a(233),alt:"user profile"}}),t._v(" "),n("p",{staticClass:"d-inline-block"},[t._v("  Jon Doe")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),n("button",{staticClass:"btn btn-primary mt-3",on:{click:function(e){t.modalShow=!t.modalShow}}},[t._v("Add New Contact")]),t._v(" "),n("b-modal",{attrs:{"hide-footer":!0,title:"Add your contact here"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[n("b-container",{attrs:{fluid:""}},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newname,expression:"newname"}],staticClass:"form-control mt-3",attrs:{type:"text",placeholder:"Enter name"},domProps:{value:t.newname},on:{input:function(e){e.target.composing||(t.newname=e.target.value)}}}),t._v(" "),n("input",{staticClass:"btn btn-primary mt-3",attrs:{type:"file"},on:{change:t.onFileChange}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newnumber,expression:"newnumber"}],staticClass:"form-control mt-3",attrs:{type:"number",placeholder:"Enter phone number"},domProps:{value:t.newnumber},on:{input:function(e){e.target.composing||(t.newnumber=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newemail,expression:"newemail"}],staticClass:"form-control mt-3",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.newemail},on:{input:function(e){e.target.composing||(t.newemail=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newrole,expression:"newrole"}],staticClass:"form-control mt-3",attrs:{type:"text",placeholder:"Enter role"},domProps:{value:t.newrole},on:{input:function(e){e.target.composing||(t.newrole=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newlocation,expression:"newlocation"}],staticClass:"form-control mt-3 mb-3",attrs:{type:"text",placeholder:"Location"},domProps:{value:t.newlocation},on:{input:function(e){e.target.composing||(t.newlocation=e.target.value)}}}),t._v(" "),n("b-btn",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:t.addContact}},[t._v("\n                                            Submit\n                                        ")])],1)])],1)],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-8 col-lg-9"},[n("div",{staticClass:"box-shadow mt-4"},[n("div",{staticClass:"contacts-box mb-3"},[t._m(3),t._v(" "),n("vue-scrollbar",{ref:"Scrollbar",attrs:{classes:"my-scrollbar"}},[n("div",{staticClass:"scroll-me"},[n("div",{staticClass:"table-responsive mb-3 tablescroll"},[n("table",{staticClass:"table"},t._l(t.allContacts,(function(e,a){return n("tr",[n("td",[n("b-form-checkbox")],1),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[n("img",{staticClass:"contact-pic rounded-circle",attrs:{src:e.img,alt:"profile"}})]),t._v(" "),n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.contact_num))]),t._v(" "),n("td",[t._v(t._s(e.role))]),t._v(" "),n("td",[t._v(t._s(e.location))]),t._v(" "),n("td",[n("span",{staticClass:"fa fa-edit",on:{click:function(e){return t.editcontact(a)}}})]),t._v(" "),n("td",[n("span",{staticClass:"fa fa-trash-o",on:{click:function(e){return t.deletecontact(a)}}})])])})),0)])])])],1)])])])])])])]),t._v(" "),n("b-modal",{ref:"editcontact",attrs:{"hide-footer":"",title:"Using Component Methods"}},[n("div",{staticClass:"d-block"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editname,expression:"editname"}],staticClass:"form-control mt-3",attrs:{type:"text",placeholder:"Enter name"},domProps:{value:t.editname},on:{input:function(e){e.target.composing||(t.editname=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editemail,expression:"editemail"}],staticClass:"form-control mt-3",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.editemail},on:{input:function(e){e.target.composing||(t.editemail=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editnumber,expression:"editnumber"}],staticClass:"form-control mt-3",attrs:{type:"number",placeholder:"Enter number"},domProps:{value:t.editnumber},on:{input:function(e){e.target.composing||(t.editnumber=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editrole,expression:"editrole"}],staticClass:"form-control mt-3 mb-3",attrs:{type:"text",placeholder:"role"},domProps:{value:t.editrole},on:{input:function(e){e.target.composing||(t.editrole=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editlocation,expression:"editlocation"}],staticClass:"form-control mt-3 mb-3",attrs:{type:"text",placeholder:"role"},domProps:{value:t.editlocation},on:{input:function(e){e.target.composing||(t.editlocation=e.target.value)}}})])]),t._v(" "),n("b-btn",{staticClass:"mt-3 text-white",attrs:{variant:"success",block:""},on:{click:function(e){return t.updateContact(t.contactid)}}},[t._v("Update")]),t._v(" "),n("b-btn",{staticClass:"mt-3 text-white",attrs:{variant:"danger",block:""},on:{click:t.cancel}},[t._v("Cancel")])],1),t._v(" "),n("b-modal",{ref:"deletecontact",attrs:{"hide-footer":"",title:"Using Component Methods"}},[n("div",{staticClass:"d-block text-center"},[n("h3",[t._v("Are you sure you want to delete modal")])]),t._v(" "),n("b-btn",{staticClass:"mt-3 text-danger",attrs:{variant:"outline-danger",block:""}},[t._v("Yes")]),t._v(" "),n("b-btn",{staticClass:"mt-3 text-primary",attrs:{variant:"outline-primary",block:""}},[t._v("No")])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fa fa-address-book-o"}),this._v(" Contacts\n                        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"options border-bottom border-secondary"},[e("a",{staticClass:"p-3 d-block text-dark active",attrs:{href:"#/contacts"}},[this._v("All Contacts")]),this._v(" "),e("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#/contacts"}},[this._v("Frequently contacted ")]),this._v(" "),e("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#/contacts"}},[this._v("Starred Contacts")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"options2"},[a("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#/contacts"}},[t._v("Groups")]),t._v(" "),a("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#/contacts"}},[t._v("Friends")]),t._v(" "),a("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#/contacts"}},[t._v("Clients")]),t._v(" "),a("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#/contacts"}},[t._v("Recent Workers")]),t._v(" "),a("a",{staticClass:"p-3 d-block text-dark",attrs:{href:"#/contacts"}},[t._v("New Group")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"total-contacts p-5 "},[e("span",[this._v("All Contacts(25)")])])}],!1,null,"dddb2426",null);e.default=l.exports},435:function(t,e){t.exports="/laravel_vue/images/avatar.jpg?ac60ef718e8f9765886e30ee907fea17"},436:function(t,e){t.exports="/laravel_vue/images/avatar2.jpg?ac60ef718e8f9765886e30ee907fea17"},437:function(t,e){t.exports="/laravel_vue/images/avatar3.jpg?ac60ef718e8f9765886e30ee907fea17"},440:function(t,e){t.exports="/laravel_vue/images/avatar4.jpg?ac60ef718e8f9765886e30ee907fea17"},736:function(t,e,a){var n=a(1382);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(31)(n,o);n.locals&&(t.exports=n.locals)},737:function(t,e,a){var n=a(1384);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(31)(n,o);n.locals&&(t.exports=n.locals)},738:function(t,e,a){var n=a(1386);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(31)(n,o);n.locals&&(t.exports=n.locals)}}]);