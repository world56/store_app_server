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


    /**
     * 获取首页轮播
     */
    @Get('/getSwiper')
    getSwiper() {
        return [
            {
                "name": '测试1',
                "path": 'https://img20.360buyimg.com/babel/s590x470_jfs/t1/143671/13/779/56208/5ee77a4eE2c43007a/e208f572863d3384.jpg'
            },
            {
                "name": '测试2',
                "path": 'https://img14.360buyimg.com/pop/s590x470_jfs/t1/118475/13/9913/31481/5ee1e6bcE3f86cb18/3e771d066e7f349b.jpg'
            },
            {
                "name": '测试3',
                "path": 'https://img14.360buyimg.com/pop/s590x470_jfs/t1/129988/5/568/60031/5ece7096Efecabaef/3c234c60cf2bdf21.jpg'
            },
        ];
    };

}
