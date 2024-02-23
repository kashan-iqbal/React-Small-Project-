import React, { useEffect, useState } from "react";

const useFetch = (url, option = {}) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchData = async () => {
    setLoading(true);
    try {
      const responce = await fetch(url, option);
      if (!responce.ok) {
        setError("some thing went wrong");
        return;
      }
      const result = await responce.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      if (error) {
        setError(error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
