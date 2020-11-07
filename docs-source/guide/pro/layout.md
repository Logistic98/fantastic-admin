---
lang: zh-CN
---

# 布局

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

![](/fantastic-admin/layout_1.gif)

**自适应（有最小宽度）**

![](/fantastic-admin/layout_2.gif)

**定宽居中**

![](/fantastic-admin/layout_3.gif)

**定宽居中（有最大宽度）**

![](/fantastic-admin/layout_4.gif)

将扩展的 4 套布局和基础版原有的 3 套布局进行组合搭配，可实现 12 套布局，如果再搭配默认提供的 5 款主题，**即可实现 60 种界面风格**。