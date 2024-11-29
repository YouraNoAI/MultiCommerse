import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Untuk mendapatkan path file saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Pastikan direktori uploads ada
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'Multi_Store',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Konfigurasi multer untuk upload file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Folder untuk menyimpan file upload
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Menyimpan file dengan nama unik
  },
});

const upload = multer({ storage });

// Route untuk upload produk
app.post('/upload', upload.single('productImage'), (req, res) => {
  const { productName, productDescription, productPrice } = req.body;
  const productImage = req.file.filename;

  const sql = 'INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)';
  db.query(sql, [productName, productDescription, productPrice, productImage], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ message: 'Product uploaded successfully!', productId: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});