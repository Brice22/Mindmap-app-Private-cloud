require('reflect-metadata');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001, "0.0.0.0");
  console.log('NestJS backend running on http://localhost:3001');
}
bootstrap();
