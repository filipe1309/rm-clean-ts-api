import { Authentication, AuthenticationModel } from '../../../domain/usecases/authetication'
import { LoadAccountByEmailRepository } from '../../protocols/db/load-account-by-email-repository'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository) {
  }

  async auth (authentication: AuthenticationModel): Promise<string> {
    const accountModel = await this.loadAccountByEmailRepository.load(authentication.email)
    return await new Promise(resolve => resolve(accountModel.id))
  }
}
