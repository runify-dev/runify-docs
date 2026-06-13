// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '快速开始',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: '使用指南',
      collapsed: false,
      items: [
        'guides/workflow',
        'guides/nodes',
        'guides/notes',
        'guides/datasources',
        'guides/desktop',
      ],
    },
    {
      type: 'category',
      label: 'API 参考',
      items: [
        'api/overview',
        'api/nodes-reference',
        'api/http-api',
      ],
    },
  ],
};

module.exports = sidebars;
