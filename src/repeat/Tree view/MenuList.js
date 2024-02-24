import React from "react";
import menus from "./data";
import MenuItem from "./MenuItem";

const MenuList = () => {
  return (
    <div>
      MenuList
      <MenuItem menu={menus} />
    </div>
  );
};

export default MenuList;
