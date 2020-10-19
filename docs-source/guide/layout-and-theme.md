---
lang: zh-CN
---

# 布局/主题

:::warning 注意
专业版扩展了布局模式，重构了主题代码，所以下面介绍中**主题**部分不适用于专业版，专业版请查看：《[专业版 - 布局/主题](../pro/layout-and-theme)》
:::

## 布局

通过两处设置可实现 3 套不同的页面布局，分别是**双侧边栏布局**、**单侧边栏布局**、**头部导航布局**。

项目默认显示**双侧边栏布局**，即区分主导航和次导航，展示效果如下：

![](/basic-layout-default.png)

如果要调整为**单侧边栏布局**，则需要到 `./src/router/index.js` 路由配置文件里找到下面这段代码，并注释掉高亮部分代码。

```js {22}
// 当 children 不为空的主导航只有一项时，则隐藏
let asyncRoutes = [
    {
        meta: {
            title: '默认',
            icon: 'sidebar-default'
        },
        children: [
            MultilevelMenuExample,
            BreadcrumbExample,
            KeepAliveExample,
            ComponentExample,
            PermissionExample
        ]
    },
    {
        meta: {
            title: '其它',
            icon: 'sidebar-other'
        },
        children: [
            // ExTernalLinkExample
        ]
    }
]
```

**单侧边栏布局**其实就是去掉了主导航，当只有一个主导航，或者其它主导航下面都没有次导航的时候，布局就自动切换为**单侧边栏布局**，展示效果如下：

![](/basic-layout-without-main-sidebar.png)

**头部导航布局**只需在 `./src/setting.js` 设置 `showHeader: true` 即可，展示效果如下：

![](/basic-layout-header.png)

:::tip 注意
同时设置**单侧边栏布局**和**头部导航布局**，在头部区域也不会展示主导航内容。
:::

## 主题

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
