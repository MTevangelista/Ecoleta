import path from 'path'

module.exports = {
    client: 'sqlite3',
    connection: {
        // Armazena o arquivo do banco de dados
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
}