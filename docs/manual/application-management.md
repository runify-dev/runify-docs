---
title: 应用
sidebar_label: 应用
---

# 应用

## 1 功能说明

应用模块用于统一管理系统中的应用。你可以在这里创建不同类型的应用，维护应用目录，编辑应用配置，并查看概览和对话日志。

---

## 2 页面说明

应用页面由两部分组成：

| 区域 | 说明 |
| --- | --- |
| 左侧目录树 | 管理文件夹和应用 |
| 右侧内容区 | 查看应用列表、应用详情、设置和对话日志 |

### 2.1 列表页

列表页中主要包含：

- 搜索框
- 新建按钮
- 应用卡片
- 卡片操作菜单

![应用页面](/img/manual/application/application-home.png)

### 2.2 应用概览页

应用概览页中主要包含：

- 应用基础信息
- 公开链接
- 嵌入第三方
- 监控统计
- 消息量趋势
- Token 消耗趋势
- 最近提问

![应用概览](/img/manual/application/application-overview.png)

---

## 3 操作步骤

### 3.1 新建应用

1. 进入 **应用** 页面。
2. 在左侧选择目标文件夹。
3. 点击右上角 **新建**。
4. 选择需要创建的应用类型。

当前支持以下几种方式：

- 智能体应用
- 知识库应用
- 自定义应用
- 导入配置

![新建应用按钮](/img/manual/application/application-create-button.png)

也可以从左侧目录树中创建：

1. 在左侧找到目标文件夹。
2. 点击节点右侧操作菜单。
3. 选择 **创建 -> 应用** 或 **创建 -> 文件夹**。

![目录树菜单](/img/manual/application/application-tree-menu.png)

创建应用时，按页面提示填写应用名称、应用描述、应用图标，并按需开启 **允许匿名访问**。

![新建应用弹窗](/img/manual/application/application-create-dialog.png)

### 3.2 创建不同类型的应用

不同类型的应用对应不同的创建方式。
![智能体应用](/img/manual/application/application-agent-add.png)
1. 创建 **智能体应用** 时，需要先选择模型。
![智能体应用](/img/manual/application/application-agent-dialog-2.png)
2. 创建 **知识库应用** 时，需要先选择知识库和模型。
![知识库应用](/img/manual/application/application-knowledge-dialog.png)
3. 创建 **自定义应用** 时，直接填写基础信息后创建。
![知识库应用](/img/manual/application/application-customize-dialog.png)
4. 创建 **导入配置** 时，选择本地 JSON 文件后导入。

![导入配置](/img/manual/application/application-import.png)

### 3.3 修改应用

修改应用基础信息：
1. 在应用列表页将鼠标移到目标应用卡片上。
2. 点击右上角菜单按钮。
3. 选择 **编辑**。
4. 在弹窗中修改应用名称、描述、图标或匿名访问配置。
5. 点击 **保存**。

![应用设置](/img/manual/application/application-setting.png)

### 3.4 打开应用和了解应用画布

1. 在列表中点击应用卡片。
2. 或点击卡片右上角菜单后选择 **打开**。
3. 打开后，可以在左侧菜单中切换 **概览**、**设置** 和 **对话日志**。
4. 点击 **概览** 时，可以查看应用名称、应用 ID、更新时间、公开链接、嵌入第三方、对话数、消息总数、平均响应时间、Token 消耗、消息量趋势、Token 消耗趋势和最近提问。

![打开应用](/img/manual/application/application-open.png)
![应用菜单](/img/manual/application/application-menu.png)

### 3.5 应用工作流

应用的设置页主要用于编辑工作流画布。画布中通常会包含默认的开始节点，后续节点需要按业务流程继续补充。

画布页中主要包含以下内容：

| 区域 | 说明 |
| --- | --- |
| 画布区域 | 用于摆放节点和连接流程 |
| 节点配置区域 | 选中节点后，用于填写该节点的参数 |
| 右上角操作区 | 包含保存和调试 |
| 右下角工具栏 | 包含缩放、适应屏幕、自动布局、拖拽模式、框选模式和全屏 |

![应用画布](/img/manual/application/application-show-editor.png)

1. 打开目标应用。
2. 进入设置页后，在画布中查看当前节点流程。
3. 选中节点后，按页面提示修改节点参数。
4. 在节点连接点上继续添加下一个节点。
5. 按需要调整节点位置和连线顺序。
6. 点击右上角 **保存** 保存当前工作流。
7. 点击右上角 **调试** 可以进入调试对话。

