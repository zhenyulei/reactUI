import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Button from './components/Button';

const btnData = {
  "func": {
    "btnType":"half",
    "backtitle": "JDWork",
    "btnWord": "立即开通"
  },
  "style": {
    "btnWidth": "180",
    "btnHeight": "100",
    "btnBgColor":"linear-gradient(270deg,#ffc900,#ffd841)",
    "btnRadius":"50"
  },
  "data": {
    "event": {
      "type": "out",
      "filter": "() => {}"
    },
    "getData": {
      "currPrice":"98",
      "oldPrice":"199"
    }
  }
}
  

ReactDOM.render(
  <React.StrictMode>
    <Button {...btnData.func} {...btnData.style} {...btnData.data}>我是按钮1</Button>
  </React.StrictMode>,
  document.getElementById('root')
);
