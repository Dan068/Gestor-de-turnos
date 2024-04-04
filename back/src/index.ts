import server from './services';
import {PORT} from './config/envs';

console.log(`Server listen on PORT ${PORT}`);
server.listen(process.env.PORT, ()=>{
    
})