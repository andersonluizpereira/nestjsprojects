import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import * as compression from 'compression';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.use(compression());
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();