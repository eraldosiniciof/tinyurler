import { UrlsRepository } from '@modules/urls/infra/repositories/UrlsRepositorys'

import { GetShortenedUrlController } from './GetShortenedUrlController'
import { GetShortenedUrlService } from './GetShortenedUrlService'

const getShortenedUrlFactory = () => {
  const urlsRepository = new UrlsRepository()

  const getShortenedUrlService = new GetShortenedUrlService(
    urlsRepository,
    process.env.EXPIRES_MINUTES
  )

  const getShortenedUrlController = new GetShortenedUrlController(getShortenedUrlService)

  return getShortenedUrlController
}

export { getShortenedUrlFactory }
