const http = require('http')

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.end('Welcome to Our HOmepae')
}
if(req.url === '/about'){
    res.end('Here is the about page that has our history')
}
res.end(
`
<h1>Oopsies!!!</h1>
<p>We cannot find the page you are looking for</p>
<a href="/">Go Bakc Home</a> 
`
)
})

server.listen(5000)