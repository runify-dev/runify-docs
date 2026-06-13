---
id: http-api
title: HTTP 接口
sidebar_label: HTTP 接口
---

# HTTP 接口

Runify 后端通过 Vert.x 路由暴露 HTTP 接口，定义在 `backend/src/main/java/com/run/route/`。

:::warning 占位说明
本页为接口文档骨架。由于精确的路径、入参、出参需要以实际路由代码为准，这里仅给出形态示意。**请按 README「补全 API 参考」一节，用 OpenAPI 从源码生成权威文档替换本页。**
:::

## 约定

- 基础路径：以后端启动地址为准（开发模式见 [快速开始](../getting-started/quick-start.md)）
- 认证：登录后通常以令牌（Token）形式携带凭据
- 数据格式：JSON

## 形态示意

以下为字段形态示意，非真实契约：

```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "Runify@1"
}
```

```http
GET /api/workflows
Authorization: Bearer <token>
```

```http
POST /api/workflows/{id}/run
Authorization: Bearer <token>
Content-Type: application/json

{
  "input": { }
}
```

## 推荐做法

与其手写并长期维护这些接口，不如让文档跟着代码走：

1. 后端集成 OpenAPI，导出 `openapi.json`。
2. 用 `docusaurus-plugin-openapi-docs` 渲染为交互式接口页。

详见 [API 参考总览](./overview.md)。
