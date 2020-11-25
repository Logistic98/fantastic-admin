(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{380:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"代码规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码规范"}},[t._v("#")]),t._v(" 代码规范")]),t._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("p",[t._v("代码规范主要基于 ESLint 和 stylelint 运行，所以为保证代码风格统一，请统一使用 "),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code"),s("OutboundLink")],1),t._v(" 做为开发工具，并安装以下扩展：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("EditorConfig for VS Code"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vetur"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier - Code formatter"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("安装完后在 "),s("code",[t._v("settings.json")]),t._v(" 中增加如下配置：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.codeActionsOnSave"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source.fixAll.eslint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source.fixAll.stylelint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("最终效果为，在保存时，会自动对当前文件进行代码格式化操作。")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("配置文件主要有 3 处，分别为 IDE 配置（"),s("code",[t._v(".editorconfig")]),t._v("）、ESLint 配置（"),s("code",[t._v(".eslintrc.js")]),t._v(" 和 "),s("code",[t._v(".eslintignore")]),t._v("）、StyleLint 配置（"),s("code",[t._v(".stylelintrc")]),t._v(" 和 "),s("code",[t._v(".stylelintignore")]),t._v("）。")]),t._v(" "),s("p",[t._v("以代码缩进举例，框架默认是以 4 空格进行缩进，如果要调整为 2 空格，则需要在 "),s("code",[t._v(".editorconfig")]),t._v(" 里修改：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("indent_size = 2\n")])])]),s("p",[t._v("在 "),s("code",[t._v(".eslintrc.js")]),t._v(" 里修改：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'indent': [2, 2, {\n    'SwitchCase': 1\n}],\n\n...\n\n'vue/html-indent': [2, 2],\n\n...\n\n'vue/script-indent': [2, 2, {\n    'switchCase': 1\n}]\n")])])]),s("p",[t._v("在 "),s("code",[t._v(".stylelintrc")]),t._v(" 里修改：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"indentation": 2\n')])])]),s("p",[t._v("修改完毕后，再分别执行下面两句命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run lint\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run stylelint\n")])])]),s("p",[t._v("该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。以上面的例子，当缩进规则调整后，我们无需手动去每个文件调整，通过命令可以自动应用新的缩进规则。")])])}),[],!1,null,null,null);e.default=r.exports}}]);