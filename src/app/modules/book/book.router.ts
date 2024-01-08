import express from 'express'
import { BookController } from './book.controller';
import { BookService } from './book.Service';



const router=express.Router();

router.post('/create-book',BookController.createBook);
router.patch('/:id',BookController.updateBook);
router.delete('/:id',BookService.deleteBook);
router.get('/',BookController.getAllBook);
router.get('/:categoryId/category',BookController.getBooksByCategoryId);
router.get('/:id',BookController.getSingleBook);


export const BookRouter=router