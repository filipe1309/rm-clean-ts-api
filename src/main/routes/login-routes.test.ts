import app from '../config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { hash } from 'bcrypt'
import { Collection } from 'mongodb'
import request from 'supertest'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    const mongoUrl = process.env.MONGO_URL ?? 'mongodb://localhost:27017/test'
    await MongoHelper.connect(mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'John Doe',
          email: 'john.doe@mail.com',
          password: '123456',
          passwordConfirmation: '123456'
        })
        .expect(200)
        .expect('Content-Type', /json/)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123456', 12)
      await accountCollection.insertOne({
        name: 'John Doe',
        email: 'john.doe@mail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'john.doe@mail.com',
          password: '123456'
        })
        .expect(200)
        .expect('Content-Type', /json/)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'john.doe@mail.com',
          password: '123456'
        })
        .expect(401)
        .expect('Content-Type', /json/)
    })
  })
})
