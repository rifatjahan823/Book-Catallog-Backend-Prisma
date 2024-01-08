import express from 'express'
import { CategoryController } from './category.controller';


const router=express.Router();

router.post('/create-category',CategoryController.createCategory);
router.patch('/:id',CategoryController.updateCategory);
router.delete('/:id',CategoryController.deleteCategory);
router.get('/',CategoryController.getAllCategory);
router.get('/:id',CategoryController.getSingleCategory);


export const CategoryRouter=router