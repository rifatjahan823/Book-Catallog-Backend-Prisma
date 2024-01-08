import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import { UserService } from "./user.service"
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

// **********Create-user************
const createUser=catchAsync(async(req: Request, res: Response)=>{
    const result=await UserService.createUser(req.body);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"User Created Success fully",
        data:result
    })
})

// **********get-all-user************
const getAllUser=catchAsync(async(req: Request, res: Response)=>{
    const result=await UserService.getAllUser();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Get All User Success fully",
        data:result
    })
})
// **********get-single-user************
const getSingleUser=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const result=await UserService.getSingleUser(id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Get Single User Success fully",
        data:result
    })
})

export const UserController={
    createUser,
    getAllUser,
    getSingleUser
}