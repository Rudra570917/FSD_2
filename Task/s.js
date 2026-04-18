var express=require('express')
var app=express()
var path=require('path')
sp=path.join(__dirname,'/../public')
app.use(express.static(sp))
app.get('/',(req,res)=>{
    res.sendFile(sp+'/index.html')
})
app.listen(5678,()=>{
    console.log("Server")
})