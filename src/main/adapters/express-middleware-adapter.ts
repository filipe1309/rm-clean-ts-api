import { HttpRequest, Middleware } from '@/presentation/protocols'
import { NextFunction, Request, RequestHandler, Response } from 'express'

export const adaptMiddleware = (middleware: Middleware): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers
    }
    const httpReponse = await middleware.handle(httpRequest)
    if (httpReponse.statusCode === 200) {
      Object.assign(req, httpReponse.body)
      next()
    } else {
      res.status(httpReponse.statusCode).json({
        error: httpReponse.body.message
      })
    }
  }
}
