import { Controller, Get, Body, Param, Post, HttpCode, Query } from '@nestjs/common';

/**
 * @param @Body POST请求专用
 * @param @Param  GET /:id 专用
 * @param @Query  GET query专用
 */

@Controller('home')
export class HomeController {

    @Get('/')
    @HttpCode(200)
    index(@Query() param: { queryParameters: string }): string {
        console.log('@GET请求!', param);
        return `GET-请求 $${param.queryParameters}`;
    };

    @Get('/use')
    use(): Array<number | string> {
        return [1, 2, 3, 4, '@abc'];
    };

    @Post('/')
    @HttpCode(200)
    testPost(@Body() body: { data: string }): string {
        console.log('@POST请求!', body);
        return `POST-请求 ${body.data}`;
    };


}
