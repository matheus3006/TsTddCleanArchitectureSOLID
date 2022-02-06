import request from 'supertest'
import app from '../conifg/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getColletion('accounts')
    await accountCollection.deleteMany({})
  })

  test(' Should Return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'matheus',
        email: 'matheus@teste.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
