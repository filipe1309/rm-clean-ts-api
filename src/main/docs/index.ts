import { loginPath } from './paths'
import { accountSchema, errorSchema, loginParamsSchema } from './schemas'
import { badRequest, notFound, serverError, unauthorized } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Survey - Clean Node API',
    description: 'Survey API with Clean Architecture',
    version: '1.0.0'
  },
  license: {
    name: 'GNU General Public License v3.0',
    url: 'https://choosealicense.com/licenses/gpl-3.0/'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    notFound,
    unauthorized
  }
}
