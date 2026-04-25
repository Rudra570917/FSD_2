var express=require("express")
const multer = require("multer")
var app=express()
 
app.use(express.static('../public',{index:'index.html'}))
storage=multer.diskStorage({
    destination:"Hello",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
upload=multer({storage})
app.post("/data",upload.single('mypic'),
(req,res)=>{
    file=req.file
    if(file){
        res.send(`File uploaded ${file.originalname} Done`)
    }
    else{
        res.send("Not uploaded")
    }

})
app.listen(5070,()=>{
    console.log("Server")
})