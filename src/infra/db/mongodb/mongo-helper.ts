import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map: (data: any, id?: string): any => {
    if (!id) {
      id = data._id.toString()
    }
    delete data._id
    return { id, ...data }
  },

  mapCollection: (collection: any[], id?: string): any[] => {
    return collection.map(c => MongoHelper.map(c))
  }
}
