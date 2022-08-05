import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'
import typeDefs from '@/main/graphql/type-defs'
import resolvers from '@/main/graphql/resolvers'

export default async (app: Express): Promise<void> => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start()
  server.applyMiddleware({ app })
}