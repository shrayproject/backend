const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("gugu")})

    app.listen(3000);