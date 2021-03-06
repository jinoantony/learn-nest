import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(`${__dirname}/../../public`)
  app.setBaseViewsDir(`${__dirname}/../../views`)
  app.setViewEngine('hbs')
  
  await app.listen(3000);
}
bootstrap();
