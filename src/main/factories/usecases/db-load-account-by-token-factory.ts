import env from '@/main/config/env'
import { LoadAccountByToken } from '@/domain/usecases/load-account-by-token'
import { DbLoadAccountByToken } from '@/data/usecases/db-load-account-by-token'
import { AccountMongoRepository } from '@/infra/db/mongodb/account-mongo-repository'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
