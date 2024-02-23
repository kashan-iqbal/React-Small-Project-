import React, { useState } from "react";

const Hoc = (OldComponent) => {
  const NewComponet = () => {
    const [value, setValue] = useState(0);
    const inCrement = () => {
      setValue(value + 1);
    };

    return <OldComponent value={value} inCrement={inCrement} />;
  };

  return NewComponet
};

export default Hoc;
