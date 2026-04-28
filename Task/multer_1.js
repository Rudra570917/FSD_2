var express=require("express")
const multer = require("multer")
var app=express()
 
app.use(express.static('./public',{index:'f.html'}))
storage=multer.diskStorage({
    destination:"Jambo",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
upload=multer({storage})
app.post("/data",upload.array('myfile',3),
(req,res)=>{
  let  file=req.files
    if(file){
        for (i of file){
            res.write(`${i.originalname} will uploaded`)
        }
        res.send()
    }
    else{
        res.send("Can't uploaded")
    }

})
app.listen(5070,()=>{
    console.log("Server")
})