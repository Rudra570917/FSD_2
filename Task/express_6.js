var express=require("express")
var app=express()
app.get('/data',(req,res)=>{
    name=req.query.uname
    age=req.query.age
    res.send("Name="+name+"Age="+age)
})
app.listen(5678,()=>{
    console.log("Server")
})