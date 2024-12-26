import dayjs from 'dayjs'

import { UrlsRepository } from '../../infra/repositories/UrlsRepositorys'
import { GenerateShortedUrlProvider } from '../../../../providers/GenerateShortedUrl/GenerateShortedUrlProvider'

class CreateShortenedUrlService {
  constructor(urlsRepository = new UrlsRepository(), generateShortedUrlProvider = new GenerateShortedUrlProvider()) {
    this.urlsRepository = urlsRepository
    this.generateShortedUrlProvider = generateShortedUrlProvider
    this.expiresMinutes = process.env.EXPIRES_MINUTES
  }

  async execute(params) {
    const now = dayjs()

    const shortedUrl = await this.generateShortedUrlProvider.execute(params)
    const expiresAt = dayjs(now).add(this.expiresMinutes, 'minutes').format()

    const created = await this.urlsRepository.create({
      original: params.original,
      short: shortedUrl,
      created_at: now.format(),
      expires_at: expiresAt
    })

    return created
  }
}

export { CreateShortenedUrlService }
