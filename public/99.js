(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1961:function(e,t,o){"use strict";var r=o(868);o.n(r).a},1962:function(e,t,o){(e.exports=o(30)(!1)).push([e.i,'.dropify-wrapper,\r\n.dropify-wrapper .dropify-clear {\r\n    font-family : "Open Sans", sans-serif;\n}\n.dropify-wrapper.has-error {\r\n    border-color : #ff6666;\n}\n.dropify-errors-container.visible {\r\n    background-color : #ff6666;\n}\n.dropify-wrapper .dropify-message p.dropify-error {\r\n    color : #ff6666;\n}\n.p-30 {\r\n    padding : 30px;\n}\n.p-30 h5{\r\n    margin-top: 0.5rem;\n}',""])},2269:function(e,t,o){"use strict";o.r(t);var r=o(433),i=o(866),n=o.n(i),s=(o(867),{name:"dropify",components:{card:r.a,vueDropzone:n.a},data:function(){return{dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:100,thumbnailHeight:100,headers:{"My-Awesome-Header":"header value"}},dropzoneMaxSize:{url:"https://httpbin.org/post",thumbnailWidth:100,thumbnailHeight:100,maxFilesize:.1,headers:{"My-Awesome-Header":"header value"}},dropzoneMaxFiles:{url:"https://httpbin.org/post",thumbnailWidth:100,thumbnailHeight:100,maxFiles:2,acceptedFiles:".png",headers:{"My-Awesome-Header":"header value"}},dropzoneFiletype:{url:"https://httpbin.org/post",thumbnailWidth:100,thumbnailHeight:100,acceptedFiles:".png",headers:{"My-Awesome-Header":"header value"}}}},mounted:function(){},destroyed:function(){}}),a=(o(1961),o(21)),d=Object(a.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("card",{attrs:{title:"<i class='fa fa-fw ti-dropbox'></i> Dropify"}},[o("div",{staticClass:"p-30"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("h5",[e._v("Dropify Basic")]),e._v(" "),o("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:e.dropzoneOptions}})],1),e._v(" "),o("div",{staticClass:"col-md-6"},[o("h5",[e._v("AllowedFileExtensions ( PNG)")]),e._v(" "),o("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone4",options:e.dropzoneFiletype}})],1)]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("h5",[e._v("Max File Size")]),e._v(" "),o("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone2",options:e.dropzoneMaxSize}})],1),e._v(" "),o("div",{staticClass:"col-md-6"},[o("h5",[e._v("Max Number of Files")]),e._v(" "),o("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone3",options:e.dropzoneMaxFiles}})],1)])])])],1)])])}),[],!1,null,null,null);t.default=d.exports},426:function(e,t,o){var r=o(431);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(31)(r,i);r.locals&&(e.exports=r.locals)},430:function(e,t,o){"use strict";var r=o(426);o.n(r).a},431:function(e,t,o){(e.exports=o(30)(!1)).push([e.i,"\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n",""])},433:function(e,t,o){"use strict";var r={name:"card",data:function(){return{show:!0,isActive:!1}},methods:{hide:function(){this.isActive=!0}},mounted:function(){},props:{title:{required:!1}},destroy:function(){}},i=(o(430),o(21)),n=Object(i.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card",class:{dNone:e.isActive}},[o("div",{staticClass:"card-header"},[o("h3",{staticClass:"card-title",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),o("span",{staticClass:"float-right"},[o("i",{staticClass:"fa fa-fw ti-angle-up",class:{rotate:e.show},on:{click:function(t){e.show=!e.show}}}),e._v(" "),o("i",{staticClass:"fa fa-fw ti-close removecard",on:{click:e.hide}})])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"card-body"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=n.exports},868:function(e,t,o){var r=o(1962);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(31)(r,i);r.locals&&(e.exports=r.locals)}}]);