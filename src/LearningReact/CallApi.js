import React, { useEffect } from "react";

const CallApi = () => {
  const proxyUrl = "http://localhost:3001/proxy";
  // Replace 'https://thatsthem.com/name/Clint-A-Powell' with your desired URL
  const apiUrl = "https://thatsthem.com/name/Clint-A-Powell";

  const getData = async () => {
    try {
      const response = await fetch(proxyUrl, {
        method: "POST", // Change method to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: apiUrl }), // Send the API URL in the request body
      });

      const data = response.json()
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>CallApi</div>;
};

export default CallApi;
