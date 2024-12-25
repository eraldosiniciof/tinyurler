const path = require('path')
const dotenv = require('dotenv')

const ENV_NAME = process.env.NODE_ENV

const envPath = path.resolve(__dirname, `../../../.env.${ENV_NAME}`)

dotenv.config({ path: envPath })

const SERVER_PORT = process.env.SERVER_PORT
const DATABASE = process.env.DATABASE

module.exports = {
  ENV_NAME,
  SERVER_PORT,
  DATABASE
}
