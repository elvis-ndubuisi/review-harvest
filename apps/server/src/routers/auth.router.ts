import {Router} from 'express'
import authHandler from '../handlers/auth.handler'

const authRouter = Router()
authRouter.get('/', authHandler.signUpWithCredentials)

export default authRouter
