// @ts-check
// Runify 文档站配置
// 文档: https://docusaurus.io/docs/api/docusaurus-config

const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Runify',
  tagline: '轻量级白盒 AI Agent 平台',
  favicon: 'img/favicon.svg',

  // 部署到生产时改成你的真实域名
  url: 'https://runify.dev',
  baseUrl: '/',

  // GitHub Pages 部署配置（按需修改）
  organizationName: 'runify-dev',
  projectName: 'runify',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // ---- 国际化：默认中文，可切换英文 ----
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {label: '简体中文', htmlLang: 'zh-CN'},
      en: {label: 'English', htmlLang: 'en-US'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // 文档接管站点根路径（不再有独立的产品首页，根路径直接进文档）
          routeBasePath: '/',
          // 指向仓库，文档页底部会出现「编辑此页」
          editUrl:
            'https://github.com/runify-dev/runify/tree/main/website/',
          // ---- 多版本配置 ----
          // 已发布版本（versioned_docs/）自动成为默认版本。
          // current 作为「开发中 / 下一版」，路径前缀 /next
          versions: {
            current: {
              label: 'Next 🚧',
              path: 'next',
            },
          },
        },
        blog: false, // 暂不需要博客，如需开启改为对象配置
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 如需社交分享卡片，放一张 1200x630 的图到 static/img/ 并在此引用
      // image: 'img/runify-social-card.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Runify',
        logo: {
          alt: 'Runify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '文档',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/runify-dev/runify',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {label: '快速开始', to: '/getting-started/quick-start'},
              {label: '工作流指南', to: '/guides/workflow'},
              {label: 'API 参考', to: '/api/overview'},
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/runify-dev/runify/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/runify-dev/runify/issues',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {label: 'GitHub', href: 'https://github.com/runify-dev/runify'},
              {
                label: 'Releases',
                href: 'https://github.com/runify-dev/runify/releases',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Runify. Apache-2.0 License.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'bash', 'json', 'sql'],
      },
    }),
};

module.exports = config;
