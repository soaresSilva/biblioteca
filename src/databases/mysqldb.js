const { Sequelize } = require("sequelize");
const dbConfig = require("../config/mysqldb");
const Chalk = require("../utils/Chalk");

const Book = require("../models/mysqldb/Book");

const sequelize = new Sequelize(dbConfig);

Book.init(sequelize);

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
