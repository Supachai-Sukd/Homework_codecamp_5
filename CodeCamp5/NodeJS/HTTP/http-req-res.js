const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "content-type": "text/html; charset=utf8",
    });
    // res.statusCode = 200
    // res.setHeader('content-type', 'text/html')

    if (req.url === "/") {
      res.write("<H2> This is Home page </H2>");
      for (let i=1; i < 7; i++)
        res.write(`<H${i}> ยินดีต้อนรับ </H${i}>`);
      return res.end();
    }
    if (req.url === "/user") {
      res.write("<H2> This is user page </H2>");
      return res.end();
    }

    //การทำ root Function style
    function form(req, res) {
      res.write(`<!DOCTYPE html>
            <html>
            <body>
            
            <h2>HTML Forms</h2>
            
            <form action="/action_page.php">
              <label for="fname">First name:</label><br>
              <input type="text" id="fname" name="fname" value="John"><br>
              <label for="lname">Last name:</label><br>
              <input type="text" id="lname" name="lname" value="Doe"><br><br>
              <input type="submit" value="Submit">
            </form> 
            
            <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
            
            </body>
            </html>`);
      res.end();
    }
    if (req.url === "/form") {
      return form(req, res)
    }

    res.writeHead(404, "Not found", {
      "content-type": "text/html",
    });
    // res.statusCode = 404
    // res.statusMessage = 'Not found in page'
    // res.setHeader('content-type', 'text/html')

    res.write(res.statusMessage);
    res.end("<H3> Page not found nakrub</H3>");
  })
  .listen(8080, () => console.log("Server start..."));
