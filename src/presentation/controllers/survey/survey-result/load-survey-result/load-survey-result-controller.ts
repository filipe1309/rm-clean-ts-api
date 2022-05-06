import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from '@/presentation/helpers/http/http-helpers'
import { Controller, HttpRequest, HttpResponse, LoadSurveyById, LoadSurveyResult } from './load-survey-result-controller-protocols'

export class LoadSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyByIdStub: LoadSurveyById,
    private readonly lloadSurveyResultStub: LoadSurveyResult
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const survey = await this.loadSurveyByIdStub.loadById(surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      await this.lloadSurveyResultStub.load(surveyId)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
