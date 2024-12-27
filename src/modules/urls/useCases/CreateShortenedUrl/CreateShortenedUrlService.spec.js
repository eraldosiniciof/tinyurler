import { CreateShortenedUrlService } from './CreateShortenedUrlService'

describe('CreateShortenedUrlService', () => {
  const fakeUrlsRepository = {
    create: jest.fn()
  }

  const fakeGenerateShortedUrlProvider = {
    execute: jest.fn()
  }

  const fakeParams = {
    original: 'http://test.com'
  }

  it('created shorted url', async () => {
    const createShortenedUrlService = new CreateShortenedUrlService(
      fakeUrlsRepository,
      fakeGenerateShortedUrlProvider,
      1
    )

    fakeGenerateShortedUrlProvider.execute.mockResolvedValue('tEst01')

    await createShortenedUrlService.execute(fakeParams)

    expect(fakeGenerateShortedUrlProvider.execute).toHaveBeenCalledTimes(1)
    expect(fakeUrlsRepository.create).toHaveBeenCalledWith({
      original: fakeParams.original,
      short: 'tEst01',
      created_at: expect.any(String),
      expires_at: expect.any(String)
    })
  })
})
