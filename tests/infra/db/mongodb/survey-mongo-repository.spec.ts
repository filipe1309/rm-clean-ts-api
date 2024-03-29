import { SurveyMongoRepository, MongoHelper } from '@/infra/db/mongodb'
import { Collection, ObjectId } from 'mongodb'
import { mockAddAccountParams, mockAddSurveyParams } from '@/tests/domain/mocks'
// import FakeObjectId from 'bson-objectid'

let surveyCollection: Collection
let surveyResultCollection: Collection
let accountCollection: Collection

const mockAccountId = async (): Promise<string> => {
  const res = await accountCollection.insertOne(mockAddAccountParams())
  const fakeAccount = await accountCollection.findOne({ _id: new ObjectId(res.insertedId.toString()) })
  return fakeAccount._id.toString()
}

const makeSut = (): SurveyMongoRepository => {
  return new SurveyMongoRepository()
}

describe('SurveyMongoRepository', () => {
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

  describe('add()', () => {
    test('Should add a survey on success', async () => {
      const sut = makeSut()
      await sut.add(mockAddSurveyParams())
      const count = await surveyCollection.countDocuments()
      expect(count).toBe(1)
    })
  })

  describe('loadAll()', () => {
    test('Should load all surveys on success', async () => {
      const accountId = await mockAccountId()
      const addSurveyModels = [mockAddSurveyParams(), mockAddSurveyParams()]
      const result = await surveyCollection.insertMany(addSurveyModels)
      const survey = await surveyCollection.findOne({ _id: result.insertedIds[0] })
      await surveyResultCollection.insertOne({
        accountId: new ObjectId(accountId),
        surveyId: new ObjectId(result.insertedIds[0]),
        answer: survey.answers[0].answer,
        date: new Date()
      })
      const sut = makeSut()
      const surveys = await sut.loadAll(accountId)
      console.log(surveys)
      expect(surveys.length).toBe(2)
      expect(surveys[0].id).toBeTruthy()
      expect(surveys[0].question).toBe(addSurveyModels[0].question)
      expect(surveys[0].didAnswer).toBe(true)
      expect(surveys[1].question).toBe(addSurveyModels[1].question)
      expect(surveys[1].didAnswer).toBe(false)
    })

    test('Should load empty list', async () => {
      const accountId = await mockAccountId()
      const sut = makeSut()
      const surveys = await sut.loadAll(accountId)
      expect(surveys.length).toBe(0)
    })
  })

  describe('loadById()', () => {
    test('Should load survey by id on success', async () => {
      const res = await surveyCollection.insertOne(mockAddSurveyParams())
      const sut = makeSut()
      const survey = await sut.loadById(res.insertedId.toString())
      expect(survey).toBeTruthy()
      expect(survey.id).toBeTruthy()
    })

    test('Should return null if survey doesnt exists', async () => {
      const sut = makeSut()
      const survey = await sut.loadById(mongoObjectId())
      expect(survey).toBeFalsy()
    })
  })

  describe('loadAnswers()', () => {
    test('Should load answers on success', async () => {
      const result = await surveyCollection.insertOne(mockAddSurveyParams())
      const survey = await surveyCollection.findOne({ _id: result.insertedId })
      const sut = makeSut()
      const answers = await sut.loadAnswers(result.insertedId.toString())
      expect(answers).toEqual([survey.answers[0].answer, survey.answers[1].answer])
    })

    test('Should return empty array if survey doesnt exists', async () => {
      const sut = makeSut()
      const answers = await sut.loadAnswers(mongoObjectId())
      expect(answers).toEqual([])
    })
  })

  describe('checkById()', () => {
    test('Should return true if survey exists', async () => {
      const res = await surveyCollection.insertOne(mockAddSurveyParams())
      const sut = makeSut()
      const exists = await sut.checkById(res.insertedId.toString())
      expect(exists).toBe(true)
    })

    test('Should return false if survey doesnt exists', async () => {
      const sut = makeSut()
      const exists = await sut.checkById(mongoObjectId())
      // const exists = await sut.checkById(FakeObjectId.generate())
      expect(exists).toBe(false)
    })
  })
})

const mongoObjectId = function (): string {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16)
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16)
  }).toLowerCase()
}
