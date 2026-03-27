// Create HTTP webpage on which home page will fetch json data, about page shows centrally aligned message “Hello from class” in red color and cyan background using internal css styling. And any other page shows “404 error”. (Render Response & Routing) 
const http=require('http')
const fs=require('fs')
const j={
    "name":"Rudra",
    "Age":20,
    "College":"LJ"
}
a=JSON.stringify(j)
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write(a)
        res.end()
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Hello from class')
    }
}).listen(5679,()=>{
    console.log("Server")
})

