import { AppDataSource } from "../config/data-source";
import { UserEntity } from "../entities/UserEntity";

export const UserRepository = AppDataSource.getRepository(UserEntity)    