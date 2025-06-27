import { updateDoctor ,deleteDoctor, getAllDoctor,getSingleDoctor, getDoctorProfile} from '../Controllers/doctorController.js'
import express from 'express'
import { authenticate , restrict} from '../auth/verifyToken.js'

import reviewRouter from "./review.js";



const routerdoc = express.Router()


routerdoc.get('/',getAllDoctor)
routerdoc.get('/profile/me',authenticate,restrict(["doctor"]),getDoctorProfile)

routerdoc.use('/:doctorId/reviews',reviewRouter)
routerdoc.get('/:id',getSingleDoctor)
routerdoc.put('/:id',authenticate,restrict(['doctor']),updateDoctor)
routerdoc.delete('/:id',authenticate,restrict(['doctor']),deleteDoctor)



export default routerdoc;