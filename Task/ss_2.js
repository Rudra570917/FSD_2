var express=require("express")
var app=express()
var sess=require("express-session")
app.use(sess({
    secret:'This is key',
    resave:false,
    saveUninitialized:false
}))
app.use(express.static('../public', {index:'form5.html'}))
app.get('/savesession',(req,res)=>{
    req.session.fname=req.query.fname
    req.session.pwd=req.query.pwd
    res.redirect('/fetch')
})
app.get('/fetch',(req,res)=>{
    res.send(`Welcome ${req.session.fname} 
        <a href='/destroy'>Logout</a>`)
})
app.get('/destroy',(req,res)=>{
    req.session.destroy()
    res.redirect()
})
app.listen(5678,()=>{
    console.log("server")
})