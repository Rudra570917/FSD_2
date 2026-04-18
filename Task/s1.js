var express=require('express')
var app=express()
app.use(express.static('../public',{index:'form1.html'}))
app.use(express.urlencoded({extended:true}))
app.post('/data',(req,res)=>{
    uname=req.body.username
    pass=req.body.password
    res.send(`Welcome user ${uname} with password ${pass}`)
})
app.listen(5678,()=>{
    console.log("server")
})