const response = require("express")

//importar o arquivo json de estados-cidades
const express = require("express")
const estCidades = require("./data/estados-cidades.json")

const app = express()

app.get("/estados/:todos", (request, response) => {


    console.log("Uma requisição foi solicitada")
    response.status(200).send(estCidades)
})

app.listen(6000, ()=>{


console.log("Servidor funcionando normalmente")

}
)

app.get("/estados/:sigla", (request, response) => {

    console.log("Você é capaz")

   const sigl = request.params.sigla
   console.log(sigl)

   response.status(200).send(estCidades.find(siglass => siglass.sigla == sigl))


})

app.listen(3000, () => {


    console.log("Servidor funcionou")
})

