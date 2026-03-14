var fs=require('fs')
fs.writeFile("hello.txt","Good day",(err)=>{
    if(err) throw err
        
    console.log("written operation ended")

fs.appendFile("hello.txt","Is it a good day",(err)=>{
    if(err) throw err
        
    console.log("append done")

fs.readFile("hello.txt","utf-8",(err,data)=>{
    if(err)  throw err
       
    console.log(data)
    console.log("Read operation done")
})
})
})
console.log("Process ended")