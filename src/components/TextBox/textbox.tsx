import React, { FC } from 'react';
import classNames from 'classnames';
interface BaseProps{
    className?:string,//自定义类名
}

const TextBox:FC<BaseProps> = (props)=>{
  const {
    className
  } = props;
  const classes = classNames('wrapper',className);

  return (
    <div className={classes}>
    </div>
  )
}
TextBox.defaultProps = {
}
export default TextBox;
