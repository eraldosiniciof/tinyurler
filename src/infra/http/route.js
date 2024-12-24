import Router from '@koa/router'

const RouterApp = new Router()

RouterApp.get('/', async (ctx) => {
  ctx.body = 'GET'
})

RouterApp.post('/', async (ctx) => {
  ctx.body = 'POST'
})

export { RouterApp }
