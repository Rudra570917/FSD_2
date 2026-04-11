var express=require("express")
var app=express()
app.get('/user/:id',(req,res)=>{
    const uid=req.params.id
    const uname=req.query.name
    const mark=req.query.mark
    
    res.json({
        "message":"Data received",
        "params":{uid},
        "query":{uname,mark}
    })
})
app.listen(5678)


