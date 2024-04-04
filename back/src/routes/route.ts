import {Router} from 'express';
import {createdUsersController, getUsersController, deleteUsersController} from '../controllers/userControler'
import auth from '../middlewares/autenticacion';



const router: Router = Router();
router.post('/users', createdUsersController)
router.get('/users', auth, getUsersController);
router.delete('/users', deleteUsersController)

export default router;