import type {Request, Response, NextFunction} from 'express'

function requestReview() {}

function getReviews(req: Request, res: Response) {
  return res.send('hello')
}

function getReview() {}

function submitReview() {}

function acknowledgeReview() {}

const reviewHandler = {getReviews}

export default reviewHandler
