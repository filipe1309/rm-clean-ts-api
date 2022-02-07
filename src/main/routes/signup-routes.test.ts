import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'John Doe',
        email: 'john.doe@mail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
      .expect('Content-Type', /json/)
      // .expect(res => {
      //   expect(res.body).toEqual({
      //     ok: 'ok'
      //   })
      // })
  })
})
