import {Router} from 'express'
import reviewRouter from './review.router'
import authRouter from './auth.router'

const router = Router()
router.use('api/auth/', authRouter)
router.use('api/user/', reviewRouter)
router.use('api/review/', reviewRouter)

export default router
