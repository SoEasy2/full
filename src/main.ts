import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import Config from './config/config'
import * as cookieParser from 'cookie-parser';


async function start() {
  const PORT = process.env.PORT || Config.host.port ;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('pinktada')
      .setDescription('Documentation REST API')
      .setVersion('1.0.0')
      .addTag('pinktada')
      .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  app.use(cookieParser())
  app.enableCors({origin:'http://localhost:3000', credentials:true})
  await app.listen(PORT, ()=>console.log(`Started server on port = ${PORT}`));
}
start();
