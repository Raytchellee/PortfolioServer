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


//create files
// fs.writeFile('myFirstFile.txt', 'Hello Ray World', (err) => {
//     if(err) throw err;
//     console.log('file was created successfully!')
// })

// append or update files
//use appendFile to append and writeFile to overwrite
// fs.appendFile('myFirstFile.txt','\nHello Me \nI am updated!', (err) => {
//     if(err) throw err
//     console.log('updated worked!')
// } )
//delete files
// fs.unlink('web-calc.png',(err) => {
//     if(err) throw err;
//     console.log('File deleted successfully');
// })

//rename files
fs.rename('myFirstFile.txt','demoFile.txt',(err) => {
    if (err) throw err;
    console.log('file renamed!');
})