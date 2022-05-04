import { SurveyResultMongoRepository } from './survey-result-mongo-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { Collection, ObjectId } from 'mongodb'

let surveyCollection: Collection
let surveyResultCollection: Collection
let accountCollection: Collection

const makeSurvey = async (): Promise<string> => {
  const res = await surveyCollection.insertOne({
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }, {
      answer: 'any_other_answer'
    }, {
      answer: 'any_other_answer_again'
    }],
    date: new Date()
  })

  return res.insertedId.toString()
}

const makeAccount = async (): Promise<string> => {
  const res = await accountCollection.insertOne({
    name: 'any_name',
    email: 'any_email@mail.com',
    password: 'any_password'
  })

  return res.insertedId.toString()
}

const makeSut = (): SurveyResultMongoRepository => {
  return new SurveyResultMongoRepository()
}

describe('Survey Result Mongo Repository', () => {
  beforeAll(async () => {
    const mongoUrl = process.env.MONGO_URL ?? 'mongodb://localhost:27017/test'
    await MongoHelper.connect(mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
    surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    await surveyResultCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('save()', () => {
    test('Should add a survey result if its new', async () => {
      const surveyId = await makeSurvey()
      const accountId = await makeAccount()
      const sut = makeSut()
      await sut.save({
        surveyId: surveyId,
        accountId: accountId,
        answer: 'any_answer',
        date: new Date()
      })
      const surveyResult = await surveyResultCollection.findOne({
        surveyId: new ObjectId(surveyId),
        accountId: new ObjectId(accountId)
      })
      expect(surveyResult).toBeTruthy()
    })

    test('Should update a survey result if its not new', async () => {
      const surveyId = await makeSurvey()
      const accountId = await makeAccount()
      await surveyResultCollection.insertOne({
        surveyId: new ObjectId(surveyId),
        accountId: new ObjectId(accountId),
        answer: 'any_answer',
        date: new Date()
      })
      const sut = makeSut()
      await sut.save({
        surveyId: surveyId,
        accountId: accountId,
        answer: 'any_other_answer',
        date: new Date()
      })
      const surveyResult = await surveyResultCollection.find({
        surveyId: new ObjectId(surveyId),
        accountId: new ObjectId(accountId)
      }).toArray()
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.length).toBe(1)
    })
  })

  describe('loadBySurveyResultId()', () => {
    test('Should load a survey result', async () => {
      const surveyId = await makeSurvey()
      const accountId = await makeAccount()
      await surveyResultCollection.insertMany([{
        surveyId: new ObjectId(surveyId),
        accountId: new ObjectId(accountId),
        answer: 'any_answer',
        date: new Date()
      }, {
        surveyId: new ObjectId(surveyId),
        accountId: new ObjectId(accountId),
        answer: 'any_answer',
        date: new Date()
      }, {
        surveyId: new ObjectId(surveyId),
        accountId: new ObjectId(accountId),
        answer: 'any_other_answer',
        date: new Date()
      }, {
        surveyId: new ObjectId(surveyId),
        accountId: new ObjectId(accountId),
        answer: 'any_other_answer',
        date: new Date()
      }])
      const sut = makeSut()
      const surveyResult = await sut.loadBySurveyId(surveyId)
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.surveyId).toEqual(surveyId)
      expect(surveyResult.answers[0].answer).toBe('any_other_answer')
      expect(surveyResult.answers[0].count).toBe(2)
      expect(surveyResult.answers[0].percent).toBe(50)
      expect(surveyResult.answers[1].count).toBe(2)
      expect(surveyResult.answers[1].percent).toBe(50)
      expect(surveyResult.answers[2].count).toBe(0)
      expect(surveyResult.answers[2].percent).toBe(0)
    })
  })
})
