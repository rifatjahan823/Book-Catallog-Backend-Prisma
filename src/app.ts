import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import cors from 'cors'
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';

//middleware
const app:Application =express();
app.use(cors());

//parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//globalError
app.use(globalErrorHandler);

//-------*****router*****---------
app.use('/api/v1',router)

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Not Found',
      errorMessages: [
        {
          path: req.originalUrl,
          message: 'API Not Found',
        },
      ],
    });
    next();
  });
  

export default app



