const express = require("express") //função que cria servidro express
const rotaLivro = require("./rotas/livro")

const app = express() // chamando a função pra criar o servidor
app.use(express.json()) // aplicação recebe body do tipo json (post)

app.use('/livros', rotaLivro)

const port = 8000 // porta do front = 3000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})