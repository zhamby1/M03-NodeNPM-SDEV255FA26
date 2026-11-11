//import http module that allows us to create webserver
//this is the node.js syntax for importing a module
const http = require('http')

//define our hostname and port - every web server needs a port number and a hostname..if we dont have a hostname we have bought or we are locally developing, we can use our loopback address or localhost
const HOSTNAME = '127.0.0.1' //local machine ip address
const PORT = 3000

//create our server
//we use the http built in method/function createServer
//all servers must handle requests and responses..you can call them whatever but the http module know that the first two parameters/arguments you use in createServer represent the request and response
const server = http.createServer((req, res) =>{
    //set the codes we need and the type of data we are sending back
    res.statusCode = 200 //this is the status code in http for a succesful exchange of request and response
    res.setHeader('Content-Type', 'text/plain')

    //send the response using the .end function as part of the res in http module.  sends data then closes connection
    res.end('Hello Again World')
})

//tell the server to listen on the port and hostname
//.listen function

server.listen(PORT,HOSTNAME, () =>{
    console.log('Server running')
})