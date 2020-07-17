import React, { FC } from 'react';
import classNames from 'classnames'

export enum ButtonType {
  Complete='complete',
  Half='half'
}
interface btnData{
  currPrice?:string,//当前价格
  oldPrice?:string,//原价格
}

interface BaseButtonProps{
  btnType?:string,//按钮类型
  btnWidth?:string,//按钮宽度
  btnHeight?:string,//按钮高度
  btnBgColor?:string,//按钮背景颜色
  btnBgImg?:string,//按钮背景图
  btnRadius?:string,//按钮边框角度
  isShowBadge?:boolean,//是否显示徽标
  disabled?:boolean,//是否禁用
  className?:string,//自定义类名
  btnWord?:string,//按钮文案
  getData?:btnData
}

const Button:FC<BaseButtonProps> = (props)=>{
  const {
    btnType,
    disabled,
    className,
    btnWidth,
    btnHeight,
    btnBgColor,
    getData,
    btnRadius,
    btnWord,
  } = props;
  // 添加以下的样式 btn, btn-lg, btn-primary
  const classes = classNames('btn',className,{
      [`btn-${btnType}`]: ButtonType,  //btnType有值的时候 就添加上
      'disabled': disabled
  })
  const btnStyle = {
    width:btnWidth,
    height:btnHeight,
    background:btnBgColor,
    borderTopLeftRadius:btnRadius,
    borderBottomLeftRadius:btnRadius,
  }
  return (
    <button className={classes} style={btnStyle}>
      {
        getData && getData.currPrice &&
        <p className="price">
          <span className="price-icon">¥</span>
          <span className="curr-price">{getData.currPrice}</span>
          <span className="old-price">{getData.oldPrice}</span>
        </p>
      }
      <p className="word">{btnWord}</p>
    </button>
  )
}
Button.defaultProps = {
  btnBgImg:'',
  isShowBadge:false,
  btnWidth:'100px',
  btnHeight:'100px',
  btnRadius:'0px',
  btnType:ButtonType.Half
}
export default Button;