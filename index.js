import express from "express"

const app = express()

app.get("/",(req,res)=>{
    console.log("Hello")
})
app.get("/hello",(req,res)=>{
    console.log("Hello bruv")
})

app.listen(8080,()=>{
    console.log("Server is listening on port 8080")
})


