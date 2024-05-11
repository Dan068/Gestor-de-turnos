import { Router } from "express";

const userRouter:Router = Router()
//GET /users => Obtener el listado de todos los usuarios.
userRouter.get('/users', );

//POST /users/register => Registro de un nuevo usuario.
userRouter.post('/users', )

//GET /users/:id => Obtener el detalle de un usuario específico.
userRouter.get('/users', )

//POST /users/login => Login del usuario a la aplicación.
userRouter.post('/users', )

//DELETE /users => Eliminacion de un usuario
userRouter.delete('/users', )

export default userRouter