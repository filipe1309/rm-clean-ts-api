import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (url: string): Promise<void> {
    const mongoUrl = process.env.MONGO_URL ?? 'mongodb://localhost:27017/test'
    this.client = await MongoClient.connect(mongoUrl)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
