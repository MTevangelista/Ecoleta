import express from 'express'

const routes = express.Router()

/* 
1° parâmetro: rota
2° parâmetro: Função que será executada assim que o usuário acessar essa rota. O request é utilizado para obter dados  da requisição que está acontecendo na aplicação. O response serve para devolver uma resposta para p browser ou para qualquer aplicação que esteja consumindo essa rota.
*/
routes.get('/', (request, response) => {
    return response.json({ message: 'Hello word' })
})

export default routes