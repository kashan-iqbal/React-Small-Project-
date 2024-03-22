const express = require("express")


const app = express()




app.use("/",(req,res)=>{
    res.send("<h1>Yout tube clone</h1>")
})




const PORT = 5000

app.listen(PORT,()=>{
    console.log(`server is listing on ${PORT}`)
})



