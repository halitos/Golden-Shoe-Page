const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080. Ready to accept requests!");
});