import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSlected] = useState(null);
  const [enableMultiSlection, setEnableMultipleSlection] = useState(false);
  const [multiple, setMultiple] = useState([1]);

  const handleShow = (id) => {
    setSlected(id === selected ? null : id);
  };
  const showMultiple = (id) => {
    let arr = [...multiple];

    const multipleArr = arr.indexOf(id);

    if (multipleArr === -1) arr.push(id);
    else arr.splice(multipleArr, 1);
    setMultiple(arr);
  };

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultipleSlection(!enableMultiSlection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data &&
          data.map((data) => (
            <div key={data.id} className="item">
              <p> {data.question}</p>
              <span
                onClick={
                  enableMultiSlection
                    ? () => showMultiple(data.id)
                    : () => handleShow(data.id)
                }
              >
                +
              </span>
              {selected === data.id || multiple.indexOf(data.id) !== -1 ? (
                <p>{data.answer}</p>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordian;
