import { NestFactory } from '@nestjs/core';
import { AppModule } from './entrance/app.module';

/**
 * @bootstrap 服务器主入口
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
};

bootstrap();