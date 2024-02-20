import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const AutoCompleteApi = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [input, setinput] = useState("");
  const [filter, setFilter] = useState([]);

  const getData = async () => {
    try {
      const responce = await fetch("https://dummyjson.com/users?limit=100");
      const result = await responce.json();
      setData(result.users.map((d) => d.username));
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const querry = e.target.value.toLowerCase();
    setinput(querry);
    if (querry.length > 0) {
      const newData =
        data && data.length
          ? data.filter((f) => f.toLowerCase().indexOf(querry) > -1)
          : null;
      setFilter(newData);
    } else {
      setFilter([]);
    }
  };

  console.log(filter, `i am filter`);
  useEffect(() => {
    getData();
  }, []);

  const update = (d) => {
    setinput(d);
    setFilter([]);
  };

  return (
    <div>
      AutoCompleteApi
      <input type="text" onChange={handleChange} value={input} />
      <Suggestion func={update} data={filter} />
    </div>
  );
};

export default AutoCompleteApi;
