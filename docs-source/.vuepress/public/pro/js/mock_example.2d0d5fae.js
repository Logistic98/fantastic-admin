(window.webpackJsonp=window.webpackJsonp||[]).push([["mock_example"],{2738:function(n,t,e){"use strict";e.r(t);e("a15b"),e("d81d");var o={methods:{getPermission:function(){var n=this;this.$store.dispatch("user/getPermissions").then((function(t){n.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:t.map((function(n){return"<p>".concat(n,"</p>")})).join("")})}))},open:function(n){window.open(n,"top")}}},i=e("2877"),c=Object(i.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("page-header",{attrs:{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"}},[e("el-button",{attrs:{icon:"el-icon-link"},on:{click:function(t){return n.open("http://mockjs.com/")}}},[n._v("Mock.js 官网")])],1),e("page-main",[e("el-button",{on:{click:n.getPermission}},[n._v("测试：获取用户权限")])],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);