import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import * as compression from 'compression';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();