---
id: desktop
title: 桌面端与多端适配
sidebar_label: 桌面端
---

# 桌面端与多端适配

为了方便日常运维，Runify 前端针对不同屏幕尺寸做了专门优化，并提供原生桌面端。

## Web 响应式

前端采用原子化样式（Tailwind CSS）开发，界面布局灵活自适应。即便在手机端，也能流畅处理 Agent 的人机审批等操作。

## 桌面端（Electron）

支持一键打包为原生桌面应用，为 macOS 与 Windows 用户提供低延迟的单窗口管理环境。

### 打包命令

```bash
# macOS
./installer/installer.sh mac

# Windows
./installer/installer.sh win
```

### macOS 首次启动

若提示「无法打开，因为无法验证开发者」，执行：

```bash
xattr -cr /Applications/Runify.app
```

详细安装步骤见 [安装](../getting-started/installation.md)。

## 适配总览

| 终端 | 技术 | 特点 |
| --- | --- | --- |
| Web | Tailwind CSS 响应式 | 自适应布局，手机端可用 |
| 桌面 | Electron | macOS / Windows 原生，低延迟单窗口 |
