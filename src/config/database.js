import mongoose from 'mongoose';
import config from './config';

const server = config.mongo_uri;
const options = config.options_mongodb;

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(server, options)
      .then(() => {
        console.log('Database connection ok');
      })
      .catch(err => {
        console.error('Database connection error');
      });
  }
}

export default new Database();
