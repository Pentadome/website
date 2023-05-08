import type { DefaultTheme } from 'vitepress'

export const IconComponentsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'SVG Framework',
    link: '/docs/icon-components/svg-framework/',
  }, {
    text: 'React',
    link: '/docs/icon-components/react/',
  }, {
    text: 'Vue 3',
    link: '/docs/icon-components/vue/',
  }, {
    text: 'Vue 2',
    link: '/docs/icon-components/vue2/',
  }, {
    text: 'Svelte',
    link: '/docs/icon-components/svelte/',
  }, {
    text: 'Ember',
    link: '/docs/icon-components/ember/',
  }, /* , {
    text: 'React with API',
    link: '/docs/icon-components/react-with-api/',
  } */ {
    text: 'Icon Bundles',
    collapsed: true,
    link: '/docs/icon-components/bundles/',
    items: [{
      text: 'Wrapper Function',
      link: '/docs/icon-components/bundles/wrapper',
    }, {
      text: 'Using Iconify API',
      link: '/docs/icon-components/bundles/api',
    }, {
      text: 'Using Iconify Utils',
      link: '/docs/icon-components/bundles/utils',
    }, {
      text: 'Using JSON Tools',
      link: '/docs/icon-components/bundles/json-tools',
    }, {
      text: 'Examples',
      link: '/docs/icon-components/bundles/examples/',
    }, {
      text: 'SVG Framework only examples',
      collapsed: true,
      items: [
        {
          text: 'Node.js and PHP',
          collapsed: true,
          items: [{
            text: 'Basic bundle example',
            link: '/docs/icon-components/bundles/examples/svg-framework-simple',
          }, {
            text: 'Bundling custom icons',
            link: '/docs/icon-components/bundles/examples/svg-framework-custom',
          }],
        }, {
          text: 'Node.js only',
          collapsed: true,
          items: [{
            text: 'Bundling custom icons using Iconify Tools',
            link: '/docs/icon-components/bundles/examples/svg-framework-custom-tools',
          }, {
            text: 'Advanced bundler example',
            link: '/docs/icon-components/bundles/examples/svg-framework-full',
          }],
        }],
    }, {
      text: 'All icon components examples',
      collapsed: true,
      items: [
        {
          text: 'Node.js and PHP',
          collapsed: true,
          items: [{
            text: 'Basic bundle example',
            link: '/docs/icon-components/bundles/examples/component-simple',
          }, {
            text: 'Bundling custom icons',
            link: '/docs/icon-components/bundles/examples/component-custom',
          }],
        }, {
          text: 'Node.js only',
          collapsed: true,
          items: [{
            text: 'Bundling custom icons using Iconify Tools',
            link: '/docs/icon-components/bundles/examples/component-custom-tools',
          }, {
            text: 'Advanced bundler example',
            link: '/docs/icon-components/bundles/examples/component-full',
          }],
        }],
    }, {
      text: 'Usage',
      collapsed: true,
      items: [{
        text: 'SVG Framework',
        link: '/docs/icon-components/bundles/svg-framework',
      }, {
        text: 'React',
        link: '/docs/icon-components/bundles/react',
      }, {
        text: 'Vue 3',
        link: '/docs/icon-components/bundles/vue',
      }, {
        text: 'Vue 2',
        link: '/docs/icon-components/bundles/vue2',
      }, {
        text: 'Svelte',
        link: '/docs/icon-components/bundles/svelte',
      }, {
        text: 'Ember',
        link: '/docs/icon-components/bundles/ember',
      }],
    }],
  },
]
