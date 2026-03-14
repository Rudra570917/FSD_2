var fs=require('fs')
var path=require('path')

var a=path.dirname('FSD-Mern\path.txt')
 var b=path.basename('FSD-Mern\path.txt')
 var c=a+"/"+b

//fs.mkdir("FSD-Mern",(err)=>{
    // if(err) throw err
    fs.writeFile(c,"Some data",(err)=>{
        if(err) throw err
    })
    fs.unlink(c,(err)=>{
        if(err) throw err
    })
    
        
    
// })