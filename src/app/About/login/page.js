"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const router = useRouter()

  return (
    <>
    <h1>Login</h1>
 <button onClick={(()=> router.push("/About"))}>About</button>
    </>
  )
}

export default Login