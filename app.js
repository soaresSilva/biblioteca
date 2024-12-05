const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/database');
const Book = require('./models/Book');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api', bookRoutes);

// Sincronizar o banco de dados
sequelize.sync({ force: true })  // Isso vai recriar as tabelas
  .then(() => console.log('Banco de dados sincronizado com sucesso!'))
  .catch(err => console.error('Erro de sincronização:', err));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
