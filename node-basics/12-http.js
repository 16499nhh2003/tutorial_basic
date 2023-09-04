const http = require("http");
const server = http
  .createServer((req, res) => {
    let url = rq.url;
    console.log(url);
    if (url === "/") {
      rs.end("welcome");
    } else if (url === "/about") {
      rs.end("about");
    } else {
      rs.end(` <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
    }
  })
  .listen(8080);
  
