import type {Request, Response, NextFunction} from 'express'
import * as yup from 'yup'
// Validate incoming requests against yup DTOs
export default function validator(dto: yup.AnyObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await dto.validate({body: req.body, query: req.query, params: req.params})
      next()
    } catch (error: any) {
      return res.status(400).json({
        status: 'error',
        name: error?.name,
        message: error?.message || 'Invalid payload',
      })
    }
  }
}
