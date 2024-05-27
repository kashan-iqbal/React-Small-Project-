import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      {" "}
      <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
    </div>
  );
};

export default Error;
