
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001, "0.0.0.0");
  console.log('NestJS backend running on http://localhost:3001');
}
bootstrap();
