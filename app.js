// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];

// // Flatten the array using lodash's flattenDeep function
// const newItems = _.flattenDeep(items);

// console.log(newItems); // Output: [1, 2, 3, 4]

// console.log('hello world')

const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Hello World</h1>')
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        // Blocking Code
        for (let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
            console.log(`${i} ${j}`);
        }}

        res.end('<h1>About Page</h1>')
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>Page Not Found</h1>')
    }
})

server.on('response', (res, req)=>{
    console.log(`Response: ${res.statusCode}`)
    res.end('Response Received')
})
server.listen(3000, () => {
    console.log('Server is running on port 3000')
})