const { Router } = require("express") //importando ferramenta do express que cria rotas

const router = Router()

router.get('/', (req, res) => {
    res.send("Olá mundo da Alura do Brasil")
})

module.exports = router //exportando o router para outros arquivos que quiserem usar