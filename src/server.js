const products = require("./products");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/products", (req, res) => {
  return res.json({ products });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080. Ready to accept requests!");
});
