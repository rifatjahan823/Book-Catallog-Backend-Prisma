import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import { UserService } from "./user.service"
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";



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
// **********update-user************
const updateUser=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const payload=req.body
    const result=await UserService.updateUser(id,payload);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Updated User Success fully",
        data:result
    })
})
// **********delete-user************
const deleteUser=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const result=await UserService.deleteUser(id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Deleted User Success fully",
        data:result
    })
})

export const UserController={
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}