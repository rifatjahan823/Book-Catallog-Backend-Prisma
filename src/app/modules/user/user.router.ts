import express from 'express'
import { UserController } from './user.controller';

const router=express.Router();

router.post('/',UserController.createUser);
router.patch('/:id',UserController.updateUser);
router.get('/',UserController.getAllUser);
router.get('/:id',UserController.getSingleUser);


export const UserRouter=router