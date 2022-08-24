import typeDefs from '@/main/graphql/type-defs'
import resolvers from '@/main/graphql/resolvers'
import { Express } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { GraphQLError } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { authDirective } from '@/main/graphql/directives'

const handleErrors = (response: any, errors: readonly GraphQLError[]): void => {
  errors?.forEach(error => {
    response.data = undefined
    if (checkError(error, 'UserInputError')) {
      response.http.status = 400
    } else if (checkError(error, 'AuthenticationError')) {
      response.http.status = 401
    } else if (checkError(error, 'ForbiddenError')) {
      response.http.status = 403
    } else {
      response.http.status = 500
    }
  })
}

const checkError = (error: GraphQLError, errorName: string): boolean => {
  return [error.name, error.originalError?.name].some(name => name === errorName)
}

export default async (app: Express): Promise<void> => {
  const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective('auth')

  let schema = makeExecutableSchema({
    typeDefs: [authDirectiveTypeDefs, typeDefs],
    resolvers
  })

  schema = authDirectiveTransformer(schema)

  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
    plugins: [{
      requestDidStart: async (): Promise<any> => ({
        willSendResponse: ({ response, errors }) => handleErrors(response, errors)
      })
    }]
  })
  await server.start()
  server.applyMiddleware({ app })
}
