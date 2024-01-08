import express from 'express'
import { CategoryController } from './category.controller';


const router=express.Router();

router.post('/',CategoryController.createCategory);
router.patch('/:id',CategoryController.updateCategory);
router.delete('/:id',CategoryController.deleteCategory);
router.get('/',CategoryController.getAllCategory);
router.get('/:id',CategoryController.getAllCategory);


export const UserRouter=router