import * as http from 'http'

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html')
  res.end(req.url)
})

server.listen(3000)
