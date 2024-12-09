const express = require("express");
const app = express();
const port = 3000;

const mySql = require("mysql");
const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "multi_commerce",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/products/:id", (req, res) => {
  db.query("SELECT * FROM products WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});