const http = require('http')

const output =  http.createServer((req,res)=>{
    res.end("Welcome Programmer Nazmul Huda")
})
output.listen(5000)
console.log("Server Running")
