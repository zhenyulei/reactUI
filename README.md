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

-------
组件名字： name
author: 
1 新增 
```js
src/components/${name}/style/index.scss
// @import '../../../styles/index.scss';
 
src/components/${name}/${name}.mdx

// ---
// name: Menu
// route: /menu
// menu: 业务组件
// ---
// > Menu菜单组件

src/components/${name}/${name}.tsx

import React, { FC } from 'react';
import classNames from 'classnames'

// interface BaseProps{
//     className?:string,//自定义类名
// }

//  const Button:FC<BaseProps> = (props)=>{
//   const {
//     className
//   } = props;
//   const classes = classNames('btn',className);

//   return (
//     <div className={classes}>
//     </div>
//   )
// }
// Button.defaultProps = {
// }
// export default Button;

src/components/${name}/${name}.test.tsx

src/components/${name}/index.tsx

// import Button from './button'
// import './style/index.scss'
// export default Button 
```

2.追加

```js
{
    "packages":[
        {
            "name":"button",
            "author":"zhenyulei"
        },
        {
            "name":"menu",
            "author":"zhenyulei"
        }
    ]
}
```
export { default as Button } from './components/Button'



