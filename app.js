const express = require("express") //função que cria servidro express
const app = express() // chamando a função pra criar o servidor
const port = 8000 // porta do front = 3000

app.get('/', (req, res) => {
    res.send("Olá mundo da Alura")
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})