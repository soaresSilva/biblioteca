const { DataTypes } = require("sequelize");

const UserBook = {
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "quero ler", // Pode ser 'lendo', 'quero ler', 'lido'
    },
};

module.exports = UserBook;