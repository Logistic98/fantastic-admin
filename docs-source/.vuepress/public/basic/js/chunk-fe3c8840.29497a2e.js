(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fe3c8840"],{"69b6":function(t,e,o){"use strict";o("6cd0")},"6cd0":function(t,e,o){},dd7b:function(t,e,o){"use strict";o.r(e);var r={name:"Login",data:function(){return{title:"Fantastic-admin 演示",form:{account:localStorage.login_account||"",password:"",remember:!!localStorage.login_account},rules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{showPassword:function(){var t=this;this.passwordType="password"===this.passwordType?"":"password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.loading=!0,t.$store.dispatch("user/login",t.form).then((function(){t.loading=!1,t.form.remember&&localStorage.setItem("login_account",t.form.account),t.$router.push({path:t.redirect||"/"})})).catch((function(){t.loading=!1})))}))},testAccount:function(t){this.form.account=t,this.form.password="123456",this.handleLogin()}}},n=(o("69b6"),o("2877")),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"bg-banner"}),o("div",{attrs:{id:"login-box"}},[o("div",{staticClass:"login-banner"}),o("el-form",{ref:"form",staticClass:"flex-container login-form",attrs:{model:t.form,rules:t.rules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[t._v(t._s(t.title)+"管理后台")])]),o("div",[o("el-form-item",{attrs:{prop:"account"}},[o("el-input",{ref:"name",attrs:{placeholder:"用户名",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}},[o("svg-icon",{attrs:{slot:"prefix",name:"user"},slot:"prefix"})],1)],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{ref:"password",attrs:{type:t.passwordType,placeholder:"密码",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[o("svg-icon",{attrs:{slot:"prefix",name:"password"},slot:"prefix"}),o("svg-icon",{attrs:{slot:"suffix",name:"password"===t.passwordType?"eye":"eye-open"},on:{click:t.showPassword},slot:"suffix"})],1)],1)],1),o("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("记住我")]),o("el-button",{staticStyle:{width:"100%"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")]),o("div",{staticStyle:{"margin-top":"20px",color:"#999","font-size":"14px","text-align":"center"}},[t._v(" 演示帐号一键登录："),o("span",{staticStyle:{padding:"0 5px",cursor:"pointer",color:"#666"},on:{click:function(e){return t.testAccount("admin")}}},[t._v("admin")]),t._v("或"),o("span",{staticStyle:{padding:"0 5px",cursor:"pointer",color:"#666"},on:{click:function(e){return t.testAccount("test")}}},[t._v("test")])])],1)],1),t.$store.state.settings.showCopyright?o("Copyright"):t._e()],1)}),[],!1,null,"ccc39f24",null);e.default=s.exports}}]);