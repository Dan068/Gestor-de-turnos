import { DataSource } from "typeorm";
import { DB_PASSWORD } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: DB_PASSWORD,
    database: "users",
    //dropSchema: true, //esta propiedad borra
    // los datos que ya tenga cargada la base de datos. 
    synchronize: true,
    logging: ['error'],
    entities: [],
    subscribers: [],
    migrations: [],
})