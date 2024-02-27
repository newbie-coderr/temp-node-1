//! in http module there is createServer method
//! *** createServer(request,respnse)
//* request is client requests to get info about method
//* response is what we send to client

//! Listen is method to describe what port we are listening to

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our Short Story");
    return;
  }
  res.end(`
  <h1>Oops</h1>
  <p> We can't seem to find the page you are looking for</p>
  <a href="/">back Home</a>
  `);
});

server.listen(5000);
