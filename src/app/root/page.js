"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HomeApp = () => {
  const router = useRouter()

  return (
    <>
      <h1>I am Home</h1>
      {/* <Link href={"/root"}>home</Link>
      <Link href={"/About"}>About</Link>
  <Link href={"/contact"}>contact</Link> */}
       <button onClick={()=> router.push("/root")}>Home</button>
      <button onClick={()=> router.push("/About")}  >About</button>
      <button onClick={()=> router.push("/contact")}  >contact</button>
      <button onClick={()=> router.push("/blog")}  >blog</button>
    </>
  );
};

export default HomeApp;
