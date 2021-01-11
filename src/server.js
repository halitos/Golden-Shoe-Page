const express = require("express");
const products = require("./products");
const path = require("path");
const app = express();

// const { Pool } = require("pg");
// app.use(express.json());

// const db = new Pool({
//   user: "44788",
//   host: "localhost",
//   database: "golden_shoe",
//   password: "*****",
//   port: 5432,
// });

// app.get("/amount", function (req, res) {
//   db.query(`SELECT * FROM products where id=1`)
//     .then((result) => {
//       if (result) res.json(result.rows);
//     })
//     .catch((err) => res.status(500).json({ error: err }));
// });

app.use(express.static(path.join(__dirname, "build")));

app.get("/products", (req, res) => {
  return res.json({ products });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});
