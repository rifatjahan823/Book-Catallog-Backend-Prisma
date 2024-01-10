"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// **********Create-Book************
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data,
        include: {
            category: true
        }
    });
    return result;
});
// **********get-all-Book************
const getAllBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany({
        include: {
            category: true
        }
    });
    return result;
});
// **********get-single-Book************
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id
        }
    });
    return result;
});
// **********get-Books By CategoryId************
const getBooksByCategoryId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booksInCategory = yield prisma_1.default.book.findMany({
        where: {
            categoryId: id,
        },
    });
    return booksInCategory;
});
// **********update-Book************
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
// **********delete-Category************
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            id
        }
    });
    return result;
});
exports.BookService = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
    getBooksByCategoryId
};
