"use client";

import React, { useState } from "react";

const Practice = ({ name, cb }) => {
  const [first, setfirst] = useState(0);
  const handleUpdate = () => {
    setfirst((prev) => {
      const newVal = prev + 1;
      cb(newVal);
      return newVal;
    });
  };
  return (
    <div>
      Practice {name}
      <button onClick={handleUpdate}>{first}</button>
    </div>
  );
};

export default Practice;
