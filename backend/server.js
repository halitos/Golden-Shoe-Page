const express = require("express");
const db = require("./dbConnection");
const products = require("../src/products");
const path = require("path");
const app = express();
app.use(express.json());

app.get("/prods", function (req, res) {
  db.query(`SELECT * FROM products where id=1`)
    .then((result) => {
      if (result) res.json(result.rows);
    })
    .catch((err) => res.status(500).json({ error: err }));
});

app.put("/prods/:id/increment-amount", (req, res, next) => {
  let prodId = req.params.id;
  let updateSql =
    "update products set quantity = quantity + 1 where id = $1 returning quantity";
  db.query(updateSql, [prodId])
    .then((result) => {
      res.status(200).json(result.rows[0].views);
    })
    .catch((e) => {
      console.log(e.stack);
      next(e);
    });
});

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
