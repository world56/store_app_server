import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('home')
export class HomeController {


    @Get('/')
    index(): string {
        return "你好，home页面";
    };


    @Get('/use')
    use(): number[] {
        return [1, 2, 3, 4];
    };


}
