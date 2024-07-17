"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Why = () => {
const router = useRouter()
  return (
    <>
    <h1>Why us</h1>
    <button onClick={()=> router.push("/About")}  >About</button>
    </>
  )
}

export default Why