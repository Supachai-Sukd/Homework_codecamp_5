const http = require("http");
const fs = require("fs");
const url = require("url");

function renderHtml(filename, req, res) {
  fs.readFile(filename, (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
}

http
  .createServer((req, res) => {
    let p_url = url.parse(req.url, true);
    console.log(p_url.pathname);
    console.log(p_url.query);

    if (req.url === "/") return renderHtml("./form-get.html", req, res);

    if (p_url.pathname === "/getdata") {
      res.writeHead(200, { "content-type": "text/html; charset=utf8" });
      res.write(`<h1> We got your data</h1>`);
      res.write(`<p> ชื่อ : ${p_url.query.fname}</p>`);
      res.write(`<p> นามสกุล : ${p_url.query.lname}</p>`);
      return res.end();
    }
    //ถ้่าหล่นมาตรงนี้คือหาไม่เจอ
    console.log(req.url);
    res.writeHead(404, { "content-type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8080, () => console.log("Start server..."));
