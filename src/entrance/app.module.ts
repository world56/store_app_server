import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from '../home/home.module';
import { BolgsModule } from '../bolgs/bolgs.module';

@Module({
  imports: [HomeModule, BolgsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
