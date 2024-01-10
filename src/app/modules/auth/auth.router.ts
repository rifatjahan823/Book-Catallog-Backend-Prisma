import express from 'express'
import { authController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { UsersValidation } from '../user/user.validation';


const router=express.Router();

router.post('/signup',validateRequest(UsersValidation.create),authController.createUser);

export const authRouter = {
  router,
}
