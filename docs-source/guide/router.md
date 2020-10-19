---
lang: zh-CN
---

# 路由

## 配置项

框架的核心是通过路由自动生成对应导航，所以除了路由的基本配置，还需要了解框架提供了哪些配置项：

```js
// 所有的导航配置项均放在路由的 meta 对象中
meta: {
    // 该路由在侧边栏导航和面包屑导航中展示的标题
    title: '新闻列表',
    // 侧边栏导航中显示的图标，图标使用 <svg-icon /> 组件展示
    icon: 'news',
    // 该路由进入的权限，支持多个权限叠加，只要满足一个，即可进入
    // 如果用户没有该权限，则该路由不会在侧边栏导航中展示
    auth: ['news.browse', 'news.edit'],
    // 该路由是否在侧边栏导航中展示，如编辑页面 /edit/:id ，默认为 true
    sidebar: false,
    // 该路由是否在面包屑导航中展示，默认为 true
    breadcrumb: false,
    // 当路由设置了该属性，则会高亮相对应的侧边栏，一般会搭配 sidebar: false 一起使用
    // 例如从新闻列表进入新闻详情页，由于新闻详情页路由不在侧边栏导航中展示，这时你如果想高亮新闻列表的路由，就可以进行如下设置
    activeMenu: '/news/list'
}
```

示例：

```js
import Layout from '@/layout'

export default {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'banner',
    meta: {
        title: 'Banner 管理',
        icon: 'banner',
        auth: ['banner.browse']
    },
    children: [
        {
            path: 'detail',
            name: 'bannerCreate',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
            meta: {
                title: '新增 Banner',
                auth: ['banner.create']
            }
        },
        {
            path: 'list',
            name: 'bannerList',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/list'),
            meta: {
                title: 'Banner 列表',
                auth: ['banner.browse']
            }
        },
        {
            path: 'detail/:id',
            name: 'bannerEdit',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
            meta: {
                title: '编辑 Banner',
                auth: ['banner.edit'],
                sidebar: false,
                activeMenu: '/banner/list'
            }
        }
    ]
}
```

展示效果如下：

![](/fantastic-admin/breadcrumb1.gif)

## 扩展

客户总是有自己的想法，例如我司就遇到了这样的需求，在不改变侧边栏导航结构的前提下，面包屑导航希望能变成这样：

![](/fantastic-admin/breadcrumb2.gif)

其实根据图中的效果，可以确定路由需要有三层，剩下就是通过配置项去控制侧边栏导航和面包屑导航是否展示。

```js
import Layout from '@/layout'
import KeepAliveLayout from '@/layout/keepAlive'

export default {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'banner',
    meta: {
        title: 'Banner 管理',
        icon: 'banner',
        auth: ['banner.browse']
    },
    children: [
        {
            path: 'detail',
            redirect: '/banner/list/detail',
            meta: {
                title: '新增 Banner',
                auth: ['banner.create']
            }
        },
        {
            path: 'list',
            name: 'bannerList',
            component: KeepAliveLayout,
            redirect: '/banner/list',
            meta: {
                title: 'Banner 列表',
                auth: ['banner.browse']
            },
            children: [
                {
                    path: 'detail',
                    name: 'bannerCreate',
                    component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
                    meta: {
                        title: '新增 Banner',
                        auth: ['banner.create'],
                        sidebar: false,
                        activeMenu: '/banner/detail'
                    }
                },
                {
                    path: '',
                    name: 'bannerList',
                    component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/list'),
                    meta: {
                        title: 'Banner 列表',
                        auth: ['banner.browse'],
                        sidebar: false,
                        breadcrumb: false
                    }
                },
                {
                    path: 'detail/:id',
                    name: 'bannerEdit',
                    component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
                    meta: {
                        title: '编辑 Banner',
                        auth: ['banner.edit'],
                        sidebar: false,
                        activeMenu: '/banner/list'
                    }
                }
            ]
        }
    ]
}
```

> 这个需求其实在学习 vue-element-admin 就想到过，也给作者提过 issue ([#1426](https://github.com/PanJiaChen/vue-element-admin/issues/1426))，不过作者并没给我更好的解决方案

## 嵌套路由

上面的扩展例子里，引用了一个 `KeepAliveLayout` 组件，查看代码可以看到这是一个空白的 layout 页面。

```html
<template>
    <div>
        <transition name="main" mode="out-in">
            <keep-alive :include="$store.state.keepAlive.list">
                <RouterView />
            </keep-alive>
        </transition>
    </div>
</template>
```

为什么需要这个呢？因为嵌套路由生成出来的导航栏目也是嵌套结构的，但导航栏目里的模块页面一般是不需要嵌套的，所以除了顶级路由需要设置 `component: Layout` ，嵌套有 `children` 属性的子项路由，均可设置 `component: KeepAliveLayout` 。当然如果你的页面确实有嵌套展示的需求，可不按照这种方式操作。