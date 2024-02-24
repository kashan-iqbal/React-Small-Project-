import React, { useState } from "react";
import MenuItem from "./MenuItem";

const ShowMenu = ({ item }) => {
  const [open, setOpen] = useState(false);
  console.log(item);
  return (
    <div>
      {/* ShowMenu */}
      <p>{item.label}</p>
      {item.children && item.children.length > 0 ? (
        <h1 onClick={() => setOpen((prev) => !prev)}>{open ? "-" : "+"} </h1>
      ) : null}

      {item.children && item.children.length
        ? open &&
          item.children.map((i) => <MenuItem key={i.id} menu={i.children} />)
        : null}
    </div>
  );
};

export default ShowMenu;
