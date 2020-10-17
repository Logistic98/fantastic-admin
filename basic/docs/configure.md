# 配置

> 请先阅读 vue-automation 的[配置](https://eoner.gitee.io/vue-automation/#/configure)章节

模版的配置存放在 `src/setting.js` 文件里，如下：

```js
export default {
    /**
     * 是否开启权限功能，权限功能提供以下鉴权支持：
     * 1、路由鉴权
     * 2、鉴权组件：<Auth></Auth>、<AuthAll></AuthAll>
     * 3、鉴权指令：v-auth、v-auth-all
     * 4、鉴权函数：this.$auth()、this.$authAll()
     */
    openPermission: false,
    // 是否显示头部
    showHeader: false,
    // 是否显示底部版权信息，同时在路由 meta 对象里可以单独设置某个路由是否显示底部版权信息
    showCopyright: true,
    // 版权信息配置，格式为：Copyright © [dates] <company>
    copyrightDates: '2020',
    copyrightCompany: '浙江易网科技股份有限公司',
    copyrightWebsite: 'http://1one.cn/',
    // 是否开启导航搜索
    enableNavSearch: true,
    // 是否开启全屏
    enableFullscreen: false,
    // 是否开启页面刷新
    enablePageReload: false,
    // 是否开启载入进度条
    enableProgress: true,
    // 是否开启动态标题
    enableDynamicTitle: false,
    // 是否开启控制台
    enableDashboard: true,
    // 控制台名称
    dashboardTitle: '控制台',
    // 是否在非开发环境开启错误日志功能，具体业务代码在 ./util/error.log.js
    enableErrorLog: false,
    // 是否开启主题配置（建议在生产环境关闭）
    enableThemeSetting: true
}
```

其中是否开启权限功能和是否显示头部，分别在[路由](router)和[布局](layout)章节有详细介绍。
