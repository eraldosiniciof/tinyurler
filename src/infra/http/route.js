import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

import { urlsRoutes } from '@modules/urls/infra/http/routes/urls'

const RouterApp = new Router()

RouterApp.use(bodyParser())
RouterApp.use(urlsRoutes.routes())
RouterApp.use(urlsRoutes.allowedMethods())

export { RouterApp }
