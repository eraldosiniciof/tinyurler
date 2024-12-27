import Router from '@koa/router'

import { createShortenedUrlFactory } from '@modules/urls/useCases/CreateShortenedUrl/CreateShortenedUrlFactory'

const urlsRoutes = new Router({
  prefix: '/shorten'
})

urlsRoutes.post('/', createShortenedUrlFactory().handle)

export { urlsRoutes }
