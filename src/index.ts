import express from "express";
import usersRoute from "./routes/users.route";

const app = express();

app.use(usersRoute);

app.listen(3000, () => {
  console.log("Servidor conectado e rodando na porta 3000!");
});
