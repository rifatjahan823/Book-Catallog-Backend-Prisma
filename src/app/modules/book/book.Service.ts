import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";



// **********Create-Book************
const createBook=async (data:Book):Promise<Book> => {
    const result=await prisma.book.create({
        data
    });
    return result
}

// **********get-all-Book************
const getAllBook = async (): Promise<Book[]> => {
    const result = await prisma.book.findMany();
    return result;
};
// **********get-single-Book************
const getSingleBook = async (id:string): Promise<Book|null> => {
    const result = await prisma.book.findUnique({
        where:{
            id
        }
    });
    return result;
};
// **********update-Book************
const updateBook = async (id:string,payload:Partial<Book>): Promise<Book> => {
    const result = await prisma.book.update({
        where:{
            id
        },
        data:payload
    });
    return result;
};
// **********delete-Category************
const deleteBook = async (id:string):Promise<Book> => {
    const result = await prisma.book.delete({
        where:{
            id
        }
    });
    return result;
};

export const CategoryService={
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook
}