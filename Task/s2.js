// Write express js script to print message in next line splitting by " white space" in that message. Use get method to submit the data. HTML file contains form of text area for the message and submit button. 
var express=require("express")
var app=express()
app.use(express.static('../public',{index:'form2.html'}))
app.get('/calc',(req,res)=>{
    n1=parseInt(req.query.num1)
    n2=parseInt(req.query.num2)
    if(req.query.formula==="add"){
        res.write(JSON.stringify(n1+n2))
    }
    else if(req.query.formula==="sub"){
        res.write(JSON.stringify(n1-n2))
    }
    else if(req.query.formula==="mul"){
        res.write(JSON.stringify(n1*n2))
    }
    else if(req.query.formula==="div"){
        res.write(JSON.stringify(n1/n2))
    }
    else{
        res.send()
    }
})
app.listen(5640,()=>{
    console.log("Server")
})