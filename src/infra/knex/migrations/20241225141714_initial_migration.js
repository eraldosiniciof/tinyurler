/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable('urls', (table) => {
    table.bigIncrements('id').primary()
    table.string('original').notNullable()
    table.string('short').notNullable()
    table.datetime('created_at').notNullable()
    table.datetime('expires_at').notNullable()
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('urls')
