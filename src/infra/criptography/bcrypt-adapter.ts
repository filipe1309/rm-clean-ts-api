import { Hasher } from '../../data/protocols/criptography/hasher'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher {
  constructor (private readonly salt: number = 12) { }

  async hash (value: string): Promise<string> {
    return await bcrypt.hash(value, this.salt)
  }
}
