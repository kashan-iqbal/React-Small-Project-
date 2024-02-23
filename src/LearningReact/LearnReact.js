import React from "react";
import "./Style.css";
import Increment from "./Increment";
import Hoc from "./Hoc";

const LearnReact = ({ value, inCrement }) => {
  return (
    <div>
      <Increment />
      LearnReact
      {value}
      <button onMouseMove={inCrement} onClick={inCrement}>mover</button>
    </div>
  );
};

export default Hoc(LearnReact);
