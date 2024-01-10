"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("../modules/user/user.router");
const category_router_1 = require("../modules/category/category.router");
const book_router_1 = require("../modules/book/book.router");
const auth_router_1 = require("../modules/auth/auth.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_router_1.UserRouter,
    },
    {
        path: '/auth',
        route: auth_router_1.authRouter.router,
    },
    {
        path: '/categories',
        route: category_router_1.CategoryRouter,
    },
    {
        path: '/books',
        route: book_router_1.BookRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
