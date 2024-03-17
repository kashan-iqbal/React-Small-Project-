import React, { useState } from "react";

const Interview = () => {
  const arr = ["karachi", "quetta", "peshawer"];
  const [list, setList] = useState(arr);
  const [check, setChecked] = useState([]);
  const handleDelete = (i) => {
    let copyList = [...list];
    let deleteValue = copyList.filter((el, idx) => idx !== i);
    setList(deleteValue);
    let arr = [...check];
    let chekcingArr = arr.indexOf(i);
    console.log(chekcingArr,`idx of`)
    arr.splice(chekcingArr, 1);
    setChecked(arr);
  };

  const handleCheckBox = (id) => {
    let checkingArr = check.indexOf(id);
    let copyArr = [...check];
    if (checkingArr === -1) {
      copyArr.push(id);
      setChecked(copyArr);
    } else {
      copyArr.splice(checkingArr, 1);
      setChecked(copyArr);
    }
  };
  console.log(check);
  return (
    <div>
      <ul>
        {list.map((el, idx) => {
          return (
            <li key={idx}>
              {el}
              {check.map((c) => {
                return (
                  c === idx && (
                    <button key={c} onClick={() => handleDelete(idx)}>
                      delete
                    </button>
                  )
                );
              })}

              <input type="checkbox" onClick={() => handleCheckBox(idx)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Interview;
