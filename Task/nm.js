var express=require("express")
var nm=require("nodemailer")
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
    to:'ddbhavsar74@gmail.com,pauravibhavsar80@gmail.com',
    subject:'This is auto generated',
    text:'Something',
    html:"<h1>Hello this is Rudra Bhavsar I have sent this email through my code </h1>",
    attachments:[{filename:'NewTux.png',
        path:'./NewTux.png'
    }]
}
trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(info)
    }
})