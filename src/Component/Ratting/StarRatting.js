import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Style.css";

const StarRatting = ({ noOfStars = 10 }) => {
  const [ratting, setRatting] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (idx) => {
    setRatting(idx);
  };
  const mouseMove = (idx) => {
    setHover(idx);
  };
  const mouseLeave = () => {
    setHover(ratting);
  };
  return (
    <div>
        {hover } ||
        {ratting}
      {[...Array(noOfStars)].map((_, idx) => {
        idx += 1;
        return (
          <FaStar
            key={idx}
            className={idx <= (hover ||ratting ) ? "active" : "inactive"}
            onClick={() => handleClick(idx)}
            onMouseMove={() => mouseMove(idx)}
            onMouseLeave={() => mouseLeave()}
          />
        )
      })}
    </div>
  );
};

export default StarRatting;
