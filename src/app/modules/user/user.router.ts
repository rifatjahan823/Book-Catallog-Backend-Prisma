import express from 'express'
import { UserController } from './user.controller';

const router=express.Router();

router.patch('/:id',UserController.updateUser);
router.delete('/:id',UserController.deleteUser);
router.get('/',UserController.getAllUser);
router.get('/:id',UserController.getSingleUser);


export const UserRouter=router