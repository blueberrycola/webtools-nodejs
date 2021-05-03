const http = require('http')
const fs = require('fs')
const port = 10200

const server = http.createServer(function (req, res) {
    
   //Send homepage to client, contains error handling
    fs.readFile('node_index.html', function(error, data) {
        if(error) {
            res.writeHead(404)
            res.write("Error: Not Found")
        } else {
            res.writeHead(200, {'Content-Type': 'text/html' })
            res.write(data)
        }
        res.end()
    })
    
})

server.listen(port, function(error) {
    if(error) {
        console.log('oops we made a fucky wucky: ', error)
    } else {
        console.log('Server listening port: ', port)
    }
})