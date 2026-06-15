# Runify 文档站

[Runify](https://github.com/runify-dev/runify)（轻量级白盒 AI Agent 平台）的官方文档站，基于 [Docusaurus 3](https://docusaurus.io/) 构建。

已预置：上手教程 · API 参考 · 多版本（`0.1.0-beta` + `Next`）· 中英双语。

> 本站不含独立的产品介绍首页（你已有官网首页），站点**根路径直接进入文档**。

---

## 运行

需要 Node.js 18+（建议 20+）。

```bash
npm install      # 安装依赖
npm start        # 启动中文站，默认 http://localhost:3000
```

启动英文站：

```bash
npm run start:en
```

> 注意：`npm start` 单语言预览模式下，右上角语言下拉不可点（这是 Docusaurus 的限制）。要同时验证中英双语，请用 `npm run build && npm run serve`。

构建生产版本：

```bash
npm run build    # 产物在 build/
npm run serve    # 本地预览构建产物（含完整多语言、多版本）
```

---

## 目录结构

```
runify-docs/
├── docs/                       # 当前开发版（Next）文档源
│   ├── intro.md
│   ├── getting-started/        # 安装、快速开始、配置
│   ├── guides/                 # 工作流、节点、笔记、数据源、桌面端
│   └── api/                    # API 总览、节点参考、HTTP 接口
├── versioned_docs/             # 已发布版本快照（0.1.0-beta）
├── versioned_sidebars/
├── versions.json               # 已发布版本清单
├── i18n/en/                    # 英文翻译
│   ├── code.json               # 首页等界面文案
│   ├── docusaurus-theme-classic/   # 导航、页脚
│   └── docusaurus-plugin-content-docs/  # 英文文档
├── src/
│   └── css/custom.css          # 品牌色与全局样式
├── static/img/                 # logo、favicon
├── docusaurus.config.js        # 主配置
└── sidebars.js                 # 侧边栏
```

---

## 常见维护任务

### 改文档

编辑 `docs/` 下的 Markdown 即可，保存后热更新。`docs/` 对应「Next（开发中）」版本。

### 发布一个新版本

把当前 `docs/` 冻结为一个新版本快照：

```bash
npm run version:cut 0.2.0
```

会自动生成 `versioned_docs/version-0.2.0/`、对应侧边栏，并更新 `versions.json`。

### 补全英文翻译

界面文案已译。文档内容里，目前仅 `intro` 翻译为英文，其余英文页为中文占位待译，位于：

```
i18n/en/docusaurus-plugin-content-docs/current/      # Next 版英文
i18n/en/docusaurus-plugin-content-docs/version-0.1.0-beta/   # 已发布版英文
```

逐篇翻译替换即可。若新增了界面文案，运行下面命令生成待译条目：

```bash
npm run write-translations -- --locale en
```

### 补全 API 参考（推荐自动生成）

`docs/api/` 目前是基于仓库结构整理的骨架。Runify 后端是 Java + Vert.x，建议让接口文档跟着代码走：

1. 后端集成 OpenAPI，导出 `openapi.json`。
2. 安装并配置 [`docusaurus-plugin-openapi-docs`](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs)，把 `openapi.json` 渲染成交互式 API 页面。

这样接口文档会随代码自动更新，避免手写漂移。

---

## 部署

### 自动部署（推荐）

项目已配置 GitHub Actions，push 到 `main` 分支后自动构建并部署到阿里云 OSS。

**访问地址**: https://docs.runify.cn

**配置 GitHub Secrets**（仓库 Settings → Secrets and variables → Actions）：

| Secret 名称 | 说明 |
|-------------|------|
| `OSS_ACCESS_KEY_ID` | 阿里云 AccessKey ID |
| `OSS_ACCESS_KEY_SECRET` | 阿里云 AccessKey Secret |

**OSS 信息**（已写在 `.github/workflows/deploy.yml` 中）：
- Bucket: `runify`
- 区域: `cn-beijing`
- 域名: `docs.runify.cn`

### 手动部署

```bash
npm run build    # 构建，产物在 build/
# 然后用 ossutil 或控制台手动上传 build/ 目录
```

### 其他方式

`build/` 目录也可托管到 Vercel、Netlify、GitHub Pages、Nginx 等任意静态服务。

部署前请在 `docusaurus.config.js` 中把 `url` / `baseUrl` 改成真实地址。

---

## 待替换的占位

- `static/img/logo.svg`、`favicon.svg`：临时设计，建议替换为正式品牌素材。
- 社交分享卡片：在 `static/img/` 放一张 1200×630 图片，并在 `docusaurus.config.js` 取消 `image` 注释。
- 项目截图：可从仓库 README 取图放入 `static/img/` 并在文档中引用。

许可：文档内容随 Runify 采用 Apache-2.0。
