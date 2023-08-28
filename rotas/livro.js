const { Router } = require("express") //importando ferramenta do express que cria rotas
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router //exportando o router para outros arquivos que quiserem usar