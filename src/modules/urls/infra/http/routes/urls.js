import Router from '@koa/router'
import { createShortenedUrlFactory } from '../../../useCases/CreateShortenedUrl/CreateShortenedUrlFactory'

const urlsRoutes = new Router({
  prefix: '/shorten'
})

urlsRoutes.post('/', createShortenedUrlFactory().handle)

export { urlsRoutes }
