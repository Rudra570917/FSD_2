var express=require("express")
var app=express()
var sess=require("express-session")
app.use(sess({
    secret:'This is key',
    resave:false,
    saveUninitalized:false
}))
app.get('/',(req,res)=>{
    if(req.session.a){
        req.session.a++
        res.send(`You visited the page ${req.session.a} times`)
    }
    else{
        req.session.a=1
        res.send("Welcome user")
    }
})
app.listen(5555,()=>{
    console.log("Server")
})
