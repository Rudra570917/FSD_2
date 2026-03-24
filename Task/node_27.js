const http=require('http')
http.createServer((req,res)=>{
   res.writeHead(200,{"Content-Type":"application/json"})

res.write('{"name":"Rudra","Age":20}')
    res.end()
    //res.write("Hiiiii")
}).listen(5678,()=>{
    console.log("Server connected")
})