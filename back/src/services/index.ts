import express from 'express';
import router from '../routes/route';

const server = express();
server.use(express.json())
server.use(router);
export default server;

