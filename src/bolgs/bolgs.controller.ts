import { Controller, Get, Post } from '@nestjs/common';

@Controller('bolgs')
export class BolgsController {

    @Get()
    index(): string[] {
        return ['1', '2', '3'];
    };


    @Post()
    create() {
        return {
            success: true
        };
    };


    @Get(':id')
    bolgsDetails() {
        return '获取博客详情';
    };

}
