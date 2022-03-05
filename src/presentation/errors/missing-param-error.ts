export class MissingParamError extends Error {
  constructor (field: string) {
    super(`Missing param: ${field}`)
    this.name = 'MissingParamError'
  }
}
