const path = require('path')

const { DATABASE, ENV_NAME } = require('../config/index')

module.exports = {
  [ENV_NAME]: {
    client: 'pg',
    connection: DATABASE,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: path.resolve(__dirname, './migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(__dirname, './seeds')
    }
  }
}
