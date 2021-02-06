import { NestFactory } from '@nestjs/core';
import winston from './modules/logger/index';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  app.useLogger(winston);
  await app.listen(3000);
}
bootstrap();
