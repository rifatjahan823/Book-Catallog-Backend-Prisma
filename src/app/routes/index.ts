import express from 'express'
import { UserRouter } from '../modules/user/user.router';
import { CategoryRouter } from '../modules/category/category.router';

const router=express.Router();


const moduleRoutes=[
    {
        path:"/users",
        route:UserRouter
    },
    {
        path:"/categories",
        route:CategoryRouter
    }
]

moduleRoutes.forEach(route=>router.use(route.path,route.route));
export default router;