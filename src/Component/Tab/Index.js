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
      lable: "following",
      content: "I am following page",
    },
  ];

  return (
    <div>
      Index
      <Tabs tabs={obj} />
    </div>
  );
};
