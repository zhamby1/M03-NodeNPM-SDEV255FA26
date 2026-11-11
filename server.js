//import or dependecies/packages/libraries
const express = require('express')
const cors = require('cors')
const path = require('path')

//initialize the express instance/code/server
const app = express()
const port = 3000

//there a couple of built in express functions that will help us like app.use which means use this package or middleware
//cors is what we call middleware becasue it is activated or used before reaching server endpoints
app.use(cors())

//now we can define endpoints / urls in individual statments without having to rely on if-else or the httpCreateserver function
//instead we say app.http-method.... so app.get for get requests or app.post for post requests

//serving our html file from the home page
//the first argument is the path or url that would be visited
//the second is the req,res
//  / - means index or homepage
app.get('/', (req,res) =>{
    //there are also built in response (res) functions in express and they are easier to use
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/data', (req,res) =>{
    //express automatically formts json and sends the correct headers using .json() function
    res.json({message: "Hello from the servers API"})
})


//start server to listen
app.listen(port, () =>{
    console.log('Server running')
})