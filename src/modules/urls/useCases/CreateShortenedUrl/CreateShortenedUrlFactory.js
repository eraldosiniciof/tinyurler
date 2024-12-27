import { GenerateShortedUrlProvider } from '@providers/GenerateShortedUrl/GenerateShortedUrlProvider'

import { UrlsRepository } from '@modules/urls/infra/repositories/UrlsRepositorys'

import { CreateShortenedUrlController } from './CreateShortenedUrlController'
import { CreateShortenedUrlService } from './CreateShortenedUrlService'

const createShortenedUrlFactory = () => {
  const urlsRepository = new UrlsRepository()
  const generateShortedUrlProvider = new GenerateShortedUrlProvider()

  const createShortenedUrlService = new CreateShortenedUrlService(
    urlsRepository,
    generateShortedUrlProvider,
    process.env.EXPIRES_MINUTES
  )

  const createShortenedUrlController = new CreateShortenedUrlController(createShortenedUrlService)

  return createShortenedUrlController
}

export { createShortenedUrlFactory }
