// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from './components/Button';
// import {Menu,MenuItem} from './components/Menu'
// const btnData = {
//   "func": {
//     "btnType":"half",
//     "backtitle": "JDWork",
//     "btnWord": "立即开通"
//   },
//   "style": {
//     "btnWidth": "180",
//     "btnHeight": "100",
//     "btnBgColor":"linear-gradient(270deg,#ffc900,#ffd841)",
//     "btnRadius":"50"
//   },
//   "data": {
//     "event": {
//       "type": "out",
//       "filter": "() => {}"
//     },
//     "getData": {
//       "currPrice":"98",
//       "oldPrice":"199"
//     }
//   }
// }
// ReactDOM.render(
//   <React.StrictMode>
//     <Menu defaultIndex='0'>
//          <MenuItem>
//          cool link
//          </MenuItem>
//          <MenuItem>
//          disabled
//          </MenuItem> 
//          <MenuItem>
//          cool link 2
//          </MenuItem> 
//      </Menu>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Menu defaultIndex='0'>
//         <MenuItem>
//         cool link
//         </MenuItem>
//         <MenuItem>
//         disabled
//         </MenuItem> 
//         <MenuItem>
//         cool link 2
//         </MenuItem> 
//     </Menu>
//     <Button {...btnData.func} {...btnData.style} {...btnData.data}>我是按钮1</Button>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
export { default as Button } from './components/Button';
export { Menu, MenuItem, SubMenu } from './components/Menu';
