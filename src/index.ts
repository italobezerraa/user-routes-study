import express from "express";
import usersRoute from "./routes/users.route";

const app = express();

// Configuração da aplicação
app.use(express.json());

// Configuração de rotas
app.use(usersRoute);

// Inicialização do servidor
app.listen(3000, () => {
  console.log("Servidor conectado e rodando na porta 3000!");
});
