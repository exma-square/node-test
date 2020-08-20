const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  const text = fs.readFileSync('./index.html', 'utf8');
  return res.end(text);
}).listen(8080)