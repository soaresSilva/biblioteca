const { Sequelize } = require("sequelize");
const dbConfig = require("../config/mysqldb");
const Chalk = require("../utils/Chalk");
const Book = require("../models/mysqldb/Book");
const User = require("../models/mysqldb/User");
const UserBook = require("../models/mysqldb/UserBook");

const sequelize = new Sequelize(dbConfig);
User.init(sequelize);
Book.init(sequelize);
UserBook.init(sequelize);

Book.associate({ User, UserBook });
User.associate({ Book, UserBook });
UserBook.associate({ User, Book });

const sequelizeConnect = async () => {
  try {
    await sequelize.authenticate();
    Chalk.info("Conexão com o MySQL estabelecida com sucesso.");
  } catch (error) {
    Chalk.error("Falha ao conectar com o MySQL: ", error);
  }
};

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    Chalk.info("Banco de dados sincronizado com sucesso.");
  } catch (error) {
    Chalk.error("Falha ao sincronizar o banco de dados: ", error);
  }
};

module.exports = {
  sequelizeConnect,
  syncDatabase,
};
