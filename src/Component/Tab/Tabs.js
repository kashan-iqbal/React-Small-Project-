import React, { useState } from "react";

const Tabs = ({ tabs, onChange }) => {
  const [index, setIndex] = useState(0);
  const handleChange = (id) => {
    setIndex(id);
  };
  return (
    <>
      <div className="wapper">
        <header>
          {tabs.map((item, idx) => (
            <h1 key={idx} onClick={() => handleChange(idx)}>
              {item.lable}
            </h1>
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
