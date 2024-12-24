import dotenv from 'dotenv'
import '@babel/polyfill'
import Koa from 'koa'
import { RouterApp } from './route'

const envName = process.env.NODE_ENV
dotenv.config({ path: `.env.${envName}` })

const app = new Koa()

const port = process.env.SERVER_PORT

app.use(RouterApp.routes())

app.listen(port, () => console.log(`🔥️ Servidor ${envName.toUpperCase()} Rodando!`))
