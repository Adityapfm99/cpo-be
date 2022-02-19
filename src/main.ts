import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;
  app.enableCors();
  await app.listen(3001);
  console.log(`===== Server listening on port ${port} =====`);
}
bootstrap();
