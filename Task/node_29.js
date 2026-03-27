const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1>Hello</h1><img src='c.jpeg'/>")
        res.end()
    }
    else if(req.url=='/c.jpeg'){
        data=fs.readFileSync('c.jpeg')
        res.writeHead(200,{'Content-Type':'image/jpeg'})
        res.end(data)
    }
}).listen(5242,()=>{
    console.log("Server")
})