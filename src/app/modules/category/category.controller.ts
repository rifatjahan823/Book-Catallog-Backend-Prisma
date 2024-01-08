import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CategoryService } from "./category.service";

// **********Create-Category************
const createCategory=catchAsync(async(req: Request, res: Response)=>{
    const result=await CategoryService.createCategory(req.body);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Category Created Success fully",
        data:result
    })
})

// **********get-all-Category************
const getAllCategory=catchAsync(async(req: Request, res: Response)=>{
    const result=await CategoryService.getAllCategory();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Get All Category Success fully",
        data:result
    })
})
// **********get-single-user************
const getSingleCategory=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const result=await CategoryService.getSingleCategory(id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Get Single Category Success fully",
        data:result
    })
})
// **********update-Category************
const updateCategory=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const payload=req.body
    const result=await CategoryService.updateCategory(id,payload);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Updated Category Success fully",
        data:result
    })
})
// **********delete-user************
const deleteCategory=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const result=await CategoryService.deleteCategory(id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Deleted Category Success fully",
        data:result
    })
})

export const CategoryController={
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory
}