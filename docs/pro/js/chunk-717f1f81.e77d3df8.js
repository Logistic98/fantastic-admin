(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-717f1f81"],{5765:function(t,e,s){},dd7b:function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),i=s("6d3b"),r=s("5dc8"),n=s("b42f"),a=s("d17a"),l=s("e36a"),c=s("fb03"),p=s.n(c);s("bbe3");i.a.use([r.a,n.a,a.a,l.a]),o.default.use(p()(i.a));var d=p()(i.a),u={name:"Login",components:{Swiper:d.Swiper,SwiperSlide:d.SwiperSlide},data:function(){return{title:"Fantastic-admin 演示",bgSwiperOption:{init:!0,autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,effect:"fade"},swiperOption:{init:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0},banner:["https://i.loli.net/2020/04/21/B2ThI5N6UZlxMwr.png","https://i.loli.net/2020/04/21/A1cvYsQeXfTDoJx.png","https://i.loli.net/2020/04/21/5URp2Ge6YVEcfS1.png"],form:{account:localStorage.login_account||"",password:"",remember:!!localStorage.login_account},rules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{showPassword:function(){var t=this;this.passwordType="password"===this.passwordType?"":"password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.loading=!0,t.$store.dispatch("user/login",t.form).then((function(){t.loading=!1,t.form.remember&&localStorage.setItem("login_account",t.form.account),t.$router.push({path:t.redirect||"/"})})).catch((function(){t.loading=!1})))}))},testAccount:function(t){this.form.account=t,this.form.password="123456",this.handleLogin()}}},f=(s("f1e8"),s("2877")),m=Object(f.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("swiper",{staticClass:"swiper-no-swiping bg-banner",attrs:{options:t.bgSwiperOption}},[s("swiper-slide",{staticClass:"item item1"}),s("swiper-slide",{staticClass:"item item2"}),s("swiper-slide",{staticClass:"item item3"})],1),s("div",{attrs:{id:"login-box"}},[s("div",{staticClass:"flex-container"},[s("swiper",{staticClass:"banner",attrs:{options:t.swiperOption}},t._l(t.banner,(function(t,e){return s("swiper-slide",{key:e},[s("img",{staticClass:"item",attrs:{src:t}})])})),1)],1),s("el-form",{ref:"form",staticClass:"flex-container login-form",attrs:{model:t.form,rules:t.rules,size:"default","auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[t._v(t._s(t.title)+"管理后台")])]),s("div",[s("el-form-item",{attrs:{prop:"account"}},[s("el-input",{ref:"name",attrs:{placeholder:t.$t("app.account"),type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}},[s("svg-icon",{attrs:{slot:"prefix",name:"user"},slot:"prefix"})],1)],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{ref:"password",attrs:{type:t.passwordType,placeholder:t.$t("app.password"),tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[s("svg-icon",{attrs:{slot:"prefix",name:"password"},slot:"prefix"}),s("svg-icon",{attrs:{slot:"suffix",name:"password"===t.passwordType?"eye":"eye-open"},on:{click:t.showPassword},slot:"suffix"})],1)],1)],1),s("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("记住我")]),s("el-button",{staticStyle:{width:"100%"},attrs:{loading:t.loading,type:"primary",size:"default"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v(t._s(t.$t("app.login")))]),s("div",{staticStyle:{"margin-top":"20px",color:"#999","font-size":"14px","text-align":"center"}},[t._v(" 演示帐号一键登录："),s("span",{staticStyle:{padding:"0 5px",cursor:"pointer",color:"#666"},on:{click:function(e){return t.testAccount("admin")}}},[t._v("admin")]),t._v("或"),s("span",{staticStyle:{padding:"0 5px",cursor:"pointer",color:"#666"},on:{click:function(e){return t.testAccount("test")}}},[t._v("test")])])],1)],1),t.$store.state.settings.showCopyright?s("Copyright"):t._e()],1)}),[],!1,null,"1d011132",null);e.default=m.exports},f1e8:function(t,e,s){"use strict";s("5765")}}]);