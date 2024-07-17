"use client";
import Link from "next/link";
import React from "react";

const employee = () => {
  return (
    <>
      <h1>employee</h1>
      <ul>
        <li>
          {" "}
          <Link href={"/employee/ahmed"}>ahmed</Link> 
        </li>
        <li>
          {" "}
          <Link href={"/employee/kashan"}>kashan</Link> 
        </li>
        <li>
          {" "}
          <Link href={"/employee/imran"}>imran</Link> 
        </li>
        <li>
          {" "}
          <Link href={"/employee/wowo"}>wowo</Link> 
        </li>
      </ul>
    </>
  );
};

export default employee;
