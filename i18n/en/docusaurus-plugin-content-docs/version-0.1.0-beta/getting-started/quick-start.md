---
id: quick-start
title: 快速开始
sidebar_label: 快速开始
---

# 快速开始

本页带你以**开发模式**启动 Runify，并跑通第一个最简单的 Agent。

## 启动开发环境

Runify 前后端分离，开发时需要分别启动。

### 启动后端

```bash
# 在项目根目录
mvn clean package -DskipTests
java -jar backend/target/backend.jar
```

后端基于 Vert.x，启动通常在 1~2 秒内完成，基础运行时内存占用保持在 100MB~200MB。

### 启动前端

另开一个终端：

```bash
cd frontend
npm install
npm run dev
```

前端启动后，浏览器访问终端提示的本地地址（默认 Vite 端口），用默认账号 `admin` / `Runify@1` 登录。

## 数据存储说明

Runify 默认使用 **SQLite** 本地文件存储，零配置即可运行。无需额外部署数据库，也内置了 Lucene 检索，不必拉起独立搜索集群。

生产环境若需要，可一键切换至 PostgreSQL，详见 [配置](./configuration.md)。

## 创建第一个 Agent

1. 登录后进入**工作流编辑器**。
2. 从左侧节点面板拖入一个 **AI 对话** 节点，连接到流程起点。
3. 在节点配置中选择一个已接入的模型，填写提示词。
4. 点击运行，观察画布上每个节点的执行状态与输出——这正是 Runify「白盒」的体现：每一步推理你都看得见。

想了解全部节点类型和画布玩法，继续阅读 [工作流指南](../guides/workflow.md) 与 [节点详解](../guides/nodes.md)。

## 常见问题

**端口被占用？** 修改前端 Vite 配置或后端启动参数中的端口。

**模型调不通？** 确认已在「模型接入」中正确配置 API Key 与 Base URL，AI 对话节点支持多模型接入。
