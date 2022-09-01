import typeDefs from '@/main/graphql/type-defs'
import resolvers from '@/main/graphql/resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema'
// import { ApolloServer } from 'apollo-server-express'
import { ApolloServer } from '../../../node_modules/apollo-server-integration-testing/node_modules/apollo-server-express/dist/ApolloServer'
// import { ApolloServer } from '../../../node_modules/apollo-server-integration-testing/node_modules/apollo-server-express/src/ApolloServer'
// import { apolloServer } from '../__mocks__/apolloServer';
// import { apolloServer } from '../../../node_modules/apollo-server-integration-testing/src/__mocks__/apolloServer'

import { authDirective } from '@/main/graphql/directives'

const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective('auth')

let schema = makeExecutableSchema({
  typeDefs: [authDirectiveTypeDefs, typeDefs],
  resolvers
})

schema = authDirectiveTransformer(schema)

export const makeApolloServer = (): ApolloServer => new ApolloServer({
  schema
})
