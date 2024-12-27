import { errorsMessages } from './messages'

const { SHORT_EXPIRED, SHORT_NOT_FOUND } = errorsMessages

export const handlerErrors = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.error(error)

    if ([SHORT_EXPIRED, SHORT_NOT_FOUND].includes(error.message)) {
      ctx.status = 404
      ctx.body = { message: error.message }

      return
    }

    ctx.status = error.status || 500
    ctx.body = {
      message: error.message || 'Internal Server Error'
    }
  }
}
