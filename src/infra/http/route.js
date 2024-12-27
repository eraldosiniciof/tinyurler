import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

import { koaSwagger } from 'koa2-swagger-ui'
import swaggerDocs from '../../../swaggerConfig' // Importe a configuração do Swagger

import { urlsRoutes } from '@modules/urls/infra/http/routes/urls'
1
const RouterApp = new Router()

RouterApp.get(
  '/docs',
  koaSwagger({
    swaggerOptions: {
      spec: swaggerDocs
    }
  })
)

RouterApp.use(bodyParser())
RouterApp.use(urlsRoutes.routes())
RouterApp.use(urlsRoutes.allowedMethods())

export { RouterApp }
