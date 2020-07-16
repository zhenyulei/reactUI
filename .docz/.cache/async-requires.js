// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-button-button-mdx": () => import("./../../../src/components/button/button.mdx" /* webpackChunkName: "component---src-components-button-button-mdx" */),
  "component---src-components-menu-menu-mdx": () => import("./../../../src/components/menu/menu.mdx" /* webpackChunkName: "component---src-components-menu-menu-mdx" */),
  "component---src-pages-404-js": () => import("./../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-welcome-mdx": () => import("./../../../src/welcome.mdx" /* webpackChunkName: "component---src-welcome-mdx" */)
}

