---
lang: zh-CN
---

# 布局/主题

## 布局

在基础版 3 套页面布局的基础上，扩展了另一维度的 4 套布局，分别是**自适应**、**自适应（有最小宽度）**、**定宽居中**、**定宽居中（有最大宽度）**，可在配置文件中轻松设置。

```js
/**
 * 布局类型，当设置为非 adaption 时，请去 ./src/assets/styles/resources/layout.scss 里设置 $g-app-width
 * adaption 自适应
 * adaption-min-width 自适应（有最小宽度）
 * center 定宽居中
 * center-max-width 定宽居中（有最大宽度）
 */
layout: 'adaption'
```

下面简单演示这 4 套布局的特点（图片平均大小为 2M ，加载可能需要点时间）。

**自适应**

![](/layout_1.gif)

**自适应（有最小宽度）**

![](/layout_2.gif)

**定宽居中**

![](/layout_3.gif)

**定宽居中（有最大宽度）**

![](/layout_4.gif)

将扩展的 4 套布局和基础版原有的 3 套布局进行组合搭配，可实现 12 套布局，如果再搭配默认提供的 5 款主题，**即可实现 60 种界面风格**。

## 主题

框架提供了 5 款主题，在配置文件中就可轻松切换。

```js
/**
 * 主题，默认提供 5 款
 * default 默认
 * vue-cli Vue CLI 风格
 * gitee 码云风格
 * freshness 清新
 * elegant 素雅
 */
theme: 'default'
```

如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题，和基础版不同的是，专业版主题相关代码在 `./src/assets/styles/resources/themes.scss` 里。由于代码比较多，下面只截取部分。

```scss
$themes: (
    default: (
        // 主区域背景色
        g-main-bg: #f0f2f5,
        // 【头部】
        // 头部背景色
        g-header-bg: #222b45,
        // 头部导航文字颜色
        g-header-menu-color: #ccc,
        // 头部导航文字选中颜色
        g-header-menu-active-color: #fff,
        // 头部导航选中背景色
        g-header-menu-active-bg: #334067,
        ...
    ),
    vue-cli: (
        // 主区域背景色
        g-main-bg: #f0f2f5,
        // 【头部】
        // 头部背景色
        g-header-bg: #1d2935,
        // 头部导航文字颜色
        g-header-menu-color: #fff,
        // 头部导航文字选中颜色
        g-header-menu-active-color: #42b983,
        // 头部导航选中背景色
        g-header-menu-active-bg: #1f3039,
        ...
    ),
    ...
);
$theme-map: ();
@mixin themeify() {
    @each $theme-name, $map in $themes {
        $theme-map: $map !global;
        [data-theme=#{$theme-name}] & {
            @content;
        }
    }
}
@function themed($key) {
    @return map-get($theme-map, $key);
}
```

可以看到，所有主题都存放在 `$themes` 这个变量里，所以如果想创建一个新主题，你可以按照 `default` 复制一份，其中 `new-theme` 就是主题的名称，里面主题的配色可以自行修改。

```scss {16-29}
$themes: (
    default: (
        // 主区域背景色
        g-main-bg: #f0f2f5,
        // 【头部】
        // 头部背景色
        g-header-bg: #222b45,
        // 头部导航文字颜色
        g-header-menu-color: #ccc,
        // 头部导航文字选中颜色
        g-header-menu-active-color: #fff,
        // 头部导航选中背景色
        g-header-menu-active-bg: #334067,
        ...
    ),
    new-theme: (
        // 主区域背景色
        g-main-bg: #f0f2f5,
        // 【头部】
        // 头部背景色
        g-header-bg: #1d2935,
        // 头部导航文字颜色
        g-header-menu-color: #fff,
        // 头部导航文字选中颜色
        g-header-menu-active-color: #42b983,
        // 头部导航选中背景色
        g-header-menu-active-bg: #1f3039,
        ...
    ),
    ...
);
```