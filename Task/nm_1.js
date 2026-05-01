console.log("Starting nm_1.js...");
var express=require("express")
var nm=require("nodemailer")
var app=express()
app.use(express.static('./public',{index:'form.html'}))
app.get('/data',(req,res)=>{
    var trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:'rudrabhavsar26@gmail.com',
        pass:'mfxp ldxp sznn fjev'

    }
})
var mailoption={
    from:'rudrabhavsar26@gmail.com',
    to:req.query.email,
    subject:'Welcome User ',
    text:'Something',
    html:`Hello ${req.query.fname}`,
    
}
trans.sendMail(mailoption,(err,info)=>{
    if(info){
        res.send("Mail send successfully")
    }
    else{
        res.send("Mail sending fail")
    }
})

})
app.listen(5555,()=>{
    console.log("Server started on http://localhost:5555/");
})