import { loginPath, signUpPath, surveyPath } from './paths'
import { accountSchema, apiKeyAuthSchema, errorSchema, loginParamsSchema, surveySchema, surveyAnswerSchema, surveysSchema, signUpParamsSchema, addSurveyParamsSchema } from './schemas'
import { badRequest, forbidden, notFound, serverError, unauthorized } from './components'

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
  }, {
    name: 'Survey'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    addSurveyParams: addSurveyParamsSchema,
    error: errorSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    surveys: surveysSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    forbidden,
    serverError,
    notFound,
    unauthorized
  }
}
