const http = require('http')
const { readFileSync } = require('fs')

const Homepage = readFileSync('./navbar-app/index.html')
const style = readFileSync('./navbar-app/style.css')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200,{ 'content-type': 'text/html'})
        res.write(Homepage)
        res.end()
    }
    else if(req.url === '/style.css') {
        res.writeHead(200,{ 'content-type': 'text/css'})
        res.write(style)
        res.end()
    }
    else if(req.url === '/about') {
        res.writeHead(200,{ 'content-type': 'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }
    else{
        res.writeHead(404, { 'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }

})

server.listen(5000, ()=>{
    console.log('server is running on port 5000...')
})