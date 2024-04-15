import express from 'express'
import helmet from 'helmet'

export default function createApp() {
  const app = express()

  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  app.use('/', (req, res) => {
    res.send('okay')
  })

  return app
}
