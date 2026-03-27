// Create http webpage and display message “Welcome to Priyen sir's class” in h1 tag after 10 seconds.
const http=require('http')
setTimeout(()=>{
    http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Welcome to Priyen sir class')
        res.end()
    }).listen(5678,()=>{
        console.log('Server')
    })
},10000)
