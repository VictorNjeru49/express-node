const { createReadStream } = require('fs');
var http = require('http');
var fs = require('fs');

http
.createServer(function(req, res) {
    const fileStream = fs.createReadStream('./content/text.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
})
.listen(3000);

const stream = createReadStream('./content/text.txt', {
    highWaterMark: 9000, 
    encoding: 'utf8'});

stream.on('data',(data) =>{
    console.log(data.toString());
})