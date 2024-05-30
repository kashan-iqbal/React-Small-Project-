import { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  console.log(data);
  useEffect(() => {
    const contoller = new AbortController();
    console.log(contoller);
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      signal: contoller.signal,
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => {
        if (e.name === "AbortError") {
          return;
        }
        setError(e.message);
      });
    return () => {
      contoller.abort();
    };
  }, []);
  const handleDelete = (id) => {
    return () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(() => {
            // Simulate the deletion by updating the state
            setData((prevData) => prevData.filter((user) => user.id !== id));
          })
          .catch((error) => {
            console.error('There was a problem with the delete operation:', error);
          });
      };
  };
  return (
    <div>
      {error && <p>{error}</p>}
      {data.length > 0 &&
        data.map((d) => (
          <div key={d.id}>
            <p>{d.name}</p> <button onClick={handleDelete(d.id)}>del</button>
          </div>
        ))}
    </div>
  );
};

export default UseEffect;
