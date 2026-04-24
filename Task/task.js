var express=require("express")
var app=express()
var sess=require("express-session")
app.use(express.urlencoded({extended:true}))
app.use(sess({
    secret:'This is key',
    resave:false
}))
app.use(express.static('../public',{index:'login.html'}))
app.post('/logindata',(req,res)=>{
    req.session.fname=req.body.fname
    res.redirect('/order.html')
})
app.post('/orderdata',(req,res)=>{
    req.session.item=req.body.item
    req.session.qty=req.body.qty
    res.redirect('/fetch')
})
app.get('/fetch',(req,res)=>{
    res.send(`Welcome user ${req.session.fname} with product name ${req.session.item} and quantity ${req.session.qty}`)
})
app.listen(5078,()=>{
    console.log("server")
})