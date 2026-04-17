// Write express JS script to load in html file* having username, password and submit button. On clicking of submit button, it should jump on check page using post method. Implement an authentication middleware that checks whether the entered username is "admin" and the password is "1234". If the credentials are correct, the application should display the message "Login Successful". For any other username it should stay on same middleware to print warning message in red color. 
var express=require("express")
var app=express()
app.get('/',(req,res)=>{
    res.send(`<h1>User Form</h1>
        <form action="/data" method="get">
        Uname:<input type="text" name="uname">
        Password:<input type="password" name="password">
        <button type="submit">Submit</button>
        </form>`)
})
app.post('/data',(req,res)=>{
    uname=req.body.uname
    password=req.body.password
})
const a=(req,res,next)=>{
    if(req.uname==='admin' & req.password===1234){
        next()
    }
    else{
        res.send("Invalid user")
    }
}