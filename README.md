### npm link

1、在代码库中执行 npm link

2、在代码库中执行 npm link ../../myapp2/node_modules/react

3、在项目中执行 npm link reactui

docz 部署问题

```js
http://storage.jd.com/jdplus/react-ui-demo/   index.html----生成路径
http://storage.jd.com/                       static/js/app.39fc221f.js----要求路径
http://storage.jd.com/jdplus/react-ui-demo/  static/js/app.39fc221f.js----生成路径
src="/app-df01096936b458cb7285.js"----代码中
```