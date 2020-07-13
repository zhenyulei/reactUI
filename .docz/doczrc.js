export default {
    files: ['./src/components/**/*.mdx','./src/*.mdx'],
    dest: 'doc-site',
    title: 'PLUS会员组件库', 
    description: "一款开发plus会员业务组件的代码库",
    typescript: true,
    themesDir: 'theme',
    menu: ['Introduce', 'Components'],
    htmlContext: {
        head: {
          links: [{
            rel: 'stylesheet',
            href: 'https://codemirror.net/theme/dracula.css'
          }]
        }
    }
};
  