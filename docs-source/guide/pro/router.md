---
lang: zh-CN
---

# 路由

除了基础版提供的配置项，专业版还扩展提供了以下配置：

```js
meta: {
    // 导航标记，支持 boolean,number,string 三种类型
    // boolean 类型展示形式为点，当值为 false 时隐藏
    // number 类型展示形式为文本，当值小于等于 0 时隐藏
    // string 类型展示形式为文本，当值为空时隐藏
    // 如果标记需要动态更新，请设置为函数形式，并传入外部变量，例如搭配 vuex 一起使用
    // badge: () => store.state.global.number
    badge: true,
    // 内嵌网页链接，如果要开启内嵌网页，component 需要设置为框架提供的 layoue/iframe.vue
    link: '',
    // 该路由是否显示底部版权信息，比全局设置里的 showCopyright 优先级高，不设置则继承全局里的设置
    copyright: false,
    // 该路由是否需要空出距离底部距离，默认无需设置
    // 当使用类似 FixedActionBar 这类通过 position: fixed 固定在底部的组件或 DOM 时，需要手动设置，目的是为了防止页面底部可能被遮挡
    paddingBottom: '80px'
}
```

以上配置在专业版演示代码里均有体现。