import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: fs.readFileSync(
        path.resolve(__dirname, '../underclub.com.ar.key'),
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, '../underclub.com.ar.crt'),
      ),
    },
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Under Club')
    .setDescription('Web Under Club')
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .addTag('agency')
    .addTag('residents')
    .addTag('episode')
    .addTag('event')
    .addTag('new')
    .addTag('podcast')
    .addTag('mail')
    .build();

  await app.listen(5000);
}
bootstrap();
