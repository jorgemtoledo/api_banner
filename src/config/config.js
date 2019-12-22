require('dotenv/config');

module.exports = {
  mongo_uri: process.env.MONGO_URL,
  options_mongodb: { useUnifiedTopology: true, useNewUrlParser: true },
  port: process.env.PORT,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  secret: process.env.SECRET,
  expiresin: process.env.EXPIRESIN,
};
