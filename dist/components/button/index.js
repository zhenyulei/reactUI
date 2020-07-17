import React from 'react';
import classNames from 'classnames';
import './style/index.scss';
export var ButtonType;
(function (ButtonType) {
    ButtonType["Complete"] = "complete";
    ButtonType["Half"] = "half";
})(ButtonType || (ButtonType = {}));
var Button = function (props) {
    var _a;
    var btnType = props.btnType, disabled = props.disabled, className = props.className, btnWidth = props.btnWidth, btnHeight = props.btnHeight, btnBgColor = props.btnBgColor, getData = props.getData, btnRadius = props.btnRadius, btnWord = props.btnWord;
    // 添加以下的样式 btn, btn-lg, btn-primary
    var classes = classNames('btn', className, (_a = {},
        _a["btn-" + btnType] = ButtonType,
        _a['disabled'] = disabled,
        _a));
    var btnStyle = {
        width: btnWidth,
        height: btnHeight,
        background: btnBgColor,
        borderTopLeftRadius: btnRadius,
        borderBottomLeftRadius: btnRadius,
    };
    return (React.createElement("button", { className: classes, style: btnStyle },
        getData && getData.currPrice &&
            React.createElement("p", { className: "price" },
                React.createElement("span", { className: "price-icon" }, "\u00A5"),
                React.createElement("span", { className: "curr-price" }, getData.currPrice),
                React.createElement("span", { className: "old-price" }, getData.oldPrice)),
        React.createElement("p", { className: "word" }, btnWord)));
};
Button.defaultProps = {
    btnBgImg: '',
    isShowBadge: false,
    btnWidth: '100px',
    btnHeight: '100px',
    btnRadius: '0px',
    btnType: ButtonType.Half
};
export default Button;
