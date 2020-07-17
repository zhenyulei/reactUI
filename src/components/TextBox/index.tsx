import React, { FC } from 'react';
import classNames from 'classnames';
import './style/index.scss';

interface BaseProps{
	className?:string;//自定义类名
	children: React.ReactNode;
}

const TextBox:FC<BaseProps> = (props)=>{
  const {
	className,
	children,
  } = props;
  const classes = classNames('wrapper',className);

  return (
	<div className={classes}>
	{children}
    </div>
  )
}
TextBox.defaultProps = {
}
export default TextBox;