import { CreateShortenedUrlController } from './CreateShortenedUrlController'
import { CreateShortenedUrlService } from './CreateShortenedUrlService'
import { UrlsRepository } from '../../infra/repositories/UrlsRepositorys'
import { GenerateShortedUrlProvider } from '../../../../providers/GenerateShortedUrl/GenerateShortedUrlProvider'

const createShortenedUrlFactory = () => {
  const urlsRepository = new UrlsRepository()
  const generateShortedUrlProvider = new GenerateShortedUrlProvider()

  const createShortenedUrlService = new CreateShortenedUrlService(urlsRepository, generateShortedUrlProvider, process.env.EXPIRES_MINUTES)

  const createShortenedUrlController = new CreateShortenedUrlController(createShortenedUrlService)

  return createShortenedUrlController
}

export { createShortenedUrlFactory }
