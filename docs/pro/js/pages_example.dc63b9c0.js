(window.webpackJsonp=window.webpackJsonp||[]).push([["pages_example"],{"09c6":function(e,t,i){"use strict";i("49c2")},"0eae":function(e,t,i){"use strict";i("8168")},1899:function(e,t,i){},"31e1":function(e,t,i){"use strict";i("a9e3"),i("99af"),i("4de4"),i("c975"),i("a434"),i("b0c0");var a=i("5093"),o={props:{readonly:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},type:{type:Number,default:1}},data:function(){return{dialog:{index:"",visible:!1,filter:"",checkList:[],disableList:[]}}},computed:{province:function(){var e,t=this;switch(this.dialog.filter){case"":e=a.default;break;case"autonomousRegion":e=a.default.filter((function(e){return e.autonomousRegion}));break;case"provinceLevelCity":e=a.default.filter((function(e){return e.provinceLevelCity}));break;default:e=a.default.filter((function(e){return e.region==t.dialog.filter}))}return e}},created:function(){},mounted:function(){},methods:{showFreightDialog:function(){this.dialog.index="",this.dialog.checkList=[],this.dialog.disableList=this.getDisableProvinceList(),this.dialog.visible=!0},freightDialogSubmit:function(e){if(0===this.dialog.checkList.length)this.$message({message:"请勾选区域",type:"warning"});else{var t=this.data;""!==e?t[e].list=this.dialog.checkList:t.push({list:this.dialog.checkList,first_step:"",first_price:"",continued_step:"",continued_price:""}),this.$emit("update:data",t),this.dialog.visible=!1}},editFreight:function(e){this.dialog.index=e,this.dialog.checkList=this.data[e].list,this.dialog.disableList=this.getDisableProvinceList(e),this.dialog.visible=!0},deleteFreight:function(e){var t=this.data;t.splice(e,1),this.$emit("update:data",t)},deleteSingleFreight:function(e,t){var i=this.data;i[e].list.splice(i[e].list.indexOf(t),1),0===i[e].list.length&&i.splice(e,1),this.$emit("update:data",i)},getProvinceByCode:function(e){var t="";for(var i in a.default)a.default[i].code===e&&(t=a.default[i].name);return t},getDisableProvinceList:function(e){for(var t=[],i=0;i<this.data.length;i++)e!==i&&(t=t.concat(this.data[i].list));return t}}},l=(i("731b"),i("2877")),n={components:{Freight:Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.readonly&&0==e.data.length?e._e():i("el-table",{directives:[{name:"show",rawName:"v-show",value:0!=e.data.length,expression:"data.length != 0"}],staticClass:"freight",attrs:{data:e.data,border:""}},[i("el-table-column",{attrs:{label:"运送到"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.readonly?i("div",e._l(t.row.list,(function(t,a){return i("el-tag",{key:a,attrs:{type:"info"}},[e._v(e._s(e.getProvinceByCode(t)))])})),1):i("el-row",{attrs:{type:"flex",align:"middle"}},[i("el-col",e._l(t.row.list,(function(a,o){return i("el-tag",{key:o,attrs:{"disable-transitions":!0,type:"info",closable:""},on:{close:function(i){return e.deleteSingleFreight(t.$index,a)}}},[e._v(e._s(e.getProvinceByCode(a)))])})),1),i("el-col",{staticStyle:{width:"100px","text-align":"right"}},[i("el-button",{attrs:{size:"small",plain:""},on:{click:function(i){return e.editFreight(t.$index)}}},[e._v("编 辑")])],1)],1)]}}],null,!1,4131469861)}),i("el-table-column",{attrs:{label:1==e.type?"首件数（件）":"首重量（kg）",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.readonly?i("span",[e._v(e._s(t.row.first_step))]):i("el-input",{directives:[{name:"format-int",rawName:"v-format-int"}],attrs:{size:"small"},model:{value:t.row.first_step,callback:function(i){e.$set(t.row,"first_step",i)},expression:"scope.row.first_step"}})]}}],null,!1,2667258980)}),i("el-table-column",{attrs:{label:"首费（元）",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.readonly?i("span",[e._v(e._s(t.row.first_price))]):i("el-input",{directives:[{name:"format-price",rawName:"v-format-price"}],attrs:{size:"small"},model:{value:t.row.first_price,callback:function(i){e.$set(t.row,"first_price",i)},expression:"scope.row.first_price"}})]}}],null,!1,4166957380)}),i("el-table-column",{attrs:{label:1==e.type?"续件数（件）":"续重量（kg）",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.readonly?i("span",[e._v(e._s(t.row.continued_step))]):i("el-input",{directives:[{name:"format-int",rawName:"v-format-int"}],attrs:{size:"small"},model:{value:t.row.continued_step,callback:function(i){e.$set(t.row,"continued_step",i)},expression:"scope.row.continued_step"}})]}}],null,!1,2015920548)}),i("el-table-column",{attrs:{label:"续费（元）",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.readonly?i("span",[e._v(e._s(t.row.continued_price))]):i("el-input",{directives:[{name:"format-price",rawName:"v-format-price"}],attrs:{size:"small"},model:{value:t.row.continued_price,callback:function(i){e.$set(t.row,"continued_price",i)},expression:"scope.row.continued_price"}})]}}],null,!1,3927454468)}),e.readonly?e._e():i("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(i){return e.deleteFreight(t.$index)}}},[e._v("删 除")])]}}],null,!1,1773063513)}),i("template",{slot:"empty"},[i("span")]),i("template",{slot:"append"},[e.readonly?e._e():i("div",{staticStyle:{padding:"10px"}},[i("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"small",plain:""},on:{click:e.showFreightDialog}},[e._v("新增一条运费模版")])],1)])],2),e.readonly?e._e():i("el-button",{directives:[{name:"show",rawName:"v-show",value:0==e.data.length,expression:"data.length == 0"}],attrs:{type:"primary",size:"small",plain:""},on:{click:e.showFreightDialog}},[e._v("为指定地区设置运费模版")]),i("el-dialog",{staticClass:"freight-dialog",attrs:{visible:e.dialog.visible,title:"选择地区",width:"800px","append-to-body":""},on:{"update:visible":function(t){return e.$set(e.dialog,"visible",t)},closed:function(t){e.dialog.filter=""}}},[i("div",{staticClass:"filter"},[i("el-radio-group",{attrs:{size:"small"},model:{value:e.dialog.filter,callback:function(t){e.$set(e.dialog,"filter",t)},expression:"dialog.filter"}},[i("el-radio-button",{attrs:{label:""}},[e._v("全部")]),i("el-radio-button",{attrs:{label:"north"}},[e._v("华北地区")]),i("el-radio-button",{attrs:{label:"northeast"}},[e._v("东北地区")]),i("el-radio-button",{attrs:{label:"east"}},[e._v("华东地区")]),i("el-radio-button",{attrs:{label:"central"}},[e._v("华中地区")]),i("el-radio-button",{attrs:{label:"south"}},[e._v("华南地区")]),i("el-radio-button",{attrs:{label:"southwest"}},[e._v("西南地区")]),i("el-radio-button",{attrs:{label:"northwest"}},[e._v("西北地区")]),i("el-radio-button",{attrs:{label:"autonomousRegion"}},[e._v("自治区")]),i("el-radio-button",{attrs:{label:"provinceLevelCity"}},[e._v("直辖市")])],1)],1),i("el-checkbox-group",{staticStyle:{"margin-left":"50px"},model:{value:e.dialog.checkList,callback:function(t){e.$set(e.dialog,"checkList",t)},expression:"dialog.checkList"}},[i("el-row",e._l(e.province,(function(t,a){return i("el-col",{key:a,attrs:{span:6}},[i("el-checkbox",{attrs:{label:t.code,disabled:e.dialog.disableList.includes(t.code)}},[e._v(e._s(t.name))])],1)})),1)],1),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.freightDialogSubmit(e.dialog.index)}}},[e._v("确 定")])],1)],1)],1)}),[],!1,null,"213654dc",null).exports},props:{id:{type:[Number,String],default:""}},data:function(){return{loading:!1,form:{id:this.id,title:"",address:[],type:1,status:!0,first_step:"",first_price:"",continued_step:"",continued_price:"",infos:[]},rules:{title:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},mounted:function(){""!=this.form.id&&this.getInfo()},methods:{getInfo:function(){var e=this;this.loading=!0,this.$api.get("mock/pages_example/shop/delivery/detail",{params:{id:this.form.id}}).then((function(t){e.loading=!1,Object.assign(e.form,t.data)}))},submit:function(e){var t=this;""==this.form.id?this.$refs.form.validate((function(i){i&&t.$api.post("mock/pages_example/shop/delivery/create",t.form).then((function(){t.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):this.$refs.form.validate((function(i){i&&t.$api.post("mock/pages_example/shop/delivery/edit",t.form).then((function(){t.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}},s=(i("0eae"),Object(l.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px","label-suffix":"："}},[i("el-form-item",{attrs:{label:"名称",prop:"title"}},[i("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"发货地址",prop:"address"}},[i("cascader-area",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),i("el-form-item",{attrs:{label:"计价方式"}},[i("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[i("el-radio-button",{attrs:{label:1}},[e._v("按件数")]),i("el-radio-button",{attrs:{label:2}},[e._v("按重量")])],1)],1),i("el-form-item",{attrs:{label:"运费模版"}},[i("div",{staticClass:"freight"},[i("el-card",{attrs:{shadow:"never"}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("默认运费")]),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{md:6}},[i("el-input",{attrs:{size:"small"},model:{value:e.form.first_step,callback:function(t){e.$set(e.form,"first_step",t)},expression:"form.first_step"}},[i("template",{slot:"prepend"},[e._v(e._s(1==e.form.type?"首件":"首重"))]),i("template",{slot:"append"},[e._v(e._s(1==e.form.type?"件":"kg"))])],2)],1),i("el-col",{attrs:{md:6}},[i("el-input",{attrs:{size:"small"},model:{value:e.form.first_price,callback:function(t){e.$set(e.form,"first_price",t)},expression:"form.first_price"}},[i("template",{slot:"prepend"},[e._v("首费")]),i("template",{slot:"append"},[e._v("元")])],2)],1),i("el-col",{attrs:{md:6}},[i("el-input",{attrs:{size:"small"},model:{value:e.form.continued_step,callback:function(t){e.$set(e.form,"continued_step",t)},expression:"form.continued_step"}},[i("template",{slot:"prepend"},[e._v(e._s(1==e.form.type?"续件":"续重"))]),i("template",{slot:"append"},[e._v(e._s(1==e.form.type?"件":"kg"))])],2)],1),i("el-col",{attrs:{md:6}},[i("el-input",{attrs:{size:"small"},model:{value:e.form.continued_price,callback:function(t){e.$set(e.form,"continued_price",t)},expression:"form.continued_price"}},[i("template",{slot:"prepend"},[e._v("续费")]),i("template",{slot:"append"},[e._v("元")])],2)],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:24}},[i("Freight",{attrs:{data:e.form.infos,type:e.form.type}})],1)],1)],1)]),i("el-form-item",{attrs:{label:"是否启用"}},[i("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[i("el-radio-button",{attrs:{label:!0}},[e._v("启用")]),i("el-radio-button",{attrs:{label:!1}},[e._v("停用")])],1)],1)],1)],1)}),[],!1,null,"bada42d8",null));t.a=s.exports},"49c2":function(e,t,i){},"4d47":function(e,t,i){"use strict";i.r(t);i("99af"),i("caad"),i("b0c0"),i("ac1f"),i("841c");var a={data:function(){return{loading:!1,sort:null,order:null,pagination:{page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper"}}},methods:{getParams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={from:(this.pagination.page-1)*this.pagination.size,limit:this.pagination.size};return this.sort&&this.order&&(t.sort=this.sort,t.order=this.order),Object.assign(t,e),t},onSizeChange:function(e){this.pagination.size=e,this.getDataList()},onCurrentChange:function(e){this.pagination.page=e,this.getDataList()},onSortChange:function(e){e.order?(this.sort=e.prop,this.order="ascending"===e.order?"asc":"desc"):(this.sort=null,this.order=null),this.getDataList()}}},o=i("5530"),l=i("31e1"),n={components:{DetailForm:l.a},props:Object(o.a)(Object(o.a)({},l.a.props),{},{visible:{type:Boolean,default:!1}}),computed:{myVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}}},methods:{onSubmit:function(){var e=this;this.$refs.form.submit((function(){e.$emit("success"),e.onCancel()}))},onCancel:function(){this.myVisible=!1}}},s=i("2877"),r={name:"PagesExampleDeliveryList",components:{FormDialog:Object(s.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{attrs:{visible:e.myVisible,title:""==e.id?"新增运费模版":"编辑运费模版",width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},on:{"update:visible":function(t){e.myVisible=t}}},[e.myVisible?i("DetailForm",e._b({ref:"form"},"DetailForm",e.$props,!1)):e._e(),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.onCancel}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)],1)}),[],!1,null,null,null).exports},mixins:[a],beforeRouteEnter:function(e,t,i){i((function(e){e.$store.state.settings.enableTabbar||e.dialogMode||e.$store.commit("keepAlive/add","PagesExampleDeliveryList")}))},beforeRouteLeave:function(e,t,i){this.$store.state.settings.enableTabbar||this.dialogMode||["PagesExampleDeliveryDetail"].includes(e.name)||this.$store.commit("keepAlive/remove","PagesExampleDeliveryList"),i()},data:function(){return{dialogMode:!1,detailFormDialog:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]}},mounted:function(){var e=this;this.getDataList(),this.dialogMode||this.$eventBus.$on("get-data-list",(function(){e.getDataList()}))},beforeDestroy:function(){this.dialogMode||this.$eventBus.$off("get-data-list")},methods:{getDataList:function(){var e=this;this.loading=!0;var t=this.getParams();this.search.title&&(t.title=this.search.title),this.$api.get("mock/pages_example/shop/delivery/list",{params:t}).then((function(t){e.loading=!1,e.dataList=t.data.list,e.pagination.total=t.data.total}))},onCreate:function(){this.dialogMode?(this.detailFormDialog.id="",this.detailFormDialog.visible=!0):this.$router.push({name:"pagesExampleShopDeliveryCreate"})},onEdit:function(e){this.dialogMode?(this.detailFormDialog.id=e.id,this.detailFormDialog.visible=!0):this.$router.push({name:"pagesExampleShopDeliveryEdit",params:{id:e.id}})},onDel:function(e){var t=this;this.$confirm("确认删除「".concat(e.title,"」吗？"),"确认信息").then((function(){t.$api.post("mock/pages_example/shop/delivery/delete",{id:e.id}).then((function(){t.getDataList(),t.$message.success({message:"模拟删除成功",center:!0})}))})).catch((function(){}))},onChangeStatus:function(e,t){var i=this;this.$confirm("确认".concat(e?"启用":"停用","「").concat(t.title,"」运费模版吗？"),"确认信息").then((function(){i.$api.post("mock/pages_example/shop/delivery/change/status",{id:t.id,status:e}).then((function(){i.$message.success({message:"模拟".concat(e?"启用":"停用","成功"),center:!0})}))})).catch((function(){t.status=!e}))}}},c=(i("09c6"),Object(s.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("page-header",{attrs:{title:"运费模版管理"}}),i("page-main",[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.onCreate}},[e._v("新增运费模版")]),i("search-bar",[i("el-form",{attrs:{model:e.search,size:"small","label-width":"100px","label-suffix":"："}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"模版名称"}},[i("el-input",{attrs:{placeholder:"请输入模版名称，支持模糊查询",clearable:""},on:{clear:e.getDataList},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList(t)}},model:{value:e.search.title,callback:function(t){e.$set(e.search,"title",t)},expression:"search.title"}})],1)],1)],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getDataList}},[e._v("筛 选")])],1)],1)],1),e.batch.enable?i("batch-action-bar",{attrs:{data:e.dataList,"selection-data":e.batch.selectionDataList},on:{"check-all":function(t){return e.$refs.table.toggleAllSelection()},"check-null":function(t){return e.$refs.table.clearSelection()}}},[i("el-button",{attrs:{size:"small"}},[e._v("单个批量操作按钮")]),i("el-button-group",[i("el-button",{attrs:{size:"small"}},[e._v("批量操作按钮组1")]),i("el-button",{attrs:{size:"small"}},[e._v("批量操作按钮组2")])],1)],1):e._e(),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticClass:"list-table",attrs:{data:e.dataList,border:"",stripe:"","highlight-current-row":""},on:{"sort-change":e.onSortChange,"selection-change":function(t){e.batch.selectionDataList=t}}},[e.batch.enable?i("el-table-column",{attrs:{type:"selection",width:"40"}}):e._e(),i("el-table-column",{attrs:{prop:"title",label:"模版名称"}}),i("el-table-column",{attrs:{label:"开启状态",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-switch",{on:{change:function(i){return e.onChangeStatus(i,t.row)}},model:{value:t.row.status,callback:function(i){e.$set(t.row,"status",i)},expression:"scope.row.status"}})]}}])}),i("el-table-column",{attrs:{label:"操作",width:"250",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(i){return e.onEdit(t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{type:"danger",size:"mini",plain:""},on:{click:function(i){return e.onDel(t.row)}}},[e._v("删除")])]}}])})],1),i("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.pagination.page,total:e.pagination.total,"page-size":e.pagination.size,"page-sizes":e.pagination.sizes,layout:e.pagination.layout,"hide-on-single-page":!1,background:""},on:{"size-change":e.onSizeChange,"current-change":e.onCurrentChange}})],1),i("FormDialog",{attrs:{id:e.detailFormDialog.id,visible:e.detailFormDialog.visible},on:{"update:visible":function(t){return e.$set(e.detailFormDialog,"visible",t)},success:e.getDataList}})],1)}),[],!1,null,"29fb4194",null));t.default=c.exports},"731b":function(e,t,i){"use strict";i("79ad")},"79ad":function(e,t,i){},8168:function(e,t,i){},"8fe0":function(e,t,i){"use strict";i.r(t);var a={name:"PagesExampleDeliveryDetail",components:{DetailForm:i("31e1").a},data:function(){return{}},mounted:function(){},methods:{onSubmit:function(){var e=this;this.$refs.form.submit((function(){e.$eventBus.$emit("get-data-list"),e.$router.back()}))},onCancel:function(){this.$router.back()}}},o=(i("c6de"),i("2877")),l=Object(o.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("page-header",{attrs:{title:"pagesExampleShopDeliveryCreate"==e.$route.name?"新增运费模版":"编辑运费模版"}},[i("el-button",{attrs:{icon:"el-icon-arrow-left",size:"mini",round:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返 回")])],1),i("page-main",[i("el-row",[i("el-col",{attrs:{md:24,lg:16}},[i("DetailForm",{ref:"form",attrs:{id:e.$route.params.id}})],1)],1)],1),i("fixed-action-bar",[i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提 交")]),i("el-button",{on:{click:e.onCancel}},[e._v("取 消")])],1)],1)}),[],!1,null,"d92a0e70",null);t.default=l.exports},c6de:function(e,t,i){"use strict";i("1899")},e6f2:function(e,t,i){"use strict";i.r(t);i("99af"),i("4de4"),i("4160"),i("caad"),i("2532"),i("159b");var a={data:function(){return{authorizationList:[{name:"站点管理",module:"station",authorization_list:[{name:"查看详情",module:"info"},{name:"停用",module:"disabled"},{name:"编辑",module:"edit"},{name:"启用",module:"enable"},{name:"查看列表",module:"list"}]},{name:"部门管理",module:"department",authorization_list:[{name:"删除",module:"delete"},{name:"编辑",module:"edit"},{name:"查看详情",module:"info"},{name:"查看列表",module:"list"},{name:"新增",module:"new"}]},{name:"职位管理",module:"department_job",authorization_list:[{name:"查看列表",module:"list"},{name:"新增",module:"new"},{name:"编辑",module:"edit"},{name:"删除",module:"delete"},{name:"查看详情",module:"info"}]},{name:"角色管理",module:"role",authorization_list:[{name:"删除",module:"delete"},{name:"编辑",module:"edit"},{name:"查看详情",module:"info"},{name:"查看列表",module:"list"},{name:"新增",module:"new"}]},{name:"管理员管理",module:"admin_manager",authorization_list:[{name:"编辑权限",module:"authorization_edit"},{name:"查看权限详情",module:"authorization_info"},{name:"删除",module:"delete"},{name:"停用",module:"disabled"},{name:"编辑",module:"edit"},{name:"启用",module:"enable"},{name:"查看详情",module:"info"},{name:"查看列表",module:"list"},{name:"新增",module:"new"},{name:"重置密码",module:"reset"}]}],form:{name:"",brief:"",authorization_list:[]},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],authorization_list:[{validator:function(e,t,i){0==t.length?i(new Error("至少选择一个权限")):i()},trigger:"change"}]}}},computed:{checkAll:function(){var e=this,t=[];return this.authorizationList.forEach((function(i){var a=[];i.authorization_list.forEach((function(t){e.form.authorization_list.includes("".concat(i.module,".").concat(t.module))&&a.push("".concat(i.module,".").concat(t.module))})),t.push({checkAll:a.length==i.authorization_list.length,indeterminate:a.length>0&&a.length<i.authorization_list.length})})),t}},mounted:function(){},methods:{handleCheckAll:function(e,t){var i=this;e?this.authorizationList[t].authorization_list.forEach((function(e){i.form.authorization_list.includes("".concat(i.authorizationList[t].module,".").concat(e.module))||i.form.authorization_list.push("".concat(i.authorizationList[t].module,".").concat(e.module))})):this.authorizationList[t].authorization_list.forEach((function(e){i.form.authorization_list=i.form.authorization_list.filter((function(a){return a!="".concat(i.authorizationList[t].module,".").concat(e.module)}))}))}}},o=i("2877"),l=Object(o.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("page-header",{attrs:{title:"权限",content:"该页面生成的权限格式，可直接用于本项目的权限模式"}}),i("page-main",[i("el-row",[i("el-col",{attrs:{md:24,lg:16}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px","label-suffix":"："}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"简介"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6},placeholder:"请输入角色简介"},model:{value:e.form.brief,callback:function(t){e.$set(e.form,"brief",t)},expression:"form.brief"}})],1),i("el-form-item",{attrs:{label:"权限",prop:"authorization_list"}},[i("el-table",{staticStyle:{"line-height":"normal"},attrs:{data:e.authorizationList,border:"",stripe:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"name",width:"200",label:"模块"}}),i("el-table-column",{attrs:{label:"权限"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-row",{attrs:{type:"flex",align:"middle"}},[i("el-col",[i("el-checkbox-group",{model:{value:e.form.authorization_list,callback:function(t){e.$set(e.form,"authorization_list",t)},expression:"form.authorization_list"}},e._l(t.row.authorization_list,(function(a){return i("el-checkbox",{key:t.row.module+"."+a.module,attrs:{label:t.row.module+"."+a.module}},[e._v(e._s(a.name))])})),1)],1),i("el-col",{staticStyle:{flex:"1","margin-left":"20px"}},[i("el-checkbox",{attrs:{border:"",size:"small",indeterminate:e.checkAll[t.$index].indeterminate},on:{change:function(i){return e.handleCheckAll(i,t.$index)}},model:{value:e.checkAll[t.$index].checkAll,callback:function(i){e.$set(e.checkAll[t.$index],"checkAll",i)},expression:"checkAll[scope.$index].checkAll"}},[e._v("全选")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);