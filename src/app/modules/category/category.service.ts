import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma"

// **********Create-Category************
const createCategory=async (data:Category):Promise<Category> => {
    const result=await prisma.category.create({
        data
    });
    return result
}

// **********get-all-Category************
const getAllCategory = async (): Promise<Category[]> => {
    const result = await prisma.category.findMany();
    return result;
};
// **********get-single-Category************
const getSingleCategory = async (id:string): Promise<Category|null> => {
    const result = await prisma.category.findUnique({
        where:{
            id
        }
    });
    return result;
};
// **********update-Category************
const updateCategory = async (id:string,payload:Partial<Category>): Promise<Category> => {
    const result = await prisma.category.update({
        where:{
            id
        },
        data:payload
    });
    return result;
};
// **********delete-Category************
const deleteCategory = async (id:string):Promise<Category> => {
    const result = await prisma.category.delete({
        where:{
            id
        }
    });
    return result;
};

export const CategoryService={
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory 
}