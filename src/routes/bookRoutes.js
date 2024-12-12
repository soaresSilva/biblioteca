const express = require("express");
const Book = require("../models/mysqldb/Book");
const router = express.Router();

router.post("/books", async (req, res) => {
  try {
    // !TODO: Validar os dados antes de criar o livro
    const { name, author, pages, status } = req.body;
    const book = await Book.create({ name, author, pages, status });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para listar todos os livros
router.get("/books", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
