import { useState } from "react";

const Para = ({ children, maxChar }) => {
  const [expened, setExpend] = useState(true);

  if (children.length <= maxChar) return <p>{children}</p>;

  const text = expened ? children : children.substring(0, maxChar);
  return (
    <div>
      {text}...{" "}
      <button onClick={ ()=> setExpend((prev) => !prev)}>
        {expened ? "less" : "more"}
      </button>
    </div>
  );
};



export default Para;
