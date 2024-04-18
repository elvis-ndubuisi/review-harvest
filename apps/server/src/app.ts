import express from 'express'
import helmet from 'helmet'
import authRouter from './routers/auth.route'
import reviewRouter from './routers/review.route'

export default function createApp() {
  const app = express()

  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  app.use('/api/auth', authRouter)
  app.use('/api/review', reviewRouter)

  return app
}
