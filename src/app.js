require("dotenv").config();

const swaggerDocument = require("./swagger/v1.json");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express"); //instalando a bliblioteca express
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookRoutes"); //instalando routes/bookRoutes
const { sequelizeConnect, syncDatabase } = require("./databases/mysqldb");

const app = express(); //construtor do objeto express
const PORT = process.env.PORT || 3000;

async function initDatabases() {
  await sequelizeConnect();
  await syncDatabase(); // !TODO: Verificar ambiente de execução para sincronizar o banco de dados e criar as tabelas via migrations
}

initDatabases();

if (process.env.APP_ENV === "development") {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// Middleware
app.use(bodyParser.json());
app.use("/api", bookRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
