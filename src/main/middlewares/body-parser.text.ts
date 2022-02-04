import request from 'supertest'
import app from '../conifg/app'

describe('Body Parser middleware', () => {
  test('', async () => {
    app.post('test_body_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Rodrigo' })
      .expect({ name: 'Rodrigo' })
  })
})
