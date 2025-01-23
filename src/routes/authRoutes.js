const express = require("express");
const { login, register } = require("../controllers/authController");

const router = express.Router();

// Rota para registrar um novo usuário
router.post("/register", register);

// Rota para login
router.post("/login", login);

module.exports = router;
