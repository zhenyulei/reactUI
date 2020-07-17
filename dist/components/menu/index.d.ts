/// <reference types="react" />
import './style/index.scss';
declare const Menu: {
    MenuBox: import("react").FC<import("./menuBox").MenuProps>;
    SubMenu: import("react").FC<import("./subMenu").SubMenuProps>;
    MenuItem: import("react").FC<import("./menuItem").MenuItemProps>;
};
export default Menu;
