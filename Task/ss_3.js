// Write a script to meet following requirements:

//  Create session.html file page which contains form (username,password,login button). and open it on localhost.

// After clicking submit button, it should jump on “save” page. Store username and password in session.

// After saving session, redirect to “fetchdata” page and read value. Put a LOGOUT link button here. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively.

// If this condition is true then display welcome admin and display logout link on this page(fetchdata).

// By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be redirected to the home page.

// Else display “Please enter valid username and password” and login link on this page(fetchdata).
var express=require("express")
var app=express()
var sess=require('express-session')
cp=require("cookie-parser")
app.use(cp())
app.use(sess({
    secret:'This is key',
    resave:false,
    saveUninitialized:false
}))
app.use(express.static('../public',{index:'session.html'}))
app.get('/save',(req,res)=>{
    req.session.username=req.query.username
    req.session.pwd=req.query.pwd
    res.redirect('/fetchdata')
})
app.get('/fetchdata',(req,res)=>{
    if(req.session.username=="admin" & req.session.pwd=="admin@123"){
        res.send(`Welcome admin 
            <a href='/destroy'>Logout</a>`)
    }
    else{
        res.send(`Please enter valid credentials
            <a href='/'>Login Page</a>`)
        
    }
})
app.get('/destroy',(req,res)=>{
    res.clearcookie('connect.sid')
    res.send('cookie cleared')
})
app.listen(5040,()=>{
    console.log("Server")
})