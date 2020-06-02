import express, { request, response } from 'express'
import knex from './database/connection'

const routes = express.Router()

/* 
1° parâmetro: rota
2° parâmetro: Função que será executada assim que o usuário acessar essa rota. O request é utilizado para obter dados  da requisição que está acontecendo na aplicação. O response serve para devolver uma resposta para p browser ou para qualquer aplicação que esteja consumindo essa rota.
*/
// Lista os items de coleta
routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })

    return response.json(serializedItems)
})

// Cadastro de um ponto de coleta
routes.post('/points', async (request, response) => {
    // Recurso de desestruturação do javascript
    const { 
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body

    const trx = await knex.transaction()

    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    })

    // Relacionamento entre as tabelas de points e items
    const point_id = insertedIds[0]

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id: point_id
        }
    })

    await trx('point_items').insert(pointItems)

    return response.json({ sucess: true })
})

export default routes