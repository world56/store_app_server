import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  /**
   * 
   * @param appService  依赖注入
   */
  constructor(
    private readonly appService: AppService
  ) { };

  @Get()
  getHello(): string {
    return this.appService.getHello();
  };

  @Get('/state')
  getState(): string {
    return 'hi,this is state';
  };

}
