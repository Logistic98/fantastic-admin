---
lang: zh-CN
---

# 布局

:::warning 注意
专业版扩展了布局模式，所以阅读完基础的 3 套布局后，移步至：《[专业版 - 布局](pro/layout)》
:::

通过两处设置可实现 3 套不同的页面布局，分别是**双侧边栏布局**、**单侧边栏布局**、**头部导航布局**。

## 双侧边栏布局

项目默认显示**双侧边栏布局**，即区分主导航和次导航，展示效果如下：

![](/fantastic-admin/basic-layout-default.png)

## 单侧边栏布局

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

## 头部导航布局

**单侧边栏布局**其实就是去掉了主导航，当只有一个主导航，或者其它主导航下面都没有次导航的时候，布局就自动切换为**单侧边栏布局**，展示效果如下：

![](/fantastic-admin/basic-layout-without-main-sidebar.png)

**头部导航布局**只需在 `./src/setting.js` 设置 `showHeader: true` 即可，展示效果如下：

![](/fantastic-admin/basic-layout-header.png)

:::tip 注意
同时设置**单侧边栏布局**和**头部导航布局**，在头部区域也不会展示主导航内容。
:::

## 移动端

本框架兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。

当页面宽度小于 `992px` 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。

:::tip 建议
由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。

依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。
:::
