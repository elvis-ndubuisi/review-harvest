import reviewHandler from '../handlers/review.handler'
import {Router} from 'express'

const reviewRouter = Router()
reviewRouter.get('/', reviewHandler.getReviews)
export default reviewRouter
