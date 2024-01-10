import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { authService } from "./auth.service";

// **********Create-user************
const createUser=catchAsync(async(req: Request, res: Response)=>{
  const result=await authService.createUser(req.body);
  sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:"User Created Success fully",
      data:result
  })
})

export const authController = {
  createUser,
}
