const http = require('http')
const fs = require('fs')
const url = require('url')
let readF = require('./readFiles')
http.createServer(function (req, res) {
  const pathname = url.parse(req.url).pathname
  console.log(pathname)
  if (pathname === '/chess') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else {
    fs.readFile('homepage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  }
}).listen(8080)
