import { Injectable } from '@nestjs/common';
import { ShopMapper } from 'src/helpers/mappers/shop';
import { ShopIn } from '../dto/in/shop';
import { ShopOut } from '../dto/out/shop';

@Injectable()
export class ShopService {
   async createShop(shop: ShopIn): Promise<ShopOut> {
      const shopIn = ShopMapper.toDomain(shop)
      console.log("Chama algo para salvar os dados no banco")
      return ShopMapper.fromDomain({...shop, "id": 1})
   }
   async editProfile(shop: ShopIn, id: string): Promise<ShopOut> {
      const shopIn = ShopMapper.toDomain(shop)
      console.log("Chama algo para editar os dados no banco")
      return ShopMapper.fromDomain({...shopIn, "id": Number(id)})
   }
   deleteProfile(id: number): boolean {
      console.log("Chama algo para deletar os dados no banco")
      return true
   }
}
