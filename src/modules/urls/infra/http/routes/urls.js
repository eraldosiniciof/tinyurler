import Router from '@koa/router'

import { createShortenedUrlFactory } from '@modules/urls/useCases/CreateShortenedUrl/CreateShortenedUrlFactory'
import { getShortenedUrlFactory } from '@modules/urls/useCases/GetShortenedUrl/GetShortenedUrlFactory'

const urlsRoutes = new Router({
  prefix: '/shorten'
})

urlsRoutes.post('/', createShortenedUrlFactory().handle)

urlsRoutes.get('/:short', getShortenedUrlFactory().handle)

export { urlsRoutes }
