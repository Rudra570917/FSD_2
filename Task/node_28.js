const http=require('http')

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<a href='/'>Home</a><br> <a href='/about'>About</a><br><a href='/contact'>Contact us</a>")
            
        res.end()
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>This is about  page')
        res.end()
    }
    else if(req.url=='/contact' | req.url=='/Contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h2 id="a1" style="background-color:blue";>Contact Page</h2>')
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('Page not found')
    }
}).listen(5678,()=>{
    console.log('http://localhost:5678')
})
