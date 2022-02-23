import { Authentication, AuthenticationModel } from '../../../domain/usecases/authetication'
import { LoadAccountByEmailRepository } from '../../protocols/db/load-account-by-email-repository'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository) {
  }

  async auth (authentication: AuthenticationModel): Promise<string|null> {
    await this.loadAccountByEmailRepository.load(authentication.email)
    return null
  }
}
