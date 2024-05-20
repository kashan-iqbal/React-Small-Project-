import { useState } from "react";

function Statemangement() {
  const [data, setData] = useState({
    discount: 1,

    item: [
      {
        id: 1,
        tittel: "products",
        quantity: 1,
      },
      {
        id: 3,
        tittel: "products",
        quantity: 2,
      },
    ],
  });
  const handleUpdate = () => {
    setData({...data,item: data.item.map((d)=> d.id === 1? {...d,quantity:5}:d)});
  };

  return (
    <div>
      {data.item.map((d, idx) => (
        <div key={idx}>{d.tittel} {d.quantity}</div>
      ))}
      <button onClick={handleUpdate}>update</button>
    </div>
  );
}

export default Statemangement;
