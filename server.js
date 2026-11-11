//import http module that allows us to create webserver
//this is the node.js syntax for importing a module
const http = require('http')
//import to see files
const fs = require('fs')
//import to see file paths
const path = require('path')

//define our hostname and port - every web server needs a port number and a hostname..if we dont have a hostname we have bought or we are locally developing, we can use our loopback address or localhost
const HOSTNAME = '127.0.0.1' //local machine ip address
const PORT = 3000

//we can also respond to api calls or json request and send json back
//we can use something called routes
//by default our server hostname and port has been establisehd and we can create /other_pages using routes
//routes are just urls that respond to a request by tying it to a function or code
const server = http.createServer((req, res) =>{
    //set the server to allow other servers to access data..known as cross origin scripting (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*')  //* means all
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    //handle a fetch request GET
    //we need to establish a url that we like...it can be anything..we will make ours /api/data
    //we say if req.url equals this url and the http method is GET
    //we can use the build in url and method functions for req
    if(req.url === '/api/data' && req.method == 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'Hello from the API'}))
    }

    else if(req.url === '/' && req.method === 'GET'){
        const filePath = path.join(__dirname, 'index.html')

        //send the html file instead of just text
        fs.readFile(filePath, (err, content) =>{
            if (err){
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/plain')
                res.end('Internal Server Error: HTML File Not Found')
            }
            else{
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(content)
            }
        })
    }
})

//tell the server to listen on the port and hostname
//.listen function

server.listen(PORT,HOSTNAME, () =>{
    console.log('Server running')
})