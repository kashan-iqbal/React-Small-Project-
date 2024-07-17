"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter()
  return (
  <>
  <h1>I Am About</h1>;
  {/* <Link href={"/root"}>home</Link>
      <Link href={"/About"}>About</Link>
  <Link href={"/contact"}>contact</Link> */}
       <button onClick={()=> router.push("/root")}>Home</button>
      <button onClick={()=> router.push("/About")}  >About</button>
      <button onClick={()=> router.push("/About/login")}  >login nested</button>
      <button onClick={()=> router.push("/About/why")}  >why nested</button>
      <button onClick={()=> router.push("/contact")}  >contact</button>
  </>)
};

export default About;
