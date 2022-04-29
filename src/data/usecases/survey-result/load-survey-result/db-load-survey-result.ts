import { LoadSurveyResult, LoadSurveyResultRepository, SurveyResultModel } from './db-load-survey-result-protocols'
export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (private readonly LoadSurveyResultRepository: LoadSurveyResultRepository) {}

  async load (surveyId: string): Promise<SurveyResultModel> {
    await this.LoadSurveyResultRepository.loadBySurveyId(surveyId)
    return null
  }
}
