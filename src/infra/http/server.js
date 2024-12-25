import '@babel/polyfill'
import Koa from 'koa'
import { RouterApp } from './route'
import { ENV_NAME, SERVER_PORT } from '../config'

const app = new Koa()

app.use(RouterApp.routes())

app.listen(SERVER_PORT, () => console.log(`🔥️ Servidor ${ENV_NAME.toUpperCase()} Rodando!`))
