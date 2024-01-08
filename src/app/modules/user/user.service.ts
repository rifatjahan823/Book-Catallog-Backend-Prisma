import { User } from "@prisma/client"
import prisma from "../../../shared/prisma"

// **********Create-user************
const createUser=async (data:User):Promise<User> => {
    const result=await prisma.user.create({
        data
    });
    return result
}

// **********get-all-user************
const getAllUser = async (): Promise<User[]> => {
    const result = await prisma.user.findMany();
    return result;
};
// **********get-single-user************
const getSingleUser = async (id:string): Promise<User|null> => {
    const result = await prisma.user.findUnique({
        where:{
            id
        }
    });
    return result;
};
// **********update-user************
const updateUser = async (id:string,payload:Partial<User>): Promise<User> => {
    const result = await prisma.user.update({
        where:{
            id
        },
        data:payload
    });
    return result;
};
// **********delete-user************
const deleteUser = async (id:string):Promise<User> => {
    const result = await prisma.user.delete({
        where:{
            id
        }
    });
    return result;
};

export const UserService={
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser 
}