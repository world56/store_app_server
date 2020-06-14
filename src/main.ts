import { NestFactory } from '@nestjs/core';
import { AppModule } from './entrance/app.module';
declare const module: any;
/**
 * @bootstrap 服务器主入口
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
  app.enableCors();
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
};

bootstrap();