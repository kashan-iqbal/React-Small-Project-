import React from "react";
import useFetch from "./useFetch";
import { logDOM } from "@testing-library/react";

const FetchCustomhook = () => {
  const { loading, data, error } = useFetch(
    `https://dummyjson.com/users?limit=30`
  );
  if (loading) {
    return <h1>please wait</h1>;
  }
  console.log(data, loading, error);
  const { users } = data;
  return (
    <div>
      FetchCustomhook
      {users.length > 0 && users.map((d) => <p key={d.id}>{d.email}</p>)}
      {error && error}
    </div>
  );
};

export default FetchCustomhook;
