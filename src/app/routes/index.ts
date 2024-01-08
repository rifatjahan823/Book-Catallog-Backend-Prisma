import express from 'express'
import { UserRouter } from '../modules/user/user.router';
import { CategoryRouter } from '../modules/category/category.router';
import { BookRouter } from '../modules/book/book.router';

const router=express.Router();


const moduleRoutes=[
    {
        path:"/users",
        route:UserRouter
    },
    {
        path:"/categories",
        route:CategoryRouter
    },
    {
        path:"/books",
        route:BookRouter
    }
]

moduleRoutes.forEach(route=>router.use(route.path,route.route));
export default router;