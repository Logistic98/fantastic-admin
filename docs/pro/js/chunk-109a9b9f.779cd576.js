(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-109a9b9f"],{"1e4b":function(t,a,s){"use strict";s.r(a);var e={data:function(){return{diff:[{basic:["3 套页面布局","1 款主题风格","6 个侧边栏导航配置项","支持外链导航","支持全方位权限验证","10+ 个基础组件","团队代码规范","需保留作者版权信息"],pro:["12 套页面布局","6 款主题风格","10 个侧边栏导航配置项","支持外链导航","支持内嵌导航","支持 Tab 标签栏","支持全方位权限验证","10+ 个基础组件","提供扩展组件","支持国际化","支持 Mock 数据","支持错误日志上报","支持文件自动生成","提供业务应用静态页面（长期扩充）","团队代码规范","可自定义版权信息","提供一对一技术支持"]}],type:1}},computed:{titlePrefix:function(){var t=[];switch(this.type){case 1:t=["今天","昨天"];break;case 2:t=["本周","上周"];break;case 3:t=["本月","上月"];break;case 4:t=["今年","去年"]}return t}},methods:{open:function(t){window.open(t,"top")},onIconClick:function(t){this.$message({message:"你点击了：".concat(t),type:"info"})}}},l=(s("531a"),s("2877")),i=Object(l.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("page-header",{attrs:{title:"欢迎使用 Fantastic-admin（专业版）"},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",[s("div",{staticStyle:{"margin-bottom":"5px"}},[t._v("这是一款"),s("b",{staticStyle:{"text-emphasis-style":"'❤'"}},[t._v("开箱即用")]),t._v("的中后台框架，同时它也经历过数十个真实项目的技术沉淀，确保框架在开发中可落地、可使用、可维护")]),s("div",[t._v("注：在作者就职的公司，本框架已在电商、直播、OA、ERP等多个不同领域的中后台系统中应用并稳定运行")])])]},proxy:!0}])},[s("el-button-group",{staticStyle:{"margin-right":"10px"}},[s("el-button",{attrs:{type:"success",plain:"",icon:"ri-file-text-line"},on:{click:function(a){return t.open("https://hooray.gitee.io/fantastic-admin")}}},[t._v("开发文档")]),s("el-button",{attrs:{type:"primary",icon:"ri-code-s-slash-line"},on:{click:function(a){return t.open("https://gitee.com/hooray/fantastic-admin")}}},[t._v("代码仓库")])],1)],1),s("el-row",{staticStyle:{padding:"0 20px","margin-bottom":"20px"},attrs:{gutter:20}},[s("el-col",{attrs:{md:6}},[s("ColorfulCard",{attrs:{header:"开发文档",num:123,tip:"较上周上升50%",icon:"index-document"}})],1),s("el-col",{attrs:{md:6}},[s("ColorfulCard",{attrs:{"color-from":"#fbaaa2","color-to":"#fc5286",header:"基础组件",num:12323,tip:"较上周上升50%",icon:"index-component"}})],1),s("el-col",{attrs:{md:6}},[s("ColorfulCard",{attrs:{"color-from":"#ff763b","color-to":"#ffc480",header:"扩展组件",num:123,tip:"较上周上升50%",icon:"index-component"}})],1),s("el-col",{attrs:{md:6}},[s("ColorfulCard",{attrs:{"color-from":"#6a8eff","color-to":"#0e4cfd",header:"业务应用页面",num:123,tip:"较上周上升50%",icon:"index-page"}})],1)],1),s("el-row",{staticStyle:{margin:"0 10px"},attrs:{gutter:20}},[s("el-col",{attrs:{xl:8}},[s("page-main",{staticStyle:{margin:"0 0 20px 0"},attrs:{title:"框架信息"}},[s("div",{staticClass:"fa-info"},[s("img",{staticStyle:{width:"150px"},attrs:{src:"https://hooray.gitee.io/fantastic-admin/logo.png"}}),s("h1",[t._v("Fantastic-admin")]),s("el-table",{attrs:{data:t.diff,"row-key":"prop",size:"mini",border:"",stripe:""}},[s("el-table-column",{attrs:{label:"基础版",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return t._l(a.row.basic,(function(a,e){return s("div",{key:e},[t._v(t._s(a))])}))}}])}),s("el-table-column",{attrs:{label:"专业版",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return t._l(a.row.pro,(function(a,e){return s("div",{key:e},[t._v(t._s(a))])}))}}])})],1)],1)])],1),s("el-col",{attrs:{xl:16}},[s("el-row",{staticStyle:{margin:"0 -10px 20px -10px"},attrs:{gutter:20}},[s("el-col",{attrs:{md:4}},[s("div",{staticClass:"icon-box icon-box-1",on:{click:function(a){return t.onIconClick("收藏")}}},[s("i",{staticClass:"el-icon-star-off"}),s("div",{staticClass:"title"},[t._v("收藏")])])]),s("el-col",{attrs:{md:4}},[s("div",{staticClass:"icon-box icon-box-2",on:{click:function(a){return t.onIconClick("通知")}}},[s("i",{staticClass:"el-icon-bell"}),s("div",{staticClass:"title"},[t._v("通知")])])]),s("el-col",{attrs:{md:4}},[s("div",{staticClass:"icon-box icon-box-3",on:{click:function(a){return t.onIconClick("图集")}}},[s("i",{staticClass:"el-icon-picture-outline"}),s("div",{staticClass:"title"},[t._v("图集")])])]),s("el-col",{attrs:{md:4}},[s("div",{staticClass:"icon-box icon-box-4",on:{click:function(a){return t.onIconClick("拍照")}}},[s("i",{staticClass:"el-icon-camera"}),s("div",{staticClass:"title"},[t._v("拍照")])])]),s("el-col",{attrs:{md:4}},[s("div",{staticClass:"icon-box icon-box-5",on:{click:function(a){return t.onIconClick("视频")}}},[s("i",{staticClass:"el-icon-video-camera"}),s("div",{staticClass:"title"},[t._v("视频")])])]),s("el-col",{attrs:{md:4}},[s("div",{staticClass:"icon-box icon-box-6",on:{click:function(a){return t.onIconClick("购物")}}},[s("i",{staticClass:"el-icon-goods"}),s("div",{staticClass:"title"},[t._v("购物")])])])],1),s("page-main",{staticStyle:{margin:"0 0 20px 0"},attrs:{title:"应用场景"}},[s("div",{staticClass:"question"},[s("ol",{staticClass:"answer"},[s("li",[s("span",[t._v("没有前端开发人员的小型公司。")]),t._v("据了解，有些小型公司没有前端开发人员，而这些公司在开发中后台系统的时候，直接要求后端开发人员来进行开发工作。所以借助 Vue 的易学习易上手特性，再加上本框架的加持，可以让后端开发人员能在短时间内转型成为全栈开发。")]),s("li",[s("span",[t._v("前端开发人员不足的中小型公司。")]),t._v("根据招聘网站统计，几乎所有公司都缺前端，其中有很大一部分中小型公司标配只有1-2名前端开发人员，而这些公司在开发中后台系统的时候，如果能有一套现成的中后台框架系统，不仅能提高项目开发效率，同时还大大减轻前端开发人员工作压力。")]),s("li",[s("span",[t._v("项目型公司。")]),t._v("特点为项目多，周期短，甲方对页面布局和主题风格有绝对话语权，而通过专业版提供的 12 套页面布局和 5 款主题风格（共计 60 种）可应对绝大部分甲方需求，并且可自定义扩展主题风格的样式，实现高度定制化。")]),s("li",[s("span",[t._v("产品型公司。")]),t._v("产品型公司最担心的就是产品开发中代码不可控的因素，本框架除了提供完善的开发文档和代码注释外，针对专业版用户还提供一对一的技术支持，确保开发人员尽可能理解整套框架源码的方方面面，为产品保驾护航。")]),s("li",[s("span",[t._v("接私活的个人开发者。")]),t._v("手里有一套可高度定制化的中后台框架，什么项目都不用担心啦~")])])])]),s("page-main",{staticStyle:{margin:"0"},attrs:{title:"优势"}},[s("div",{staticClass:"question"},[s("ol",{staticClass:"answer"},[s("li",[s("span",[t._v("作者拥有10年+的前后端开发经验。")]),t._v("部分框架的作者由于天然缺少后端开发经验，可能会在设计框架的时候，很少或者没有考虑后端的实现逻辑，导致框架在实际使用中，业务场景无法落地，开发人员得通过修改源码自行实现业务。")]),s("li",[s("span",[t._v("经历过数十个真实项目的打磨。")]),t._v("没用在真实业务场景中使用过的框架都是纸飞机，哪怕它提供的演示功能特别华丽。而本框架在作者就职的公司，已经稳定应用在电商、直播、OA、CRM、ERP等多个不同领域的中后台系统中。")]),s("li",[s("span",[t._v("丰富的组件库。")]),t._v("除了支持 ElementUI 自带的组件外，框架还扩充了部分业务组件，以及第三方插件。借助以往的项目经验，提供最佳实践方案，方便开发人员直接使用。")]),s("li",[s("span",[t._v("持续更新的业务应用静态页面。")]),t._v("通过项目积累，沉淀出数十个业务应用的静态页面，做到开发人员拿来即可使用，极大提升开发效率的同时，还省去了产品和设计人员的工作。")]),s("li",[s("span",[t._v("长期维护。")]),t._v("无论是免费的基础版，还是付费的专业版，均提供长期维护。区别在于基础版侧重于稳定性维护，主要在修复 bug ，不定期增加新特性；专业版侧重于新特性开发，在确保稳定的基础上，会长期深挖中后台系统框架，持续产出可落地的特性或开发规范。")])])])])],1)],1),s("page-main",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:8}},[s("el-card",{staticClass:"cube-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[t._v(" 访客数据魔方 "),s("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:t.type,callback:function(a){t.type=a},expression:"type"}},[s("el-option",{attrs:{label:"今天 - 昨天",value:1}}),s("el-option",{attrs:{label:"本周 - 上周",value:2}}),s("el-option",{attrs:{label:"本月 - 上月",value:3}}),s("el-option",{attrs:{label:"今年 - 去年",value:4}})],1)],1),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:10}},[s("div",{staticClass:"today"},[t._v("123")]),s("div",{staticClass:"sub-title"},[t._v(t._s(t.titlePrefix[0])+"访问量（单位：PV）")])]),s("el-col",{attrs:{span:10}},[s("div",{staticClass:"yesterday"},[t._v("123")]),s("div",{staticClass:"sub-title"},[t._v(t._s(t.titlePrefix[1])+"访问量（单位：PV）")])]),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"contrast"},[t._v("12")]),s("div",{staticClass:"sub-title"},[t._v("对比")])])],1),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:10}},[s("div",{staticClass:"today"},[t._v("123")]),s("div",{staticClass:"sub-title"},[t._v(t._s(t.titlePrefix[0])+"访问量（单位：UV）")])]),s("el-col",{attrs:{span:10}},[s("div",{staticClass:"yesterday"},[t._v("123")]),s("div",{staticClass:"sub-title"},[t._v(t._s(t.titlePrefix[1])+"访问量（单位：UV）")])]),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"contrast"},[t._v("12")]),s("div",{staticClass:"sub-title"},[t._v("对比")])])],1)],1)],1),s("el-col",{attrs:{md:8}},[s("el-card",{staticClass:"cube-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[t._v(" 下载数据魔方 "),s("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:t.type,callback:function(a){t.type=a},expression:"type"}},[s("el-option",{attrs:{label:"今天 - 昨天",value:1}}),s("el-option",{attrs:{label:"本周 - 上周",value:2}}),s("el-option",{attrs:{label:"本月 - 上月",value:3}}),s("el-option",{attrs:{label:"今年 - 去年",value:4}})],1)],1),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:10}},[s("div",{staticClass:"today"},[t._v("123")]),s("div",{staticClass:"sub-title"},[t._v(t._s(t.titlePrefix[0])+"下载量（单位：次）")])]),s("el-col",{attrs:{span:10}},[s("div",{staticClass:"yesterday"},[t._v("123")]),s("div",{staticClass:"sub-title"},[t._v(t._s(t.titlePrefix[1])+"下载量（单位：次）")])]),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"contrast"},[t._v("12")]),s("div",{staticClass:"sub-title"},[t._v("对比")])])],1)],1)],1),s("el-col",{attrs:{md:8}},[s("el-card",{staticClass:"cube-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[t._v(" 销售数据魔方 "),s("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:t.type,callback:function(a){t.type=a},expression:"type"}},[s("el-option",{attrs:{label:"今天 - 昨天",value:1}}),s("el-option",{attrs:{label:"本周 - 上周",value:2}}),s("el-option",{attrs:{label:"本月 - 上月",value:3}}),s("el-option",{attrs:{label:"今年 - 去年",value:4}})],1)],1),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:10}},[s("div",{staticClass:"today"},[t._v("123")]),s("div",{staticClass:"sub-title"},[t._v(t._s(t.titlePrefix[0])+"销售总金额（单位：人民币）")])]),s("el-col",{attrs:{span:10}},[s("div",{staticClass:"yesterday"},[t._v("123")]),s("div",{staticClass:"sub-title"},[t._v(t._s(t.titlePrefix[1])+"销售总金额（单位：人民币）")])]),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"contrast"},[t._v("12")]),s("div",{staticClass:"sub-title"},[t._v("对比")])])],1)],1)],1)],1)],1)],1)}),[],!1,null,"34cebccb",null);a.default=i.exports},"531a":function(t,a,s){"use strict";s("a7d4")},a7d4:function(t,a,s){}}]);