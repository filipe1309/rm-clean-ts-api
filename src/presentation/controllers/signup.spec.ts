import { MissingParamError } from '../errors/missing-param-error'
import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name id provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'john.doe@test.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email id provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'John Doe',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password id provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'John Doe',
        email: 'john.doe@test.com',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no password confirmation id provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'John Doe',
        email: 'john.doe@test.com',
        password: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})