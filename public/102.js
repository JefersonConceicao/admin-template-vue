(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{2107:function(t,e,a){"use strict";var n=a(921);a.n(n).a},2108:function(t,e,a){(t.exports=a(30)(!1)).push([t.i,"\n.user-list .btn:active{\n    color: #fff !important;\n}\n",""])},2239:function(t,e,a){"use strict";a.r(e);var n={name:"users_list",components:{datatable:a(963).a},data:function(){return{tableData:[],columndata:[{label:"ID",field:"id",numeric:!0,html:!1},{label:"Name",field:"name",numeric:!1,html:!1},{label:"Email",field:"email",numeric:!1,html:!1},{label:"Age",field:"age",numeric:!0,html:!1},{label:"Status",field:"status",numeric:!1,html:!1},{label:"Actions",field:"action",numeric:!1,html:!0}]}},mounted:function(){var t=this;this.tableData=[{id:16023,name:"Kassaundra Shiffman",email:"LStruble@tempor.com",age:22,status:"Deactivated"},{id:16024,name:"Helena Zensen",email:"BTrautman@magna.com",age:33,status:"Deactivated"},{id:16025,name:"Gautam Nye",email:"SThomad@turpis.ly",age:35,status:"Deactivated"},{id:16026,name:"Wichaya Wagner",email:"NLindsay@odio.org",age:55,status:"Deactivated"},{id:16027,name:"Dawn Devereaux",email:"NStair@ipsum.net",age:51,status:"Deactivated"},{id:16028,name:"Marcus Wray",email:"SPointelin@amet.com",age:23,status:"Activated"},{id:16029,name:"Freddy Meng",email:"SEtheridge@non.ly",age:32,status:"Deactivated"},{id:16030,name:"Culveretta Gilberto",email:"SGlynn@tempor.com",age:58,status:"Activated"},{id:16031,name:"Rogelio Martin",email:"BVollrath@at.io",age:50,status:"Activated"},{id:16032,name:"Suwanto Boyes",email:"THeppelmann@molestie.net",age:36,status:"Activated"},{id:16033,name:"Felicia Kiab",email:"JDauk@tincidunt.org",age:27,status:"Deactivated"},{id:16034,name:"Dwayne Mawyer",email:"AAlagisan@sed.gov",age:26,status:"Deactivated"},{id:16035,name:"Braulio Nixon",email:"SDavid@risus.net",age:36,status:"Deactivated"},{id:16036,name:"Kantanzia Bottone",email:"JHesters@porttitor.net",age:33,status:"Activated"},{id:16037,name:"Geraldine Arnold",email:"DTabor@amet.gov",age:45,status:"Activated"},{id:16038,name:"Chun Pfeifer",email:"BAnglin@molestie.io",age:44,status:"Deactivated"},{id:16039,name:"Felix Brinkley",email:"CJalowiecki@ac.ly",age:28,status:"Activated"},{id:16040,name:"Kay Espinosa",email:"JStafford@sit.net",age:22,status:"Activated"},{id:16041,name:"Clayton Hammant",email:"SParham@rutrum.gov",age:60,status:"Activated"},{id:16042,name:"Kendra Schuessler",email:"JGray@porta.ly",age:33,status:"Deactivated"}],this.tableData.forEach((function(e,a){t.$set(e,"action","<a class='btn btn-info' href='#/edit_user?"+a+"'>Edit</a>")}))}},s=(a(2107),a(21)),i=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row user-list"},[e("div",{staticClass:"col-lg-12"},[e("b-card",{staticClass:"bg-primary-card",attrs:{header:"Registered Users","header-tag":"h4"}},[e("div",{staticClass:"table-responsive"},[e("datatable",{attrs:{title:"",rows:this.tableData,columns:this.columndata}})],1)])],1)])}),[],!1,null,null,null);e.default=i.exports},590:function(t,e,a){var n=a(833);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(31)(n,s);n.locals&&(t.exports=n.locals)},832:function(t,e,a){"use strict";var n=a(590);a.n(n).a},833:function(t,e,a){(t.exports=a(30)(!1)).push([t.i,"\n.pagination[data-v-77ba3697] {\n    margin-top: 12px;\n}\n.sortable[data-v-77ba3697] {\n    cursor: pointer;\n}\n",""])},921:function(t,e,a){var n=a(2108);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(31)(n,s);n.locals&&(t.exports=n.locals)},963:function(t,e,a){"use strict";var n=a(1014),s=a.n(n),i={props:{title:{default:""},columns:{required:!0},rows:{required:!0},perPage:{default:10},sortable:{default:!0},paginate:{default:!0},exportable:{default:!0},pagelen:{type:Array,default:function(){return[5,10,20,50]}}},data:function(){return{currentPage:1,currentPerPage:this.perPage,sortColumn:-1,sortType:"asc",searchInput:""}},mounted:function(){this.sort(0)},methods:{nextPage:function(){this.processedRows.length>this.currentPerPage*this.currentPage&&-1!=this.currentPerPage&&++this.currentPage},previousPage:function(){this.currentPage>1&&--this.currentPage},sort:function(t){this.sortable&&(this.sortColumn===t?this.sortType="asc"===this.sortType?"desc":"asc":(this.sortType="asc",this.sortColumn=t))},click:function(t,e){this.$emit("rowClick",t,e)},exportExcel:function(){var t=this.renderTable().replace(/ /g,"%20"),e=new Date,a=document.createElement("a");a.href="data:application/vnd.ms-excel, "+t,a.download=this.title.toLowerCase().replace(/ /g,"-")+"-"+e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+"-"+e.getHours()+"-"+e.getMinutes()+"-"+e.getSeconds()+".xls",a.click()},renderTable:function(){var t="<table><thead>";t+="<tr>";for(var e=0;e<this.columns.length;e++){t+="<th>",t+=this.columns[e].label,t+="</th>"}t+="</tr>",t+="</thead><tbody>";for(e=0;e<this.rows.length;e++){var a=this.rows[e];t+="<tr>";for(var n=0;n<this.columns.length;n++){var s=this.columns[n];t+="<td>",t+=this.collect(a,s.field),t+="</td>"}t+="</tr>"}return t+="</tbody></table>"},dig:function(t,e){for(var a=t,n=e.split("."),s=0;s<n.length;s++){if(void 0===a)return;a=a[n[s]]}return a},collect:function(t,e){return"function"==typeof e?e(t):"string"==typeof e?this.dig(t,e):void 0}},computed:{processedRows:function(){var t=this,e=this.rows;return!1!==this.sortable&&(e=e.sort((function(e,a){if(!t.columns[t.sortColumn])return 0;var n=function(e){return"string"==typeof(e=t.collect(e,t.columns[t.sortColumn].field))&&(e=e.toLowerCase(),t.columns[t.sortColumn].numeric&&(e=e.indexOf(".")>=0?parseFloat(e):parseInt(e))),e};return((e=n(e))<(a=n(a))?-1:e>a?1:0)*("desc"===t.sortType?-1:1)}))),this.searchInput&&(e=new s.a(e,{keys:this.columns.map((function(t){return t.field}))}).search(this.searchInput)),e},paginated:function(){var t=this.processedRows;return this.paginate&&-1!=this.currentPerPage&&(t=t.slice((this.currentPage-1)*this.currentPerPage,this.currentPage*this.currentPerPage)),t}},watch:{currentPerPage:function(){this.currentPage=1,this.paginated},searchInput:function(){this.currentPage=1,this.paginated}}},r=(a(832),a(21)),l=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card p-3"},[a("div",{staticClass:"table-header"},[a("h4",{staticClass:"table-title text-center mt-3"},[t._v(t._s(t.title))])]),t._v(" "),a("div",{staticClass:"text-left"},[a("div",{attrs:{id:"search-input-container"}},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"form-control mb-2",attrs:{type:"search",id:"search-input",placeholder:"Search data"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"actions float-right pr-4 mb-3"},[this.exportable?a("a",{staticClass:"btn btn-info",attrs:{href:"javascript:undefined",title:"export excel"},on:{click:t.exportExcel}},[a("i",{staticClass:"fa fa-download"})]):t._e()])])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{ref:"table",staticClass:"table"},[a("thead",[a("tr",[t._l(t.columns,(function(e,n){return a("th",{class:(t.sortable?"sortable":"")+(t.sortColumn===n?"desc"===t.sortType?" sorting-desc":" sorting-asc":""),style:{width:e.width?e.width:"auto"},on:{click:function(e){return t.sort(n)}}},[t._v("\n                        "+t._s(e.label)+" "),a("i",{staticClass:"fa float-right",class:t.sortColumn===n?"desc"===t.sortType?" fa fa-angle-down":" fa fa-angle-up":""})])})),t._v(" "),t._t("thead-tr")],2)]),t._v(" "),a("tbody",t._l(t.paginated,(function(e,n){return a("tr",{on:{click:function(a){return t.click(e,n)}}},[t._l(t.columns,(function(n){return[n.html?t._e():a("td",{class:n.numeric?"numeric":""},[t._v("\n                            "+t._s(t.collect(e,n.field))+"\n                        ")]),t._v(" "),n.html?a("td",{class:n.numeric?"numeric":"",domProps:{innerHTML:t._s(t.collect(e,n.field))}}):t._e()]})),t._v(" "),t._t("tbody-tr",null,{row:e})],2)})),0)])]),t._v(" "),t.paginate?a("div",{staticClass:"table-footer"},[a("div",{staticClass:"datatable-length float-left pl-3"},[a("span",[t._v("Rows per page:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentPerPage,expression:"currentPerPage"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentPerPage=e.target.multiple?a:a[0]}}},[t._l(t.pagelen,(function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})),t._v(" "),a("option",{attrs:{value:"-1"}},[t._v("All")])],2),t._v(" "),a("div",{staticClass:"datatable-info  pb-2 mt-3"},[a("span",[t._v("Showing ")]),t._v(" "+t._s((t.currentPage-1)*t.currentPerPage?(t.currentPage-1)*t.currentPerPage:1)+" -"+t._s(-1==t.currentPerPage?t.processedRows.length:Math.min(t.processedRows.length,t.currentPerPage*t.currentPage))+" of "+t._s(t.processedRows.length)+" "),a("span",[t._v("records")])])]),t._v(" "),a("div",{staticClass:"float-right"},[a("ul",{staticClass:"pagination"},[a("li",[a("a",{staticClass:"btn link",attrs:{href:"javascript:undefined",tabindex:"0"},on:{click:function(e){return e.preventDefault(),t.previousPage(e)}}},[a("i",{staticClass:"fa fa-angle-left"})])]),t._v(" "),a("li",[a("a",{staticClass:"btn link",attrs:{href:"javascript:undefined",tabindex:"0"},on:{click:function(e){return e.preventDefault(),t.nextPage(e)}}},[a("i",{staticClass:"fa fa-angle-right"})])])])])]):t._e()])}),[],!1,null,"77ba3697",null);e.a=l.exports}}]);