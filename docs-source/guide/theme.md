---
lang: zh-CN
---

# 主题

:::warning 注意
专业版重构了主题实现代码，请直接移步至：《[专业版 - 主题](pro/theme)》
:::

基础版只提供一套主题，但可自行修改关键颜色变量，实现主题自定义，相关代码在 `./src/assets/styles/resources/variables.scss` 里。

```scss
// 应用背景色
$g-app-bg: #fff;
// 主区域背景色
$g-main-bg: #f5f7f9;

// 头部背景色
$g-header-bg: #736477;
// 头部导航文字颜色
$g-header-menu-color: #fff;
// 头部导航选中颜色
$g-header-menu-active-bg: lighten($g-header-bg, 10);

// 主侧边栏背景色
$g-main-sidebar-bg: #736477;
// 主侧边栏文字颜色
$g-main-sidebar-menu-color: #fff;
// 主侧边栏菜单选中背景色
$g-main-sidebar-menu-active-bg: lighten($g-main-sidebar-bg, 10);

// 次侧边栏背景色
$g-sub-sidebar-bg: #ddcdcd;
// 次侧边栏菜单文字颜色
$g-sub-sidebar-menu-color: #89768f;
// 次侧边栏菜单文字选中颜色
$g-sub-sidebar-menu-active-color: darken($g-sub-sidebar-menu-color, 30);
// 次侧边栏菜单选中背景色
$g-sub-sidebar-menu-active-bg: #b5a5a5;
```

:::tip 注意
该文件里你还可对布局的宽高进行调整。
```scss
// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）
$g-header-width: 100%;
// 头部高度
$g-header-height: 70px;
// 面包屑高度（同时也是侧边栏Logo区域的高度）
$g-breadcrumb-height: 50px;
// 侧边栏宽度
$g-main-sidebar-width: 60px;
$g-sub-sidebar-width: 220px;
$g-sidebar-width: var(--real-sidebar-width);
```
:::