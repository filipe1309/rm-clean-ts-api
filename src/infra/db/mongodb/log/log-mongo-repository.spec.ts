import { LogMongoRepository } from './log-mongo-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { Collection } from 'mongodb'

const makeSut = (): LogMongoRepository => {
  return new LogMongoRepository()
}

describe('Log Mongo Repossitory', () => {
  let errorCollection: Collection

  beforeAll(async () => {
    const mongoUrl = process.env.MONGO_URL ?? 'mongodb://localhost:27017/test'
    await MongoHelper.connect(mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  test('Should create an error log on success', async () => {
    const sut = makeSut()
    await sut.logError('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})
