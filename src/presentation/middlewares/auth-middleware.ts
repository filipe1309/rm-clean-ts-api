import { AccessDeniedUseError } from '../errors'
import { forbidden } from '../helpers/http/http-helpers'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedUseError())
    return await new Promise(resolve => resolve(error))
  }
}
