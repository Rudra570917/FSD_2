var express=require("express")
var app=express()
app.get('/',(req,res)=>{
    res.type('text/html')
    res.send(`<h1>Hello World`)
})
app.get('/about',(req,res)=>{
    res.type('text/html')
    res.send(`<h1>About Page`)
})
app.listen(3000)