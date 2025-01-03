import '@babel/polyfill'
import Koa from 'koa'
import cors from '@koa/cors'

import { ENV_NAME, SERVER_PORT } from '@config/index'

import { RouterApp } from './route'
import { handlerErrors } from './errors/handlerErrors'

const app = new Koa()

app.use(cors())
app.use(handlerErrors)
app.use(RouterApp.routes())

app.listen(SERVER_PORT, () => console.log(`🔥️ Servidor ${ENV_NAME.toUpperCase()} Rodando!`))
