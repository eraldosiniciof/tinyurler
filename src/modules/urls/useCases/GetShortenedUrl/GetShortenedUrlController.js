import { GetShortenedUrlService } from './GetShortenedUrlService'

class GetShortenedUrlController {
  constructor(getShortenedUrlService = new GetShortenedUrlService()) {
    this.getShortenedUrlService = getShortenedUrlService
    this.handle = this.handle.bind(this)
  }

  async handle(ctx) {
    try {
      const params = ctx.params

      const result = await this.getShortenedUrlService.execute(params)

      ctx.redirect(result)
    } catch (error) {
      throw error
    }
  }
}

export { GetShortenedUrlController }
