(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{2169:function(n,t,e){"use strict";var i=e(960);e.n(i).a},2170:function(n,t,e){(n.exports=e(30)(!1)).push([n.i,"html {\n    height : 100%;\n}\nbody {\n    font-family             : 'Open Sans', sans-serif;\n    background              : radial-gradient(ellipse at center, #63B9B4 0%, #008C83 100%);\n    -webkit-background-size : cover;\n    -moz-background-size    : cover;\n    -o-background-size      : cover;\n    background-size         : cover;\n    height                  : 100%;\n    padding-top             : 70px;\n    color : #fff;\n}\n.box {\n    padding          : 19px 15px;\n    margin-bottom    : 70px;\n}\n.box input[type='submit'] {\n    margin : 25px 0 20px 0;\n}\n.form-group {\n    margin-bottom: 25px;\n}\n.submit-btn {\n    background-color: rgba(255,255,255, .2);\n}\n.btn:hover, .btn:focus, .btn.focus {\n    color: #fff;\n}\n@media screen and (min-width : 450px) {\n.box {\n        padding : 36px 35px;\n}\n}\n.animated {\n    -webkit-animation-duration  : 1s;\n    animation-duration          : 1s;\n    -webkit-animation-fill-mode : both;\n    animation-fill-mode         : both;\n}\n@-webkit-keyframes fadeInUp {\n0% {\n        opacity           : 0;\n        -webkit-transform : translateY(20px);\n        transform         : translateY(20px);\n}\n100% {\n        opacity           : 1;\n        -webkit-transform : translateY(0);\n        transform         : translateY(0);\n}\n}\n@keyframes fadeInUp {\n0% {\n        opacity           : 0;\n        -webkit-transform : translateY(20px);\n        -ms-transform     : translateY(20px);\n        transform         : translateY(20px);\n}\n100% {\n        opacity           : 1;\n        -webkit-transform : translateY(0);\n        -ms-transform     : translateY(0);\n        transform         : translateY(0);\n}\n}\n.fadeInUp {\n    -webkit-animation-name : fadeInUp;\n    animation-name         : fadeInUp;\n    transition             : transform ease-in 200ms;\n}\n.checkbox label {\n    padding-left : 0;\n}\n.forgot_Form .email {\n    border-radius: 20px;\n}\n.enter_email, .check_email {\n    margin-top : 18px;\n}\n.help-block {\n    color : #fecfb0;\n}\n.btn-top {\n    margin-top : 20px !important;\n}\na:hover, a:focus {\n    text-decoration : none;\n}\n.has-error .help-block {\n    color : #C45555;\n    float : left;\n}\n.err-text {\n    color : #c15050;\n}\n.btn:focus, .btn:active:focus {\n    outline : 0;\n}\n.has-error .form-control, .has-error .form-control:focus {\n    border-color : #C45555;\n}\n.text-danger {\n    color: #ff6666;\n}\n.reset-link {\n    color: #ddd;\n}\n.reset-link:hover {\n    color: #eee;\n}\n.preloader {\n    position            : fixed;\n    width               : 100%;\n    height              : 100%;\n    top                 : 0;\n    left                : 0;\n    z-index             : 100000;\n    backface-visibility : hidden;\n    background          : #ffffff;\n}\n.loader_img {\n    width               : 50px;\n    height              : 50px;\n    position            : absolute;\n    left                : 50%;\n    top                 : 50%;\n    background-position : center;\n    margin              : -25px 0 0 -25px;\n}\n.box h3{\n    margin-top:20px;\n    margin-bottom:20px;\n}\n.submit-btn{\n    color:#fff;\n}\n.hidden{\n    display:none;\n}",""])},2279:function(n,t,e){"use strict";e.r(t);var i=e(959).a,a=(e(2169),e(21)),o=Object(a.a)(i,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 col-10 col-sm-6 m-auto  box animated fadeInUp"},[i("div",{staticClass:"text-center "},[i("img",{staticClass:"img-fluid",attrs:{src:e(956),alt:"Clear logo"}})]),n._v(" "),i("h3",{staticClass:"text-center"},[n._v("Forgot Password\n                ")]),n._v(" "),i("p",{staticClass:"text-center enter_email"},[n._v("\n                    Enter your Registered email\n                ")]),n._v(" "),n._m(0),n._v(" "),n._m(1)])])])])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("p",{staticClass:"text-center check_email hidden"},[this._v("\n                    Check your email for Reset link\n                    "),t("br"),t("br"),this._v(" "),t("u",[t("a",{staticClass:"reset-link",attrs:{href:"javascript:void(0)"}},[this._v("Resend the link")])])])},function(){var n=this.$createElement,t=this._self._c||n;return t("form",{staticClass:"forgot_Form text-center",attrs:{method:"POST",id:"forgot_password"}},[t("div",{staticClass:"form-group"},[t("input",{staticClass:"form-control email pl-3",attrs:{type:"email",name:"email",id:"email",placeholder:"Email"}})]),this._v(" "),t("button",{staticClass:"btn submit-btn",attrs:{type:"submit",value:"Reset Your Password"}},[this._v("\n                        Retrieve Password\n                    ")])])}],!1,null,null,null);t.default=o.exports},876:function(n,t,e){(function(n){!function(n){"use strict";var t=function(n,t){this.init("magnify",n,t)};t.prototype={constructor:t,init:function(t,e,i){this.type=t,this.$element=n(e),this.options=this.getOptions(i),this.nativeWidth=0,this.nativeHeight=0,this.$element.wrap('<div class="magnify" >'),this.$element.parent(".magnify").append('<div class="magnify-large" >'),this.$element.siblings(".magnify-large").css("background","url('"+this.$element.attr("src")+"') no-repeat"),this.$element.parent(".magnify").on("mousemove."+this.type,n.proxy(this.check,this)),this.$element.parent(".magnify").on("mouseleave."+this.type,n.proxy(this.check,this))},getOptions:function(t){return(t=n.extend({},n.fn[this.type].defaults,t,this.$element.data())).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},check:function(t){var e=n(t.currentTarget),i=e.children("img"),a=e.children(".magnify-large");if(this.nativeWidth||this.nativeHeight){var o=e.offset(),s=t.pageX-o.left,r=t.pageY-o.top;if(s<e.width()&&r<e.height()&&s>0&&r>0?a.fadeIn(100):a.fadeOut(100),a.is(":visible")){var l=-1*Math.round(s/e.width()*this.nativeWidth-a.width()/2)+"px "+-1*Math.round(r/e.height()*this.nativeHeight-a.height()/2)+"px",c=s-a.width()/2,d=r-a.height()/2;a.css({left:c,top:d,backgroundPosition:l})}}else{var m=new Image;m.src=i.attr("src"),this.nativeWidth=m.width,this.nativeHeight=m.height}}},n.fn.magnify=function(e){return this.each((function(){var i=n(this),a=i.data("magnify"),o="object"==typeof e&&e;a||i.data("tooltip",a=new t(this,o)),"string"==typeof e&&a[e]()}))},n.fn.magnify.Constructor=t,n.fn.magnify.defaults={delay:0},n(window).on("load",(function(){n('[data-toggle="magnify"]').each((function(){n(this).magnify()}))}))}(n)}).call(this,e(429))},956:function(n,t){n.exports="/laravel_vue/images/logo.png?a7b4575e3769bae62092c494870b5d8a"},959:function(n,t,e){"use strict";(function(n){e(876);t.a={name:"image_magnifier",mounted:function(){n(document).ready((function(){var t=n("input[name=email]");n('button[type="submit"]').on("click",(function(e){if(e.preventDefault(),""!=t.val())n(".enter_email").addClass("hidden"),n(".check_email").removeClass("hidden"),n("#email, .signup-signin").addClass("hidden"),n(".submit-btn").addClass("animated fadeInUp"),n('button[type="submit"]').html("Reset Password").removeClass("btn-primary btn-block").addClass("btn-success").on("click",(function(){window.location.href="#/reset_password"}));else{n(".enter_email").addClass("err-text animated fadeInUp").html("<p>Sorry, Enter Your Registered email</p>")}})),n("#email").on("keypress focus",(function(){n(".enter_email").removeClass("text-danger animated fadeInUp").html("Enter your Registered email")}))}))},destroyed:function(){}}}).call(this,e(429))},960:function(n,t,e){var i=e(2170);"string"==typeof i&&(i=[[n.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(31)(i,a);i.locals&&(n.exports=i.locals)}}]);