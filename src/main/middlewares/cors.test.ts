import request from 'supertest'
import app from '../conifg/app'

describe('Cors middleware', () => {
  test(' Should Enable CORS', async () => {
    app.post('/test_cors', (req, res) => {
      res.send()
    })

    await request(app)
      .post('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
