import dayjs from 'dayjs'

import { GenerateShortedUrlProvider } from '@providers/GenerateShortedUrl/GenerateShortedUrlProvider'

import { UrlsRepository } from '@modules/urls/infra/repositories/UrlsRepositorys'

class CreateShortenedUrlService {
  constructor(
    urlsRepository = new UrlsRepository(),
    generateShortedUrlProvider = new GenerateShortedUrlProvider()
  ) {
    this.urlsRepository = urlsRepository
    this.generateShortedUrlProvider = generateShortedUrlProvider
    this.expiresMinutes = process.env.EXPIRES_MINUTES
  }

  async execute(params) {
    const now = dayjs()

    function ensureHttp(url) {
      if (!url.startsWith('http') && !url.startsWith('https')) {
        url = 'http://' + url
      }
      return url
    }

    const shortedUrl = await this.generateShortedUrlProvider.execute(params)
    const expiresAt = dayjs(now).add(this.expiresMinutes, 'minutes').format()

    const created = await this.urlsRepository.create({
      original: ensureHttp(params.original),
      short: shortedUrl,
      created_at: now.format(),
      expires_at: expiresAt
    })

    return created
  }
}

export { CreateShortenedUrlService }
