const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Rota para adicionar um livro
router.post('/books', async (req, res) => {
  try {
    const { name, author, pages, status } = req.body;
    const book = await Book.create({ name, author, pages, status });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para listar todos os livros
router.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;