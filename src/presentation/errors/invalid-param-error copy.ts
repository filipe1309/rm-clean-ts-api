export class InvalidParamError extends Error {
  constructor (public readonly field: string) {
    super(`Invalid param: ${field}`)
    this.name = 'InvalidParamError'
  }
}
