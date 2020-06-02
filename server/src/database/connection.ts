import Knex from 'knex'
import path from 'path'

const connection = Knex({
    client: 'sqlite3',
    connection: {
        // Armazena o arquivo do banco de dados
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
})

export default connection