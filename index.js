const http = require('http')
http.createServer((req, res) => {
  return res.end('hello world');
}).listen(8080)