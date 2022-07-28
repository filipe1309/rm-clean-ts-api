export interface LoadAccountByToken {
  load: (loadAccountByToken: LoadAccountByToken.Params) => Promise<LoadAccountByToken.Result>
}

export namespace LoadAccountByToken {
  export type Params = {
    accessToken: string
    role?: string
  }
  export type Result = {
    id: string
  }
}
