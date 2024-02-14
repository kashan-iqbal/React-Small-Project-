import React from "react";
import MenuItem from "./MenuItem";
import "./Style.css"

const MenuList = ({ menu }) => {
  return (
    <ol className="menu-list-container">
      {menu && menu.length > 0
        ? menu.map((m, idx) => <MenuItem key={idx} m={m} />)
        : null}
    </ol>
  );
};

export default MenuList;
