var express=require('express')
var app=express()
const a=(req,res,next)=>{
    console.log("Student have entered into the examination hall")
    next()
}
const b=(req,res,next)=>{
    var id=true
    if(id){
        req.idcard_no=24002171210015
        next()
    }
    else{
        res.send("Student is not having id card so he is not allowed to give examination")
    }
}
app.use('/data',a,b)
app.get('/data',(req,res)=>{
    res.send(`Welcome student ${req.idcard_no} for today's examination`)
})
app.listen(6007)