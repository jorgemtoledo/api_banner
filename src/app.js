import express from 'express';
import cors from 'cors';
import routes from './routes';
import database from './config/database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  database() {
    database;
  }
}

export default new App().server;
