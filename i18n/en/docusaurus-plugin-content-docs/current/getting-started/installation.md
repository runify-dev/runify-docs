---
id: installation
title: 安装
sidebar_label: 安装
---

# 安装

Runify 提供两种获取方式：从源码构建（适合开发者）或下载桌面安装包（适合直接使用）。

## 环境要求

开发或源码构建需要：

- **JDK 25+**
- **Node.js 20+**
- **Maven 3.8+**

桌面端用户无需上述环境，直接下载对应平台的安装包即可。

## 方式一：下载桌面安装包

前往 [Releases](https://github.com/runify-dev/runify/releases) 页面下载最新版本（当前为 `v0.1.0-beta`），支持 macOS 与 Windows。

### macOS 首次启动

首次打开 macOS 安装包时，系统可能提示「无法打开，因为无法验证开发者」。在终端执行以下命令移除隔离属性：

```bash
xattr -cr /Applications/Runify.app
```

之后即可正常启动。默认登录凭据：

```
用户名: admin
密码: Runify@1
```

:::warning 安全提示
首次登录后请立即修改默认密码，尤其是在多人或联网环境中。
:::

## 方式二：从源码构建

克隆仓库：

```bash
git clone https://github.com/runify-dev/runify.git
cd runify
```

构建 JAR 包并启动：

```bash
# 一键构建发布版 JAR
./installer/build-jar.sh
java -jar release/runify.jar
```

打包桌面应用：

```bash
# mac 或 win
./installer/installer.sh mac
./installer/installer.sh win
```

## 下一步

环境就绪后，进入 [快速开始](./quick-start.md) 跑通你的第一个 Agent。
