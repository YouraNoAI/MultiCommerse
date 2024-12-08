const express = require("express");
const app = express();
const port = 3001;

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

app.get("/", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) throw err;
        res.json(result.map((product) => ({ name: product.name, description: product.description })));
    });
});

app.post("/insertProduct", (req, res) => {
  db.query(
    "INSERT INTO products (image, name, description, price, category, stock) VALUES (?, ?, ?, ?, ?, ?)",
    [req.body.image, req.body.name, req.body.description, req.body.price, req.body.category, req.body.stock],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

app.get("/getProduct", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/updateProduct", (req, res) => {
  db.query("UPDATE products SET ? WHERE id = ?", [req.body, req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result);
    }
  );
});

app.post("/deleteProduct", (req, res) => {
  db.query("DELETE FROM products WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/searchProduct", (req, res) => {
  db.query("SELECT * FROM products WHERE name LIKE ?", [req.body.name], (err, result) => {
    if (err) throw err;
    res.json(result);
    }
  );
});

app.get("/getProductByCategory/:category", (req, res) => {
  db.query("SELECT * FROM products WHERE category = ?", [req.params.category], (err, result) => {
    if (err) throw err;
    res.json(result);
    }
  );
});

app.get("/getProductByPrice/:price", (req, res) => {
  db.query("SELECT * FROM products WHERE price = ?", [req.params.price], (err, result) => {
    if (err) throw err;
    res.json(result);
    }
  );
});

app.get("/getProductByStock/:stock", (req, res) => {
  db.query("SELECT * FROM products WHERE stock = ?", [req.params.stock], (err, result) => {
    if (err) throw err;
    res.json(result);
    }
  );
});

app.get("/getProductByLatest", (req, res) => {
  db.query("SELECT * FROM products ORDER BY uploadDate DESC LIMIT 1", (err, result) => {
    if (err) throw err;
    res.json(result);
    }
  );
});

app.get("/getProductByOldest", (req, res) => {
  db.query("SELECT * FROM products ORDER BY uploadDate ASC LIMIT 1", (err, result) => {
    if (err) throw err;
    res.json(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
