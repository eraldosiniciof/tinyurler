/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.alterTable('urls', (table) => {
    table.text('original', 255).alter()
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) =>
  knex.schema.alterTable('urls', (table) => {
    table.string('original').alter()
  })
