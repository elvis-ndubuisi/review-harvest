import express from 'express'
import helmet from 'helmet'
import router from './routers'

export default function createApp() {
  const app = express()

  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  app.use(router)

  return app
}
