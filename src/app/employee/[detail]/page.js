"use client";
import Link from "next/link";
import React from "react";

const employee = ({params}) => {
  return (
    <>
      <h1>employee:{params.detail}</h1>
        <Link href={"/employee"}>Go back</Link>
    </>
  );
};

export default employee;
