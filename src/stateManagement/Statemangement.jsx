import { useState } from "react";

function Statemangement() {
  const [validate, setValidate] = useState(true);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    let amt = 100;
    if ( value.length <= 2) {
      setInput(value);
    }
    if (amt === parseInt(value)) {
      console.log(`first`)
      if (amt.length === parseInt(value).length) {
        setInput(value);
        setValidate(false);
      }
    } else {
      setValidate(true);
    }
    console.log(value);
  };

  return (
    <div>
      <input value={input} type="number" onChange={handleChange} />

      <button disabled={validate}>update</button>
    </div>
  );
}

export default Statemangement;
