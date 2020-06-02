import Knex from 'knex'

// Realiza as alterações necessárias no banco
export async function up(knex : Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

// Utilizado para voltar atrás 'DELETAR A TABELA'
export async function down(knex : Knex) {
    return knex.schema.dropTable('items')
}