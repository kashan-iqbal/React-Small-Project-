"use client"
import Link from 'next/link'
import React from 'react'

const Blog = ({params}) => {
console.log(params)
  return (
    <>
    {
      params.blog?.map((e)=><h1>i am  page {e}</h1> )
    }
    <Link href={"/root"}>Home</Link>
    </>
  )
}


export default Blog