import { FC } from 'react';
import './style/index.scss';
export declare enum ButtonType {
    Complete = "complete",
    Half = "half"
}
interface btnData {
    currPrice?: string;
    oldPrice?: string;
}
interface BaseButtonProps {
    btnType?: string;
    btnWidth?: string;
    btnHeight?: string;
    btnBgColor?: string;
    btnBgImg?: string;
    btnRadius?: string;
    isShowBadge?: boolean;
    disabled?: boolean;
    className?: string;
    btnWord?: string;
    getData?: btnData;
}
declare const Button: FC<BaseButtonProps>;
export default Button;
