export class InvalidParamError extends Error {
  constructor (field: string) {
    super(`Invalid param: ${field}`)
    this.name = 'InvalidParamError'
  }
}
