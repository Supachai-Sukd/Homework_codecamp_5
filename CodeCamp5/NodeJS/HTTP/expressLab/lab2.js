const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET request to homepage");
});

app.post("/expost", (req, res) => {
  res.send("POST request to homepage");
});

app.put("/exput", (req, res) => {
  res.send("PUT request to homepage");
});

app.delete("/exdelete", (req, res) => {
  res.send("DELETE request to homepage");
});

app.listen(3000, () => console.log("Express server start.."));
