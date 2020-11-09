(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{381:function(t,i,e){"use strict";e.r(i);var s=e(42),n=Object(s.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-钩子-专业版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-钩子-专业版"}},[t._v("#")]),t._v(" Git 钩子（专业版）")]),t._v(" "),e("p",[t._v("虽然有 ESLint 和 stylelint 的加持，但它们也仅仅是对代码的写法规范进行格式化，例如缩进、空格、结尾的分号等。而在提交代码时，专业版提供的 Git 钩子会检查代码中是否有语法错误，这些错误是 IDE 无法自动修复的，例如出现未使用过的变量。如果有错误，则会取消此次提交，直到开发者修复完所有错误后才允许提交成功，确保仓库里的代码绝对正确。")]),t._v(" "),e("p",[t._v("如果 "),e("code",[t._v("git init")]),t._v(" 仓库初始化是在依赖包安装之后执行的，则无法初始化 Git 钩子，建议在 "),e("code",[t._v("git init")]),t._v(" 之后再执行一遍 "),e("code",[t._v("yarn")]),t._v(" ，重新安装一遍依赖包。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("通过修改 "),e("code",[t._v(".eslintignore")]),t._v(" 和 "),e("code",[t._v(".stylelintignore")]),t._v(" 忽略无需做代码规范的文件，可以让 git 跳过这些文件的检查，例如在项目中引用了一些第三方的插件或组件，我们就可以将其忽略。")])])])}),[],!1,null,null,null);i.default=n.exports}}]);