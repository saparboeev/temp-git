const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("here is the home page");
    case "/about":
      res.end("here is the about page");
    default:
      res.end(`<h1>Oops</h1> <a href='/'>back home</a>`);
  }
});

server.listen(5000);
