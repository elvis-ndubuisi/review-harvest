import type {Request, Response, NextFunction} from 'express'
import {requestReviewDto, RequestReview} from '../dtos/review.dto'

/** Sends a request for a platform review */
function requestReview(req: Request, res: Response) {
  const body = req.body as RequestReview
  try {
    return res.send('okay')
  } catch (error) {
    return res.sendStatus(500)
  }
}

function getReviews(req: Request, res: Response) {
  return res.send('hello')
}

function getReview() {}

function submitReview() {}

function acknowledgeReview() {}

const reviewHandler = {getReviews, requestReview}

export default reviewHandler
