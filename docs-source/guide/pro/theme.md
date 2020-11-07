---
lang: zh-CN
---

# 主题

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