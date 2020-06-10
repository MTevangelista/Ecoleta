import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
    /* 
1° parâmetro: rota
2° parâmetro: Função que será executada assim que o usuário acessar essa rota. O request é utilizado para obter dados  da requisição que está acontecendo na aplicação. O response serve para devolver uma resposta para p browser ou para qualquer aplicação que esteja consumindo essa rota.
*/
// Lista os items de coleta
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.104:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItems)
    }
}

export default ItemsController