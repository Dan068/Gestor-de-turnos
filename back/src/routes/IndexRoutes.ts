import {Router} from 'express';
import userRoute from './UserRoute';
import appointmentRoute from './AppointmentsRoute';



const router: Router = Router();
router.use('/users', userRoute);
router.use('/appointments', appointmentRoute)
export default router;
