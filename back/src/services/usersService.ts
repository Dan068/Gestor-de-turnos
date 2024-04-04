import IUser from "../interfaces/IUser";
import UserDto from "../dto/userDto";

let users : IUser[] =[]
// este es un array donde vamos a guardar los usuarios pero indicamos que es de tipo interface

let id: number = 1;

export const createUserService = async (userData: UserDto): Promise<IUser>=>{
    const newUser : IUser ={
        id,
        name:userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser);
    id++;
    return newUser
};
//recibe los datos del usuario
//estos datos tiene la forma de la interface
//crea un nuevo usuario
// incluimos el nuevo usuario dentro del arreglo
// retornamos el objeto creado

export const getUsersService = async (): Promise<IUser[]> =>{
    return users;
};
export const deleteUserService = async (id: number): Promise<void>=>{
    users = users.filter((user: IUser)=>{
        return user.id !==id
    });
};