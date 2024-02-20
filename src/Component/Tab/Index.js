import React from "react";
import Tabs from "./Tabs";

export const Index = () => {
  const obj = [
    {
      lable: "home",
      content: "I am home page",
    },
    {
      lable: "recnet",
      content: "I am recnet page",
    },
    {
      lable: "history",
      content: "I am history page",
    },
    {
      lable: "worindg",
      content: "I am working page",
    },
    {
      lable: "About Us",
      content: "I am About US page",
    },
    {
      lable: "desiging",
      content: "I am desiging page",
    },
  ];

  return (
    <div>
      Index
      <Tabs tabs={obj} />
    </div>
  );
};
