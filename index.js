//importar o framework express
const express = require("express");

//inicializar a aplicação com o express
const app = express();

/**
 *  ROTAS DE ACESSO
 */

//rota padrão - inicial
app.get("/", (req, res) => {
    res.send("Home");
});

//listar veiculos
app.get("/veiculos", (req, res) => {
    res.send("Listar os veículos");
});

//cadastrar os veiculos
app.get("/cadastrar", (req, res) => {
    res.send("Cadastrar os veículos");
});

//porta de aceeso ao servidor express
const port = 8080;

//iniciar o servidor
app.listen(port, console.log(`Servidor rodando na porta ${port}`));