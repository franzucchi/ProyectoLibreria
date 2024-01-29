import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Proyecto Libreria')
  .setDescription('LibreriaBD')
  .setVersion('1.0')
  .addTag('libro')
  .addTag('editorial')
  .addTag('autor')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('libreria', app, document, {
  explorer: true,
  swaggerOptions:{filter: true, showRequestDuration: true }
});

  await app.listen(3000);
}



bootstrap();
