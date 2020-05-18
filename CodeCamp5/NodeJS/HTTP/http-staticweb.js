const http = require('http')
const fs = require('fs')

function renderHtml(filename, req, res) {
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(data)
        res.end()
    })
}

http.createServer( (req, res) => {
    if (req.url === '/')
    return renderHtml('./index.html', req, res)

    if (req.url === '/form')
    return renderHtml('./form.html', req, res)
    
    res.writeHead(404, {'content-type' : 'text/html'})
    res.write('file not found')
    res.end()

}).listen(8080, () => console.log('Start server...'))