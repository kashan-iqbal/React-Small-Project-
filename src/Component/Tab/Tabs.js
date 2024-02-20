import React, { useState } from "react";
import "./Style.css";

const Tabs = ({ tabs }) => {
  const [index, setIndex] = useState(0);
  const handleChange = (id) => {
    setIndex(id);
  };
  return (

    <>
      <div className="wapper">
        <header className="heading">
          {tabs.map((item, idx) => (
            <div
              className={`tab-item ${
                index === idx ? "active" : ""
              }`}
              key={idx}
              onClick={() => handleChange(idx)}
            >
              <span className="label"> {item.lable} </span>
            </div>
          ))}
        </header>
        <section className="content">
          {tabs[index] && tabs[index].content}
        </section>
      </div>
    </>
  );
};

export default Tabs;
