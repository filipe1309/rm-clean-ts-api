import { MongoHelper } from '@/infra/db/mongodb/mongo-helper'
import { makeApolloServer } from './helpers'
import { hash } from 'bcrypt'
import { Collection } from 'mongodb'
import { createTestClient } from 'apollo-server-integration-testing'
import { gql } from 'apollo-server-express'
// import { ApolloServer } from '../../../node_modules/apollo-server-integration-testing/node_modules/apollo-server-express/src/ApolloServer'
import { ApolloServer } from '../../../node_modules/apollo-server-integration-testing/node_modules/apollo-server-express/dist/ApolloServer'
// import { apolloServer } from '../../../node_modules/apollo-server-integration-testing/src/__mocks__/apolloServer'

let accountCollection: Collection
let apolloServer: ApolloServer

describe('Login GraphQL', () => {
  beforeAll(async () => {
    apolloServer = makeApolloServer()
    await apolloServer.start()
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
  describe('Login Query', () => {
    const loginQuery = gql`
      query login ($email: String!, $password: String!) {
        login (email: $email, password: $password) {
          accessToken
          name
        }
      }
    `

    test('Should return an Account on valid credentials', async () => {
      const password = await hash('123456', 12)
      await accountCollection.insertOne({
        name: 'John Doe',
        email: 'john.doe@mail.com',
        password
      })
      // https://github.com/zapier/apollo-server-integration-testing/pull/20
      const { query } = createTestClient({ apolloServer })
      const res: any = await query(loginQuery, {
        variables: {
          email: 'john.doe@mail.com',
          password: '123456'
        }
      })

      expect(res.data.login.accessToken).toBeTruthy()
      expect(res.data.login.name).toBe('John Doe')
    })

    test('Should return UnauthorizedError on invalid credentials', async () => {
      const { query } = createTestClient({ apolloServer })
      const res: any = await query(loginQuery, {
        variables: {
          email: 'john.doe@mail.com',
          password: '123456'
        }
      })

      expect(res.data).toBeFalsy()
      expect(res.errors[0].message).toBe('Unauthorized')
    })
  })

  describe('SignUp Query', () => {
    const signUpMutation = gql`
      mutation signUp ($name: String!, $email: String!, $password: String!, $passwordConfirmation: String!) {
        signUp (name: $name, email: $email, password: $password, passwordConfirmation: $passwordConfirmation) {
          accessToken
          name
        }
      }
    `

    test('Should return an Account on valid data', async () => {
      const { mutate } = createTestClient({ apolloServer })
      const res: any = await mutate(signUpMutation, {
        variables: {
          name: 'John',
          email: 'john.doe@mail.com',
          password: '123456',
          passwordConfirmation: '123456'
        }
      })

      expect(res.data.signUp.accessToken).toBeTruthy()
      expect(res.data.signUp.name).toBe('John')
    })

    test('Should return EmailInUseError on invalid data', async () => {
      const password = await hash('123456', 12)
      await accountCollection.insertOne({
        name: 'John Doe',
        email: 'john.doe@mail.com',
        password
      })
      const { mutate } = createTestClient({ apolloServer })
      const res: any = await mutate(signUpMutation, {
        variables: {
          name: 'John Doe',
          email: 'john.doe@mail.com',
          password: '123456',
          passwordConfirmation: '123456'
        }
      })

      expect(res.data).toBeFalsy()
      expect(res.errors[0].message).toBe('The received email is already in use')
    })
  })
})
