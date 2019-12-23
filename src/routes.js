import { Router } from 'express';
import UserController from './app/controllers/v1/UserController';
import CardController from './app/controllers/v1/CardController';
import CardActiveController from './app/controllers/v1/CardActiveController';
import BannerController from './app/controllers/v1/BannerController';
import SessionController from './app/controllers/v1/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/v1/users', UserController.index);
routes.post('/v1/users', UserController.create);
routes.post('/v1/sessions', SessionController.create);

// Cards
routes.get('/v1/cards', CardController.index);
routes.post('/v1/cards', CardController.create);
routes.put('/v1/cards/:id', CardController.update);
routes.get('/v1/cards/:id', CardController.show);
routes.delete('/v1/cards/:id', CardController.destroy);

// Cards Active
routes.get('/v1/cards_actives', CardActiveController.index);
routes.get('/v1/card_active/:id', CardActiveController.show);

// Banners
routes.get('/v1/banners', BannerController.index);
routes.post('/v1/banners', BannerController.create);
routes.put('/v1/banners/:id', BannerController.update);
routes.get('/v1/banners/:id', BannerController.show);
routes.delete('/v1/banners/:id', BannerController.destroy);

// Validate token
routes.use(authMiddleware);

routes.put('/v1/users', UserController.update);

export default routes;
