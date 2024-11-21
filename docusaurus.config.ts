// @ts-check
// Note: type annotations allow type checking and IDE autocompletion

import { Config } from '@docusaurus/types';


const config: Config = {
  title: 'iARM Docs',
  tagline: 'Comprehensive documentation for all features',
  url: 'https://your-site.com', // Replace with your site's URL
  baseUrl: '/', // Use '/' for local or hosted root-level setups
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'YourOrg', // Replace with your GitHub org/user name
  projectName: 'docusaurus-site', // Replace with your repo name

  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // Add additional locales if required
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs', // Base path for docs
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/YourOrg/docusaurus-site/edit/main/', // Replace with your repo edit URL
        },
        blog: false, // Disable the blog if not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'iARM Docs',
    //   logo: {
    //     alt: 'iARM Logo',
    //     src: 'img/logo.svg', // Replace with your logo file
    //   },
      items: [
        { to: '/docs/overview', label: 'Overview', position: 'left' },
        { to: '/docs/data-explorer', label: 'Data Explorer', position: 'left' },
        { to: '/docs/my-data', label: 'My Data', position: 'left' },
        { to: '/docs/my-disposable-dashboard', label: 'My Disposable Dashboard', position: 'left' },
        { to: '/docs/workspace-gov', label: 'Workspace Gov', position: 'left' },
        { to: '/docs/prm', label: 'PRM', position: 'left' },
        { to: '/docs/audit-log-sync', label: 'Audit Log Sync', position: 'left' },
        { to: '/docs/reports', label: 'Reports', position: 'left' },
        { to: '/docs/administration', label: 'Administration', position: 'left' },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Overview', to: '/docs/overview' },
            { label: 'Data Explorer', to: '/docs/data-explorer' },
            { label: 'My Data', to: '/docs/my-data' },
            // { label: 'My Data', to: '/docs/my-data' },
            
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/YourOrg/docusaurus-site' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YourOrg. Built with Docusaurus.`,
    },
  },
};

export default config;
