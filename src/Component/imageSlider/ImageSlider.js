import React, { useEffect, useState } from 'react'

const ImageSlider = ({url ,limit}) => {
  const [image ,setImage ]= useState([])

  const getData = async()=>{
    try {
      const data   =  await fetch(`https://picsum.photos/v2/list?page=${1}&limit=${10}`)
      // const responce = await data.json()
      console.log(data);
      setImage(data)
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
  getData()
},[])

console.log(image)

  return (

    <div>ImageSlider</div>
  )
}

export default ImageSlider