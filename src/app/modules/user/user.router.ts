import express from 'express'
import { UserController } from './user.controller';

const router=express.Router();

router.post('/',UserController.createUser);
router.get('/',UserController.getAllUser);


export const UserRouter=router