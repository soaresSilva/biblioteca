require("dotenv").config();

const express = require("express"); //instalando a bliblioteca express
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookRoutes"); //instalando routes/bookRoutes
const { sequelizeConnect, syncDatabase } = require("./databases/mysqldb");

const app = express(); //construtor do objeto express
const PORT = process.env.PORT || 3000;

async function databasesConnecting() {
  await sequelizeConnect();
}

async function syncDatabases() {
  await syncDatabase();
}

databasesConnecting();

syncDatabases();

// Middleware
app.use(bodyParser.json());
app.use("/api", bookRoutes);

// // Sincronizar o banco de dados
// sequelize
//   .sync({ force: true }) // Isso vai recriar as tabelas
//   .then(() => console.log("Banco de dados sincronizado com sucesso!"))
//   .catch((err) => console.error("Erro de sincronização:", err));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
