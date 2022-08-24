import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ShopController,],
    providers: [
        ShopService,],
})
export class ShopModule { }
