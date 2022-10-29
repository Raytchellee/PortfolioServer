const http = require('http');

// create server with http variable

const server = http.createServer(function(req,res) {
    //Headers
    // res.writeHead(200, {
    //     'Content-Type': 'text/plain'
    // }).end('Welcome to Ray World');
    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // }).end(`
    // {
    //     "name" : "Ray Ray",
    //     "age" : 24,
    //     "hobby" : "coding"
    // }
    // `);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    }).end(`
        <html>
            <body style="background:black; text-align:center; color:white" >
                <h1>
                Welcome to Ray world
                </h1>
                <p>
                I hope you are learning
                </p>
            </body>
        </html>
    `);

})

server.listen(5000, '127.0.0.1');

console.log('You are connected');
