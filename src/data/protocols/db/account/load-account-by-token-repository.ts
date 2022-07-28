import { AccountModel } from '@/domain/models/account'

export interface LoadAccountByTokenRepository {
  loadByToken: (loadAccountByTokenRepositoryParams: LoadAccountByTokenRepository.Params) => Promise<LoadAccountByTokenRepository.Result|null>
}

export namespace LoadAccountByTokenRepository {
  export type Params = {
    token: string
    role?: string
  }
  export type Result = AccountModel
}
