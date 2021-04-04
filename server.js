var http = require('http')

var port = 8088

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World (from auth0-authn-nodejs-app)\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
