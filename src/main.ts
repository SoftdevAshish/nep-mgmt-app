import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { appPort } from '../config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('nep-mgmt')
    .setDescription('Manage Client')
    .setVersion('1.0')
    .addTag('nep-mgmt')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(appPort);
}

bootstrap();
