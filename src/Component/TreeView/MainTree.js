import React from "react";
import MenuList from "./MenuList";
import { menus } from "./data";
import "./Style.css"

const MainTree = () => {
  return (
    <div className="tree-view-container">
      <MenuList menu={menus} />
    </div>
  );
};

export default MainTree;
