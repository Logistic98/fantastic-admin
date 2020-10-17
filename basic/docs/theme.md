# 主题

主题配置存放在 `src/assets/styles/resources/variables.scss` 文件中，其实就是一些 scss 的变量：

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

// 应用背景色
$g-app-bg: #fff;
// 主区域背景色
$g-main-bg: #f5f7f9;

// 头部背景色
$g-header-bg: #736477;
// 头部导航文字颜色
$g-header-menu-color: #fff;
// 头部导航选中颜色
$g-header-menu-active-bg: $g-header-bg + 20;

// 主侧边栏背景色
$g-main-sidebar-bg: #736477;
// 主侧边栏文字颜色
$g-main-sidebar-menu-color: #fff;
// 主侧边栏菜单选中背景色
$g-main-sidebar-menu-active-bg: $g-main-sidebar-bg + 20;

// 次侧边栏背景色
$g-sub-sidebar-bg: #ddcdcd;
// 次侧边栏菜单文字颜色
$g-sub-sidebar-menu-color: #89768f;
// 次侧边栏菜单文字选中颜色
$g-sub-sidebar-menu-active-color: $g-sub-sidebar-menu-color - 50;
// 次侧边栏菜单选中背景色
$g-sub-sidebar-menu-active-bg: #b5a5a5;
```
