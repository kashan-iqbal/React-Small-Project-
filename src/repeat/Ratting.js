import React, { useCallback, useState } from "react";
import { FaStar } from "react-icons/fa";
import "../Component/Ratting/Style.css";

const Ratting = ({ noStart = 10 }) => {
  const [ratting, setRatting] = useState("");
  const [hover, setHover] = useState("");

  const handleClick = (id) => {
    setRatting(id);
  };
  const hanldleMove = (id) => {
    // console.log(id, "i am move");
    setHover(id);
  };

  const handleLeave = () => {
    // console.log(id, `i am mouse leave`);
    setHover(ratting);
  };
  return (
    <div>
      {[...Array(noStart)].map((_, id) => {
        id += 1;
        return (
          <FaStar
            className={(hover || ratting) >= id ? "active" : "inactive"}
            key={id}
            onClick={() => handleClick(id)}
            onMouseMove={() => hanldleMove(id)}
            onMouseLeave={() => handleLeave(id)}
            style={{ cursor: "pointer" }}
          />
        );
      })}
      Ratting
    </div>
  );
};

export default Ratting;
