var express=require("express")
var app=express()
cp=require("cookie-parser")
app.use(cp())
app.use(express.static('../public',{index:'form3.html'}))
app.use(express.urlencoded({extended:true}))
app.post('/data',(req,res)=>{
    const fname=req.body.fname
     pwd=req.body.pwd
    res.cookie('firstname',fname)
    res.cookie('password',pwd)
    res.redirect('/user')
})
app.get('/user',(req,res)=>{
    res.send(`Welcome ${req.cookies.firstname} Your password is ${req.cookies.password}`)
})
app.listen(5678)