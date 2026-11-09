# Runify 文档站

[Runify](https://github.com/runify-dev/runify)（轻量白盒多智能体平台）的官方文档站，基于 [Docusaurus 3](https://docusaurus.io/) 构建。

已预置：上手教程 · 使用指南 · 功能手册 · 中英双语。**只维护一个文档版本**，`docs/` 即当前唯一版本，不做版本快照。

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

> 注意：Runify 前端管理端的 Vite 开发服务器也占用 3000 端口。同时调试时给文档站换个端口：`npm start -- --port 3002`。

> `npm start` 单语言预览模式下，右上角语言下拉不可点（这是 Docusaurus 的限制）。要同时验证中英双语，请用 `npm run build && npm run serve`。

构建生产版本：

```bash
npm run build    # 产物在 build/
npm run serve    # 本地预览构建产物（含完整多语言）
```

---

## 目录结构

```
runify-docs/
├── docs/                       # 唯一的文档源（当前版本）
│   ├── intro.md                # 站点根路径
│   ├── getting-started/        # 安装、快速开始、配置
│   ├── guides/                 # 工作流、节点、知识库、数据源、桌面端
│   └── manual/                 # 功能手册（应用、模型、知识库、技能、数据源、项目）
├── i18n/en/                    # 英文翻译
│   ├── docusaurus-theme-classic/       # 导航、页脚
│   └── docusaurus-plugin-content-docs/current/   # 英文文档
├── src/css/custom.css          # 品牌色与全局样式
├── static/img/                 # logo、favicon、手册截图
├── docusaurus.config.js        # 主配置
└── sidebars.js                 # 侧边栏
```

---

## 常见维护任务

### 改文档

编辑 `docs/` 下的 Markdown 即可，保存后热更新；英文对应改 `i18n/en/docusaurus-plugin-content-docs/current/` 下的同名文件。新增或删除页面时同步维护 `sidebars.js`。

### 内容定位

文档是**给普通用户看的产品使用手册**：只讲界面操作与使用流程，不出现命令、文件路径、接口、配置项、技术栈版本号等面向开发者的内容。新增章节时请沿用这个口径。

### 补全英文翻译

界面文案已译，文档正文 9 篇已同步。若新增界面文案，运行下面命令生成待译条目：

```bash
npm run write-translations -- --locale en
```

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
