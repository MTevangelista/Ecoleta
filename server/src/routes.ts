import express from 'express'
import knex from './database/connection'

const routes = express.Router()

/* 
1° parâmetro: rota
2° parâmetro: Função que será executada assim que o usuário acessar essa rota. O request é utilizado para obter dados  da requisição que está acontecendo na aplicação. O response serve para devolver uma resposta para p browser ou para qualquer aplicação que esteja consumindo essa rota.
*/
routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })

    return response.json(serializedItems)
})

export default routes