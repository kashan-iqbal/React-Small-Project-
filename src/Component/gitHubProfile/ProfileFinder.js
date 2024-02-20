import React, { useState } from "react";
import User from "./User";

const ProfileFinder = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const responce = await fetch(`https://api.github.com/users?${name}`);
      const result = await responce.json();
      if (result.length) setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  
  const handleSubmit = () => {
    console.log(name);
    getData();
  };


  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={(e) => setName(e.target.value)} />
        <button type="submit">search</button>
      </form>
      ProfileFinder
      {
        data !== null ?  <User key={data.id}  data={data} />:null

      } 
    </div>
  );
};

export default ProfileFinder;
