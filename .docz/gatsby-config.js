const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'PLUS会员组件库',
    description: '一款开发plus会员业务组件的代码库',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'theme',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['快速上手', '业务组件'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: ['./src/components/**/*.mdx', './src/*.mdx'],
        public: '/public',
        dest: 'docsite',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'PLUS会员组件库',
        description: '一款开发plus会员业务组件的代码库',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI',
          templates:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/node_modules/docz-core/dist/templates',
          docz:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz',
          cache:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz/.cache',
          app:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz/app',
          appPackageJson:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/package.json',
          appTsConfig:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/tsconfig.json',
          gatsbyConfig:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/gatsby-config.js',
          gatsbyBrowser:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/gatsby-browser.js',
          gatsbyNode:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/gatsby-node.js',
          gatsbySSR:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/gatsby-ssr.js',
          importsJs:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz/app/imports.js',
          rootJs:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz/app/root.jsx',
          indexJs:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz/app/index.jsx',
          indexHtml:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz/app/index.html',
          db:
            '/Users/zhenyulei/Documents/JD/2020/PLUS/code/component/plus/reactui3/reactUI/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
