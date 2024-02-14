import React, { useState } from "react";
import MenuList from "./MenuList";
import {FaMinus, FaPlus} from 'react-icons/fa'
import "./Style.css";

const MenuItem = ({ m }) => {
  console.log(m.children);
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="menu-item">
        <p>{m.label}</p>
        {m.children && m.children.length ? (
          <span onClick={() => setOpen((prev) => !prev)}>
            {open ?  <FaMinus color="#fff" size={25} />: <FaPlus color="#fff" size={25}/>}
          </span>
        ) : null}
        {m && m.children && m.children.length > 0 ? (
          open && open ? (
            <MenuList menu={m.children} />
          ) : null
        ) : null}
      </div>
    </li>
  );
};

export default MenuItem;
