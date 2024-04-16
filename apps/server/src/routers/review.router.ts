import {Router} from 'express'
import reviewHandler from '../handlers/review.handlers'

const reviewRouter = Router()
reviewRouter.get('/', reviewHandler.getReviews)

export default reviewRouter
