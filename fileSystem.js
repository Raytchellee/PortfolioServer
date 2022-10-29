//file system require node js
const fs = require('fs');
const http = require('http');

//read files
const server = http.createServer((req,res) => {
    fs.readFile('index.html', (err,data) => {
        if(err) throw err;
        // console.log(data);
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
})

server.listen(7500, '127.0.0.1');
console.log('it really worked!');
