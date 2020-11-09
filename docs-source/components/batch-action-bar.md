---
lang: zh-CN
---

# BatchActionBar 批量操作栏

## Props

| 参数          | 说明           | 类型  | 可选值 | 默认值 |
| :------------ | :------------- | :---- | :----- | :----- |
| data          | 列表完整数据源 | array | -      | []     |
| selectionData | 勾选列表数据源 | array | -      | []     |

## Slot

| name | 说明         |
| :--- | :----------- |
| -    | 批量操作按钮 |

## Event

| 事件名称  | 说明           | 回调参数       |
| :-------- | :------------- | :------------- |
| checkAll  | 当全选时触发   | (event: Event) |
| checkNull | 当全不选时触发 | (event: Event) |