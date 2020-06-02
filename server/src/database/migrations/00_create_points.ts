import Knex from 'knex'

// Realiza as alterações necessárias no banco
export async function up(knex : Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
}

// Utilizado para voltar atrás 'DELETAR A TABELA'
export async function down(knex : Knex) {
    return knex.schema.dropTable('point')
}