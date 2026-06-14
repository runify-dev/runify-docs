---
title: 数据源
sidebar_label: 数据源
---

# 数据源

## 1 功能说明

数据源模块用于统一管理数据库和缓存连接。你可以在这里新建数据源、修改连接信息，并查看 SQL 类型数据源的表和列信息。

---

## 2 页面说明

数据源页面由两部分组成：

| 区域 | 说明 |
| --- | --- |
| 左侧目录树 | 管理文件夹和数据源 |
| 右侧内容区 | 查看列表、创建数据源、编辑详情 |

### 2.1 列表页

列表页中主要包含：

- 搜索框
- 新建数据源
- 数据源卡片
- 卡片操作菜单

![数据源页面](/img/manual/datasource/datasource.png)

---

## 3 操作步骤

### 3.1 新建数据源

1. 进入 **数据源** 页面。
2. 在左侧选择目标文件夹。
3. 点击右上角 **新建数据源**。

![新建数据源按钮](/img/manual/datasource/datasource-add.png)

也可以从左侧目录树中创建：

1. 在左侧找到目标文件夹。
2. 点击节点右侧操作菜单。
3. 选择 **创建**。
4. 选择 **数据源**。

![目录树菜单](/img/manual/datasource/datasource-tree-menu.png)

5. 填写名称。
6. 选择数据源类型。
7. 选择供应商。
8. 填写连接信息。
9. 点击 **创建**。

![新建数据源弹窗](/img/manual/datasource/datasource-create-dialog.png)

### 3.2 选择类型和供应商

当前页面支持先选择数据源类型，再选择供应商。

常见类型：

- SQL
- CACHE

![数据源类型](/img/manual/datasource/datasource-type-select.png)

![供应商和连接信息](/img/manual/datasource/datasource-provider-form.png)

### 3.3 查看和修改数据源

打开数据源后，可以在详情页修改名称、类型、供应商和连接信息。

1. 在列表中点击数据源卡片。
2. 或点击卡片右上角菜单后进入详情。
3. 修改信息后点击右上角 **保存**。

![查看数据源详情](/img/manual/datasource/datasource-show-details.png)
![数据源详情](/img/manual/datasource/datasource-details.png)

### 3.4 删除数据源

1. 将鼠标移到数据源卡片上。
2. 点击右上角菜单按钮。
3. 选择 **删除**。
4. 在确认框中再次确认。

![删除数据源](/img/manual/datasource/datasource-delete.png)

### 3.5 查看表和列

SQL 类型数据源支持查看表信息。

1. 打开数据源详情页。
2. 在表信息区域查看表列表。
3. 点击 **查看列** 查看字段详情。

![表信息](/img/manual/datasource/datasource-tables.png)

![列信息](/img/manual/datasource/datasource-columns-drawer.png)
