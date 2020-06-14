import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {


    @Get('/')
    index(): string {
        console.log('run');
        return "你好，home页面!2222!!!@@@";
    };


    @Get('/use')
    use(): Array<number | string> {
        return [1, 2, 3, 4, '@abc'];
    };


}
