//apenas para referência, não está sendo usado na aplicação

const fs = require("fs") //file system: manipula arquivos

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))//JSON.parse: transforma em JSON
const novoDado = { id: '3', nome: 'Livro mais que demais'}

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))//JSON.stringify: transforma javascript em JSON

console.log(JSON.parse(fs.readFileSync("livros.json")))