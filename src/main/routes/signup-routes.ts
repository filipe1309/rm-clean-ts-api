import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeSIgnupController } from '../factories/signup'

export default (router: Router): void => {
  router.post('/signup', (adaptRoute(makeSIgnupController()) as any))
}
