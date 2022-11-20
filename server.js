const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url == "/" ? "index.html" : req.url
  );
  console.log(filePath);
  let contentType = getContentType(filePath) || "index.html";
  let emptyPath = path.join(__dirname, "public", "404.html");
  // fs.readFile(filePath,'utf8', (err,content) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // console.log('errrrr===',err)
        fs.readFile(emptyPath, "utf8", (err, content) => {
          res.writeHead(200, { "Content-Type": contentType });
          res.end(content);
        });
      } else {
        res.writeHead(500);
        res.end("<h1>A server error has occured</h1>");
      }
    }
    if (!err) {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
  console.log(req.url);
});

const getContentType = (filePath) => {
  // console.log(filePath)
  let extname = path.extname(filePath);
  if (extname == ".js") {
    return "text/javascript";
  }
  if (extname == ".css") {
    return "text/css";
  }
  if (extname == ".js") {
    return "text/html";
  }
  if (extname == ".png") {
    // console.log('pnggggggg');
    return "image/png";
  }
  if (extname == ".jpg") {
    // console.log('jpggggggg');
    return "image/jpg";
  }
  if (extname == ".PNG") {
    // console.log('Pnggggggg');
    return "image/png";
  }
  if (extname == ".JPG") {
    // console.log('Jpggggggg');
    return "image/jpg";
  }
};

const port = 7000;

server.listen(port, "127.0.0.1", () => {
  console.log(`Server is running on ${port}`);
});
