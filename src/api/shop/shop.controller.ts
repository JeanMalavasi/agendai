
import { Body, Controller, Param, Post, Put, Query } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopIn } from '../dto/in/shop';
import { ShopOut } from '../dto/out/shop';

@Controller('/shop')
export class ShopController {
   constructor(private readonly shopService: ShopService) {}

   @Post()
   async createShop(@Body() shop: ShopIn): Promise<ShopOut> {
      const userShop = await this.shopService.createShop(shop)      
      return userShop
   }

   @Put(':id')
   async editProfile(@Body() shop: ShopIn, @Param('id') id): Promise<ShopOut> {
      const userShop = await this.shopService.editProfile(shop, id)      
      return userShop
   }
}
