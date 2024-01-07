import { Server } from "http";
import app from "./app";
import config from "./config";

async function bootstrap() {
  const server:Server=app.listen(config.port,()=>{
  console.log(`Server listening on ${config.port}`)
  })

  const existHandler=()=>{
    if(server){
       server.close(()=>{
        console.log('server close')
       })
    }
  }

const unexpectedErrorHandler= (error:unknown)=>{
    console.log(error)
    existHandler()
}
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGNTERM',()=>{
    console.log('SIGNTERM received');
    if(server){
        server.close()
    }
})

}

bootstrap();