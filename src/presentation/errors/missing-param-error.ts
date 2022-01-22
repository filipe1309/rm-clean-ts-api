export class MissingParamError extends Error {
  constructor (public readonly field: string) {
    super(`Missing param: ${field}`)
    this.name = 'MissingParamError'
  }
}
