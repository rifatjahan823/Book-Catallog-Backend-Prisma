"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const book_Service_1 = require("./book.Service");
const router = express_1.default.Router();
router.post('/create-book', book_controller_1.BookController.createBook);
router.patch('/:id', book_controller_1.BookController.updateBook);
router.delete('/:id', book_Service_1.BookService.deleteBook);
router.get('/', book_controller_1.BookController.getAllBook);
router.get('/:categoryId/category', book_controller_1.BookController.getBooksByCategoryId);
router.get('/:id', book_controller_1.BookController.getSingleBook);
exports.BookRouter = router;
