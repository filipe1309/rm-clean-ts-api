import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator adapter', () => {
  test('Should return false if valid returns false', async () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
