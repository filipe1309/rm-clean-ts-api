export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://root:12345@localhost:27017/clean-node-api?authSource=admin',
  port: process.env.PORT ?? 5050
}
