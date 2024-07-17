"use client"
import { useState } from "react";
import Practice from "./component/Practice";
import HomeApp from "@/app/root/page"

export default function Home() {
 const [name,setName]= useState("kashan")
 const [num,setNum]= useState("")

 const cb = (num)=>{
setNum(num)

 }

  return (
    <>
      <Practice  name={name} cb={cb}/>
      <h1>Hello Next js  {num}</h1>
      <p>I am here my name is : {name}</p>
      <button >update naem</button>
      <HomeApp/>
    </>
  );
}
