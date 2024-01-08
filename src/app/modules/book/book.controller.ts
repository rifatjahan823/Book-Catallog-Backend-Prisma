import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BookService } from "./book.Service";


// **********Create-Book************
const createBook=catchAsync(async(req: Request, res: Response)=>{
    const result=await BookService.createBook(req.body);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Book Created Success fully",
        data:result
    })
})

// **********get-all-Book************
const getAllBook=catchAsync(async(req: Request, res: Response)=>{
    const result=await BookService.getAllBook();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Get All Book Success fully",
        data:result
    })
})
// **********get-single-Book************
const getSingleBook=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const result=await BookService.getSingleBook(id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Get Single Book Success fully",
        data:result
    })
})
// **********get-Books By CategoryId************
const getBooksByCategoryId = catchAsync(async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    const result = await BookService.getBooksByCategoryId(categoryId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Books with associated category data fetched successfully',
      data: result,
    });
  });
// **********update-Book************
const updateBook=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const payload=req.body
    const result=await BookService.updateBook(id,payload);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Updated Book Success fully",
        data:result
    })
})
// **********delete-Book************
const deleteBook=catchAsync(async(req: Request, res: Response)=>{
    const {id}=req.params
    const result=await BookService.deleteBook(id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Deleted Book Success fully",
        data:result
    })
})

export const BookController={
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
    getBooksByCategoryId
}