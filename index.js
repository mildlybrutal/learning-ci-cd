import express from "express"

const app = express()

app.get("/",(req,res)=>{
    console.log("Hello")
})
app.post("/login",(req,res)=>{
    console.log("Enter yur creds")
})

app.listen(8080,()=>{
    console.log("Server is listening on port 8080")
})


