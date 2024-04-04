import { Request, Response } from 'express';
import { createUserService, deleteUserService, getUsersService} from '../services/usersService'
import IUser from '../interfaces/IUser';


export const createdUsersController = async (req:Request, res: Response)=>{
    const {name, email, active} = req.body;
    const newUser : IUser = await createUserService({name,email,active})
    res.status(201).json({message:'Usuario creado correctamente', newUser})
};

export const getUsersController = async ( req:Request, res:Response) =>{
    const users:IUser[] = await getUsersService();
    res.status(200).json(users)
};

export const deleteUsersController = async (req:Request, res:Response )=>{
    const {id} = req.body
    await deleteUserService(id);
    res.status(200).json({message: 'Usuario eliminado correctamente'})
}