const http = require('http')
const { runInNewContext } = require('vm')

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write('This is Home Page')
        res.end()
    }else if(req.url=="/about"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write('This is About Page')
        res.end()
    }else if(req.url=="/contract"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write('This is Contract Page')
        res.end()
    }
})

server.listen(5000)
console.log("Server Running")