class GenerateShortedUrlProvider {
  async execute() {
    const randomNumber = (n) => Math.floor(Math.random() * n)
    const upperOrLower = (letter) => [letter.toUpperCase(), letter.toLowerCase()]
    const alphabetic = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i))

    const random = randomNumber(10)
    const totalToGenerate = random >= 5 ? random : 5

    const shorted = []
    for (let i = 0; i < totalToGenerate; i += 1) {
      const numberAndLetter = [
        randomNumber(10),
        upperOrLower(alphabetic[randomNumber(26)])[randomNumber(2)]
      ]
      shorted.push(numberAndLetter[randomNumber(2)])
    }

    return shorted.join('')
  }
}

export { GenerateShortedUrlProvider }
