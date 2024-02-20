var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var errorPagePath = "./404.html";
    var filename = "." + q.pathname + ".html";
    console.log("pathname: ", q.pathname);

    fs.readFile(filename, function (err, data) {
      if (err) {
        const errorPage = fs.readFileSync(errorPagePath, (err, data) => {
          if (err) {
            return console.log("404 is empty");
          } else {
            return data;
          }
        });

        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(errorPage);
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
