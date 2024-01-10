import { User } from "@prisma/client"
import prisma from "../../../shared/prisma"

// **********Create-user************
const createUser=async (data:User):Promise<User> => {
  const result=await prisma.user.create({
      data
  });
  return result
}

export const authService = {
  createUser
}
