//importar e criar um express app
const express = require('express');
const app = express()

//mensagem de resposta
msg = "Hello World! Este é o Nodejs de um contêiner docker"
//criar um ponto final da api
app.get('/', (req, res) => res.send(msg));

app.listen(3000, () => {
    console.log("app rodando na porta 3000...")
})