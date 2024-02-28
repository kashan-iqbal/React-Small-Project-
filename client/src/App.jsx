import { useEffect, useState } from 'react'
import {io} from "socket.io-client"



function App() {
  const [message,setMessage] = useState([])

  const socket = io("http://localhost:3000")
  useEffect(()=>{
      socket.on('connect', () => {
        console.log("Connected to server");
        console.log(socket.id); // This will log the socket ID once connected
socket.on("msg",(d)=> console.log(d))
        socket.on("msg",(d)=>setMessage(d))
      })

  },[])

  return (
    <>
    <h1>i ma app socket.io
      {
        // message && message.length?message.map((m,idx)=>(<p key={idx}>{m}</p>)) :null
        // message
      }
    </h1>
    </>
  )
}

export default App
