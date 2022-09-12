//const { response } = require('express')
const http = require('http')
const PORT ='3000'
const HOSTNAME='127.0.0.1'

const server = http.createServer( function (req, res) {
    
    res.writeHead(200);
    res.end('Hello, World!');
  })

server.listen(PORT,HOSTNAME,()=> {
    console.log('Server is working on http://'+HOSTNAME +":"+ PORT) 
   // console.log(´${PORT}´)
} )

//let port = process.env.PORT