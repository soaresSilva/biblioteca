const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/auth");
const User = require("../models/mysqldb/User");

/**
 * Realiza o login do usuário.
 * Verifica as credenciais e retorna um token JWT se forem válidas.
 */
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar se o usuário existe no banco de dados
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Comparar a senha informada com a armazenada no banco de dados
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Gerar um token JWT
    const token = generateToken(user.id);
    return res.status(200).json({ message : "Login efetuado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ error: "Erro ao realizar login" });
  }
};

/**
 * Criação de um novo usuário.
 */
const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar se o nome de usuário já está em uso
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "Nome de usuário já está em uso" });
    }

    // Hash da senha antes de salvar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o usuário no banco de dados
    const newUser = await User.create({ username, password: hashedPassword });
    return res.status(201).json({ message: "Usuário criado com sucesso", newUser });
  } catch (err) {
    return res.status(500).json({ error: "Erro ao registrar usuário" });
  }
};

// Exportar as funções
module.exports = {
  login,
  register,
};