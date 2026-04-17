var express=require("express")
var app=express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<h1>User Form</h1>
        <form action="/data" method="get">
        Uname:<input type="text" name="uname">
        Age:<input type="text" name="age">
        <button type="submit">Submit</button>
        </form>`)
})
app.get('/data',(req,res)=>{
    uname=req.query.uname
    age=req.query.age
    res.send("Welcome "+ uname +" your age is "+ age)
})
app.listen(5678)