const http = require('http')
// const server = http.createServer()
//Refactor
// http.createServer( (req, res) => {
//     console.log('request coming...')
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hello World')
//     res.end()
// }).listen(8080)

//Function Style
function app (req, res) {
    console.log('request coming...')
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('Hello World')
    res.end()
}

//Use method createServer
http.createServer(app).listen(8080)



// server.on('request', (req, res) => {
//     console.log('request coming...')
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hello World')
//     res.end()
// })

// server.listen(8080)