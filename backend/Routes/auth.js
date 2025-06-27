import express from 'express';
import { register,login } from '../controllers/authController.js';


const routerauth = express.Router()

routerauth.post('/register',register)
routerauth.post('/login',login)

export default routerauth
