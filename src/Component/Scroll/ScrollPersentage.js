import React, { useEffect } from "react";
import { useState } from "react";
import "./Style.css";

const ScrollPersentage = () => {
  const [data, setData] = useState([]);
  const [persentage, setPersentage] = useState("");

  const getData = async () => {
    try {
      const result = await fetch("https://dummyjson.com/products?limit=500");
      const { products } = await result.json();
      if (products.length > 0) setData(products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    // console.log(
    //   document.body.scrollTop,
    //   "scrollTop",
    //   document.documentElement.scrollTop,
    //   "scrollHeight",
    //   document.documentElement.scrollHeight,
    //   "clientHeight",
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.documentElement.scrollTop || document.body.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    console.log(howMuchScrolled, height);
    setPersentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getData();
  }, []);
  console.log(persentage);
  return (
    <>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${persentage}%` }}
          ></div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="continer">
        <h1> ScrollPersentage</h1>
        <ul>{data && data.map((d) => <li key={d.id}>{d.title}</li>)}</ul>
      </div>
    </>
  );
};

export default ScrollPersentage;
