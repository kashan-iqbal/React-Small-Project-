import React from "react";
import ShowMenu from "./ShowMenu";

const MenuItem = ({ menu }) => {
  return <div>{menu && menu.map((m) => <ShowMenu key={m.id} item={m} />)}</div>;
};

export default MenuItem;
