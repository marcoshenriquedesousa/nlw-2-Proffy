import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.text('bio').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}