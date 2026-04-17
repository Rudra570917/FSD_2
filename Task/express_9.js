var express=require("express")
var app=express()
const a=(req,res,next)=>{
    req.uname='Rudra'
    console.log('uname inserted')
    next()
}
const b=(req,res,next)=>{
    req.mark=23
    console.log('Mark updated')
    next()
}
app.use('/data',a,b)
app.get('/data',(req,res)=>{
    res.send(`Username ${req.uname} Updated marks ${req.mark}`)
})
app.get('/data/a',(req,res)=>{
    res.send(`Only username through middleware ${req.uname}`)
})
app.listen(6007)