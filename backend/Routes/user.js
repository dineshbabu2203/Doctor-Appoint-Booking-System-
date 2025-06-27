import { updateUser ,deleteUser, getAllUser,getSingleUser , getMyAppoints , getUserProfile} from '../Controllers/userController.js'
import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'

const routeruser = express.Router()

routeruser.get('/profile/me',authenticate,restrict(['patient']),getUserProfile)
routeruser.get('/appointments/my-appointments',authenticate,restrict(['patient']),getMyAppoints)


routeruser.get('/',authenticate,restrict(['admin']),getAllUser)
routeruser.get('/:id',authenticate,restrict(['patient']),getSingleUser)
routeruser.put('/:id',authenticate,restrict(['patient']),updateUser)
routeruser.delete('/:id',authenticate,restrict(['patient']),deleteUser)

export default routeruser;