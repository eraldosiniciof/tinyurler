import { GenerateShortedUrlProvider } from './GenerateShortedUrlProvider'

describe('GenerateShortedUrlProvider', () => {
  let generateShortedUrlProvider

  beforeEach(() => {
    generateShortedUrlProvider = new GenerateShortedUrlProvider()
  })

  it('should generate a short URL with 5 or more characters', async () => {
    const result = await generateShortedUrlProvider.execute()

    expect(typeof result).toBe('string')
    expect(result.length).toBeGreaterThanOrEqual(5)
  })

  it('should generate a string containing only alphanumeric characters', async () => {
    const result = await generateShortedUrlProvider.execute()

    expect(result).toMatch(/^[a-zA-Z0-9]+$/)
  })

  it('should generate a string with a random number of characters (between 5 and 10)', async () => {
    const result = await generateShortedUrlProvider.execute()

    const randomNumber = Math.floor(Math.random() * 10)
    const expectedLength = randomNumber >= 5 ? randomNumber : 5
    expect(result.length).toBeGreaterThanOrEqual(expectedLength)
  })
})
