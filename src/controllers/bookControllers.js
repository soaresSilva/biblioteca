const Book = require("../models/mysqldb/Book");

// Criar um novo livro
const createBook = async (req, res) => {
  try {
    const { name, author, pages, status } = req.body;
    const book = await Book.create({ name, author, pages, status });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os livros
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Atualizar um livro existente
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, author, pages, status } = req.body;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    await book.update({ name, author, pages, status });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar um livro
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    await book.destroy();
    res.status(200).json({ message: "Livro deletado com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
};