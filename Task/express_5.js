var express=require("express")
var app=express()
app.get('/flights/:from/:to',(req,res)=>{
    res.end(req.params)
})
app.listen(5008)