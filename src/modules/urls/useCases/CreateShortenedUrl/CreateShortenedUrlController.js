import * as Yup from 'yup'

import { CreateShortenedUrlService } from './CreateShortenedUrlService'

class CreateShortenedUrlController {
  constructor(createShortenedUrlService = new CreateShortenedUrlService()) {
    this.createShortenedUrlService = createShortenedUrlService
    this.handle = this.handle.bind(this)
  }

  async handle(ctx) {
    try {
      const { body } = ctx.request

      const schema = Yup.object().shape({
        original: Yup.string().required()
      })

      const isValid = await schema.isValid(body)

      if (!isValid) {
        const validate = await schema.validate(body)
        ctx.body = validate
      }

      const result = await this.createShortenedUrlService.execute(body)

      ctx.status = 201
      ctx.body = result
    } catch (error) {
      throw error
    }
  }
}

export { CreateShortenedUrlController }
