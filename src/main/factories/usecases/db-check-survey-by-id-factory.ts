import { DbCheckSurveyById } from '@/data/usecases'
import { CheckSurveyById } from '@/domain/usecases'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey-mongo-repository'

export const makeDbCheckSurveyById = (): CheckSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbCheckSurveyById(surveyMongoRepository)
}
