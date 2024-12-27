import dayjs from 'dayjs'
import { GetShortenedUrlService } from './GetShortenedUrlService'

describe('GetShortenedUrlService', () => {
  const fakeUrlsRepository = {
    findByShort: jest.fn()
  }

  it('throw error when not hound short', async () => {
    fakeUrlsRepository.findByShort.mockResolvedValue([])
    const getShortenedUrlService = new GetShortenedUrlService(fakeUrlsRepository, 1)

    try {
      await getShortenedUrlService.execute({
        short: 'not-found'
      })
    } catch (error) {
      expect(error.message).toBe('Short not found')
    }
  })

  it('throw error when expired short', async () => {
    fakeUrlsRepository.findByShort.mockResolvedValue([
      { expires_at: '2024-12-26 11:55:39.970 -0300' }
    ])
    const getShortenedUrlService = new GetShortenedUrlService(fakeUrlsRepository, 1)

    try {
      await getShortenedUrlService.execute({
        short: 'expired'
      })
    } catch (error) {
      expect(error.message).toBe('Short expired')
    }
  })

  it('should return original link', async () => {
    const fakeParams = {
      short: 'v4lID'
    }

    const fakeResult = {
      expires_at: dayjs().add(30, 'seconds').format(),
      original: 'http://original.link'
    }

    fakeUrlsRepository.findByShort.mockResolvedValue([fakeResult])
    const getShortenedUrlService = new GetShortenedUrlService(fakeUrlsRepository, 1)

    const result = await getShortenedUrlService.execute(fakeParams)

    expect(fakeUrlsRepository.findByShort).toHaveBeenCalledWith(fakeParams.short)
    expect(result).toBe(fakeResult.original)
  })
})
