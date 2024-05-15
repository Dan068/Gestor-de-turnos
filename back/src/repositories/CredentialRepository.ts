import { AppDataSource } from "../config/data-source";
import { CredentialsIdEntity } from "../entities/CredentialsEntity";

export const CredentialsRepository = AppDataSource.getRepository(CredentialsIdEntity)