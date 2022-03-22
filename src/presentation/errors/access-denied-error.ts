export class AccessDeniedUseError extends Error {
  constructor () {
    super('Access denied')
    this.name = 'AccessDeniedUseError'
  }
}
