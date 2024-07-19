"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import img from "/public/vercel.svg";

const HomeApp = () => {
  const router = useRouter();


  return (
    <>
      <h1>I am Home</h1>
      {/* <Link href={"/root"}>home</Link>
      <Link href={"/About"}>About</Link>
  <Link href={"/contact"}>contact</Link> */}
      <button onClick={() => router.push("/root")}>Home</button>
      <button onClick={() => router.push("/About")}>About</button>
      <button onClick={() => router.push("/contact")}>contact</button>
      <button onClick={() => router.push("/blog")}>blog</button>
      <Image
        src="https://images.pexels.com/photos/27152410/pexels-photo-27152410/free-photo-of-a-small-bird-sitting-on-top-of-a-wooden-post.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt="am"
        width="300"
        height="300"
      />
    </>
  );
};


export default HomeApp;