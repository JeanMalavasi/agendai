import { ShopModule } from './shop/shop.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ShopModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
