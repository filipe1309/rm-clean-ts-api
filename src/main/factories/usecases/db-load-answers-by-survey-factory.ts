import { DbLoadAnswersBySurvey } from '@/data/usecases/db-load-answers-by-survey'
import { LoadAnswersBySurvey } from '@/domain/usecases/load-answers-by-survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey-mongo-repository'

export const makeDbLoadAnswersBySurvey = (): LoadAnswersBySurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadAnswersBySurvey(surveyMongoRepository)
}
