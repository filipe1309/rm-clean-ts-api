import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helpers'
import { LoginController } from './login'

interface SutTypes {
  sut: LoginController
}

const makeSut = (): SutTypes => {
  const sut = new LoginController()
  return {
    sut
  }
}

describe('Login Controller', () => {
  test('Should return 400 if email is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpReponse = await sut.handle(httpRequest)
    expect(httpReponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if password is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpReponse = await sut.handle(httpRequest)
    expect(httpReponse).toEqual(badRequest(new MissingParamError('password')))
  })
})