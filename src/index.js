import dotenv from 'dotenv'
import '@babel/polyfill'
import Koa from 'koa'

const envPath = `.env.${process.env.NODE_ENV}`
dotenv.config({ path: envPath })

const app = new Koa()

const port = process.env.SERVER_PORT

app.use(async (ctx) => {
  ctx.body = 'Hello, World'
})

app.listen(port, () => console.log('🔥️ Servidor rodando na porta', port))
