const addr="http://localhost:5692/login.html"
url=require('url')
http=require('http')
fs=require('fs')
path=require('path')

http.createServer((req,res)=>{
    file="."+(req.url=='/'?'/login.html':req.url)
    fs.readFile(file,(err,data)=>{
        if(err){
            res.end('File not found')
        }
        else{
            res.writeHead(200,{"Content-Type":'text/html'})
            res.end(data)
        }
    })
    

}).listen(5692,()=>{
    console.log("Server")
})
q=url.parse(addr)
qdata=q.pathname
    if(req.url==qdata){
    data=fs.readFileSync("."+qdata)
    res.end(data)
}