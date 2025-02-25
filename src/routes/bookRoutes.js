const express = require("express");
const bookController = require("../controllers/bookControllers.js");
const { authMiddleware } = require("../utils/auth");

const router = express.Router();


router.post("/books", authMiddleware, bookController.createBook);
router.get("/books", bookController.getAllBooks);
router.put("/books/:id", authMiddleware, bookController.updateBook);
router.delete("/books/:id", authMiddleware, bookController.deleteBook);

module.exports = router;