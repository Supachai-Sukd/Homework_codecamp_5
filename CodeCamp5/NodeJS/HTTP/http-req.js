const http = require('http')
const server = http.createServer()

server.on('request' , (req, res) => {
    let {headers, method, url} = req
    console.log(headers)
    console.log(method)
    console.log(url)
})

server.listen(8080)