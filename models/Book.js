const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pages: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('lendo', 'finalizado', 'pendente'),
    defaultValue: 'pendente',
  },
});

module.exports = Book;