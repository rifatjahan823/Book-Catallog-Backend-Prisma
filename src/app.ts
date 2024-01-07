import express from 'express'
import cors from 'cors'

//middleware
const app =express();
app.use(cors());

//parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//globalError
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
//   });

//-------*****router*****---------
// app.use('api/v1')



export default app



