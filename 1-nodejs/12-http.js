const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request-event')
  // res.end('Hello World!')
  if (req.url === '/') {
    // console.log('request-event')
    res.end('Hello World!')
  }
  if (req.url === '/about') {
    res.end('This is about page')
  }
  res.end(
    `<h1>Oops!</h1>
    <h2>The Page you are looking for is not there</h2>
    <a href= "/">Home</a>`
  )
})

server.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
