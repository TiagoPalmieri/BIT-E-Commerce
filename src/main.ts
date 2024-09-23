import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { AllExceptionsFilter } from './exceptionsHandler';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { json } from 'express';

async function bootstrap() {

  const httpsOptions = {
    key: fs.readFileSync('src/certificates/server.key'),
    cert: fs.readFileSync('src/certificates/server.cert'),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.use(json({ limit: '5mb' }));

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix("api/v2");
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

  app.use(helmet());

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  });

  // app.useGlobalFilters(new AllExceptionsFilter());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
