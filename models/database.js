const { Sequelize } = require('sequelize');

// Substitua as credenciais conforme necessário
const sequelize = new Sequelize('biblioteca', 'root', 'alisson98', {
  host: 'localhost',
  dialect: 'mysql',
});

// Testar a conexão
sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch(err => console.error('Erro de conexão:', err));

  module.exports = sequelize;