![应用编辑页](/img/manual/application/application-editor.png)
![应用调试](/img/manual/application/application-debug.png)

### 3.6 使用画布工具栏

右下角工具栏用于调整画布视图和操作模式。

1. 点击 **放大** 或 **缩小** 调整画布比例。
2. 点击 **适应屏幕**，让当前流程自动回到合适视图。
3. 点击 **自动布局**，让节点按系统推荐方式重新排列。
4. 点击 **拖拽模式**，可以拖动画布和节点。
5. 点击 **框选模式**，可以批量框选节点。
6. 点击 **全屏**，进入全屏画布模式。

![画布工具栏](/img/manual/application/application-canvas-toolbar.png)

### 3.7 查看历史对话记录

1. 进入应用后，点击左侧菜单中的 **对话日志**。
2. 在对话日志页查看历史对话记录。

![对话日志](/img/manual/application/application-conversation-log.png)

### 3.8 删除或导出应用

1. 将鼠标移到应用卡片上。
2. 点击右上角菜单按钮。
3. 选择 **编辑**、**删除** 或 **导出**。
4. 删除时，在确认框中再次确认。

![删除应用](/img/manual/application/application-delete.png)

---

## 4 画布节点说明

应用画布中的节点主要分为 `AI`、`AI 工具`、`数据`、`控制流` 和 `工具` 五类。

![节点菜单](/img/manual/application/application-node-menu.png)

### 4.1 开始节点

| 节点 | 作用 |
| --- | --- |
| 开始节点 | 工作流的起点，用于接收用户问题、上下文、图片、视频等输入内容 |

![开始节点](/img/manual/application/application-node-start.png)


### 4.2 AI

| 节点 | 作用 |
| --- | --- |
| AI 对话 | 调用模型生成回答，适合处理问答、总结、改写和推理 |

![AI节点](/img/manual/application/application-node-ai.png)


### 4.3 AI 工具

| 节点 | 作用 |
| --- | --- |
| 终端执行 | 执行终端命令，适合处理命令行任务 |
| 读取文件 | 读取指定文件内容，适合在流程中获取文件文本 |
| 目录列表 | 查看目录结构，适合先了解文件夹内容 |
| 文件搜索 | 按文件名或路径模式搜索文件 |
| 内容搜索 | 在文件内容中搜索关键字 |
| 数据修补 | 按补丁内容修改文件 |
| 文件下载 | 下载文件到指定位置 |
| 文件上传 | 上传本地文件并返回文件信息 |
| 创建文件 | 在指定位置新建文件并写入内容 |
| 技能列表 | 查看当前可用技能 |
| 技能下载 | 下载指定技能到本地 |
| 技能执行 | 执行指定技能或技能命令 |

![AI工具](/img/manual/application/application-node-tools.png)

### 4.4 数据

| 节点 | 作用 |
| --- | --- |
| 数据库检索 | 查询数据库中的数据 |
| 数据库插入 | 向数据库写入数据 |
| 缓存查询 | 从缓存中读取数据 |
| 缓存写入 | 向缓存中写入数据 |
| 知识检索 | 从知识库中检索相关内容 |

![AI工具](/img/manual/application/application-node-data.png)


### 4.5 控制流

| 节点 | 作用 |
| --- | --- |
| 条件判断 | 根据条件分支走不同流程 |
| 循环 | 对列表数据或重复任务进行循环处理 |
| 循环开始 | 进入循环体后的起始节点，通常在循环内部使用 |
| 循环跳过 | 满足条件时跳过本次循环 |
| 跳出循环 | 满足条件时提前结束循环 |

![AI工具](/img/manual/application/application-node-control.png)


### 4.6 工具

| 节点 | 作用 |
| --- | --- |
| JavaScript 执行 | 通过脚本处理数据或生成结果 |
| 参数提取 | 从文本或输入内容中提取结构化参数 |
| 变量赋值 | 保存或更新流程中的变量 |
| 推送上下文 | 把内容追加到上下文中，供后续节点继续使用 |
| 审批 | 在流程中加入人工确认步骤 |
| 数据响应 | 将结果作为最终响应返回 |

![AI工具](/img/manual/application/application-node-code.png)
