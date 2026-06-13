---
id: overview
title: API 参考总览
sidebar_label: 概览
---

# API 参考总览

本节描述 Runify 的接口组织方式。Runify 后端基于 **Java 25 + Vert.x**，采用异步路由处理请求。

:::info 关于本节内容
以下结构依据项目的后端组织（`backend/src/main/java/com/run/`）整理。**具体的接口路径、请求/响应字段请以实际代码为准**——后端路由定义在 `route/` 目录，业务处理在 `handler/` 目录。建议结合下文「自动生成」一节，从源码生成精确的接口清单。
:::

## 后端架构

| 目录 | 职责 |
| --- | --- |
| `workflow/` | 工作流引擎（Agent 核心），含 `nodes/`（节点实现）与 `entity/`（流程定义） |
| `ai/` | AI 模型接入 |
| `route/` | API 路由定义 |
| `handler/` | 业务处理 |
| `dao/` | 数据访问 |
| `datasources/` | 多数据源适配 |

## 技术栈

| 层 | 技术 |
| --- | --- |
| 后端 | Java 25 · Vert.x · Dagger · Flyway |
| 前端 | Vue 3 · TypeScript · Vite · PrimeVue · Tailwind CSS |
| 工作流 | 自研引擎 · LogicFlow 画布 |
| 搜索 | Lucene / Elasticsearch |
| 桌面 | Electron（macOS / Windows） |

## 接口分组（建议）

实际接口通常按以下领域划分，具体以 `route/` 中的定义为准：

- **认证** — 登录、令牌刷新（默认账号 `admin` / `Runify@1`）
- **工作流** — 工作流的增删改查、运行、调试
- **节点** — 节点元数据、执行
- **笔记** — 笔记的增删改查与检索
- **数据源** — 数据源配置、连接测试
- **模型** — AI 模型接入配置

## 自动生成精确接口文档

由于 Runify 后端是 Java，推荐用以下方式从代码生成权威接口文档，再嵌入本站：

1. 在后端集成 **OpenAPI / Swagger**（如 `springdoc` 风格或 Vert.x 的 OpenAPI 支持），导出 `openapi.json`。
2. 用 Docusaurus 的 [`docusaurus-plugin-openapi-docs`](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) 把 `openapi.json` 渲染成交互式 API 页面。

这样接口文档会随代码自动更新，避免手写漂移。配置方法见本仓库 README 的「补全 API 参考」一节。
