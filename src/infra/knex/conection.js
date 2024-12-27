const knexInstance = require('knex')

const { ENV_NAME } = require('@config/index')

const config = require('./')

export const knex = knexInstance(config[ENV_NAME])
