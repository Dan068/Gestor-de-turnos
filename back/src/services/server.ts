import express from 'express';
import router from '../routes/IndexRoutes';

const server = express();
server.use(express.json())
server.use(router);
export default server;
