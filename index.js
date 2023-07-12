// steps to generate json server

// 1) import json server
const jsonServer=require('json-server')

// 2) create a server application using json server
const server=jsonServer.create()

// 3) create a middleware to use in json server
const middleware=jsonServer.defaults()

// 4) set path/route for json file 
const router=jsonServer.router("db.json")

// 5)set port number to run  server app
const port=3000 || process.env.PORT

// 6)use middleware and router to the server appliaction
//   file to middleware then to route

server.use(middleware)
server.use(router)

// 7)to listen /run server in specified port
server.listen(port,()=>{
    console.log(`vlog server app started at port ${port}`);
})

