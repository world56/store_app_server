import { Module } from '@nestjs/common';
import { BolgsController } from './bolgs.controller';

/**
 * @BolgsModule 博客API
 * 这里仅是一些 DEMO 并不参与主要业务流程
 */

@Module({
    controllers: [BolgsController]
})
export class BolgsModule { }
