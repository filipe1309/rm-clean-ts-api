import { makeAuthMiddleware } from '@/main/factories'
import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'
import { ForbiddenError } from 'apollo-server-express'
import { defaultFieldResolver, GraphQLSchema } from 'graphql'

export function authDirective (directiveName: string): any {
  return {
    authDirectiveTypeDefs: `directive @${directiveName} on FIELD_DEFINITION`,
    authDirectiveTransformer: (schema: GraphQLSchema) =>
      mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: fieldConfig => {
          const authDirective = getDirective(schema, fieldConfig, directiveName)?.[0]
          if (authDirective) {
            // Get this field's original resolver
            const { resolve = defaultFieldResolver } = fieldConfig

            // Replace the original resolver with a function that *first* calls
            // the original resolver, then converts its result to upper case
            fieldConfig.resolve = async function (source, args, context, info) {
              const request = {
                accessToken: context?.req?.headers?.['x-access-token']
              }
              const httpResponse = await makeAuthMiddleware().handle(request)
              if (httpResponse.statusCode === 200) {
                Object.assign(context?.req, httpResponse.body)
                const result = await resolve(source, args, context, info)
                return result
              } else {
                throw new ForbiddenError(httpResponse.body.message)
              }
            }
            return fieldConfig
          }
        }
      })
  }
}
