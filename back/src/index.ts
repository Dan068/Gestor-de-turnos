import server from "./services/server";
import "reflect-metadata"
import { AppDataSource } from './config/data-source';
import { PORT } from './config/envs';
// AppDataSource.initialize()
// .then(res => {console.log('Conexión a la base de datos realizada con éxito');
//     server.listen(PORT, ()=>{
//         console.log(`server listening on port ${PORT}`);
//     })
//  })
    

const initializeApp = async ()=>{
    await AppDataSource.initialize()
    console.log('Conexión a la base de datos realizada con éxito')
    //await preloadData()
    server.listen( PORT, ()=>{
        console.log(`server listening on port ${PORT}`);
    
    })
}; 
initializeApp()