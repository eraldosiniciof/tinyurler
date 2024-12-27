import dayjs from 'dayjs'

import { UrlsRepository } from '@modules/urls/infra/repositories/UrlsRepositorys'

class GetShortenedUrlService {
  constructor(urlsRepository = new UrlsRepository(), expiresMinutes = process.env.EXPIRES_MINUTES) {
    this.urlsRepository = urlsRepository
    this.expiresMinutes = expiresMinutes
  }

  async execute(params) {
    const now = dayjs()

    const short = await this.urlsRepository.findByShort(params.short)

    if (short.length === 0) {
      throw new Error('Short not found')
    }

    const expiresAt = dayjs(short[0].expires_at)
    const diffMinutes = now.diff(expiresAt, 'minute')

    if (diffMinutes > this.expiresMinutes) {
      throw new Error('Short expired')
    }

    return short[0].original
  }
}

export { GetShortenedUrlService }
