const config = require('./')
const { ENV_NAME } = require('../config')

export const knex = require('knex')(config[ENV_NAME])
