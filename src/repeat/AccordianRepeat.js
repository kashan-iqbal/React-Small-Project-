import React, { useState } from "react";
import data from "./../Component/Accordian/data";

const AccordianRepeat = () => {
  const [slected, setSlected] = useState("");
  const [enableMultiSlection, setEnableMultipleSlection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const showMultime = (id) => {
    const arr = [...multiple];

    const checking = arr.indexOf(id);

    console.log(checking);

    if (checking === -1) arr.push(id);
    else arr.splice(checking, 1);
    setMultiple(arr);
  };

  const color = enableMultiSlection ? "red" : "";
console.log(multiple)

const handleMultipleTime = () =>{
  setEnableMultipleSlection( !enableMultiSlection)
  setMultiple([])
}


  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={ handleMultipleTime}
      >
        EnableMultiSlection
      </button>
      {data &&
        data.map((d) => (
          <div key={d.id}>
            <p>Q {d.question}</p>
            <span
              onClick={
                enableMultiSlection
                  ? () => showMultime(d.id)
                  : () => setSlected((prev) => (prev === d.id ? null : d.id))
              }
              style={{ cursor: "pointer" }}
            >
              {" "}
              Show Ans
            </span>
            {slected === d.id || multiple.indexOf(d.id) !== -1 ? (
              <p>{d.answer}</p>
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
};

export default AccordianRepeat;
