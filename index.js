'use strict'

const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Encoding', 'gzip')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.write('{"message": "ok"}', 'utf-8')
  res.end()
})
server.listen(process.env.PORT || 8000)
