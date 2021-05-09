import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsControllers from './controllers/ConnectionsControllers';


const routes = express();
const classesController = new ClassesController();
const connectionsControllers = new ConnectionsControllers();


routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes;