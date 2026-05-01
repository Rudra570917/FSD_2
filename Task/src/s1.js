var express=require("express")
var app=express()
app.set('view engine','ejs')
app.use(express.urlencoded())
app.get('/',(req,res)=>{
    res.render('form')
})
app.post('/data',(req,res)=>{
    fname=req.body.fname
    mark=req.body.mark
    res.render('out',{fname,mark})
})
app.listen(5332,()=>{
    console.log("Server")
})