// docusaurus.config.js

const config = {
  title: 'DECI Community Wiki',
  favicon: 'img/favicon.ico',

  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  ],
  scripts: [
    {
      src: 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js',
      defer: true,
    },
  ],

  url: 'https://deciwiki.netlify.app', // You can update this domain later
  baseUrl: '/',

  organizationName: 'community', 
  projectName: 'tech-wiki', 

  onBrokenLinks: 'warn', // Prevents future broken links from crashing production builds
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'wiki', // Re-routes /docs/ to /wiki/
          editUrl: 'https://github.com/meto5345/deci-wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/meto5345/deci-wiki/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DECI Community Wiki',
      logo: {
        alt: 'Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {to: '/labs', label: 'Labs', position: 'left'},
        {to: '/quizzes', label: 'Quizzes', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/meto5345/deci-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge Base',
          items: [
            {
              label: 'Wiki Overview',
              to: '/wiki/overview',
            },
          ],
        },
        {
          title: 'More Hubs',
          items: [
            {
              label: 'Labs Portal',
              to: '/labs',
            },
            {
              label: 'Practice Quizzes',
              to: '/quizzes',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Community Tech Wiki. Built independently with Docusaurus.`,
    },
  },
};

module.exports = config;