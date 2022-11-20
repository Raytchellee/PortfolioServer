const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let request = getReqUrl(req.url);

  let filePath = path.join(__dirname, "public", request || req.url);
  //   console.log(filePath);
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
  //   console.log(req.url);
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
    return "image/png";
  }
  if (extname == ".jpg") {
    return "image/jpg";
  }
  if (extname == ".PNG") {
    return "image/png";
  }
  if (extname == ".JPG") {
    return "image/jpg";
  }
};

const getReqUrl = (req) => {
  if (req == "/" || req == "/home") {
    return "index.html";
  }
  if (req == "/contact") {
    return "contact.html";
  }
  if (req == "/about") {
    return "about.html";
  }
};

const port = 7000;

server.listen(port, "127.0.0.1", () => {
  console.log(`Server is running on ${port}`);
});
