import server from './services/server'
import "reflect-metadata"
import {PORT} from './config/envs'
import { AppDataSource } from './config/data-source'
const initializeApp = async ()=>{
    await AppDataSource.initialize()
    console.log('Conexión a la base de datos realizada con éxito')
    //await preloadData()
    server.listen( PORT, ()=>{
        console.log(`server listening on port ${PORT}`);
    
    })
}; 
initializeApp()