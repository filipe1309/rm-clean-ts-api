import { Controller } from '@/presentation/protocols'
import { Request, RequestHandler, Response } from 'express'

export const adaptRoute = (controller: Controller): RequestHandler => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      accountId: req.accountId
    }
    const httpReponse = await controller.handle(request)
    if (httpReponse.statusCode >= 200 && httpReponse.statusCode <= 299) {
      res.status(httpReponse.statusCode).json(httpReponse.body)
    } else {
      res.status(httpReponse.statusCode).json({
        error: httpReponse.body.message
      })
    }
  }
}
