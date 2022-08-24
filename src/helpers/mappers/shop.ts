import { ShopIn } from "src/api/dto/in/shop";
import { ShopOut } from "src/api/dto/out/shop";

export class ShopMapper {
   public static toDomain(shop: ShopIn): ShopIn {
      return {
         "userName": shop.userName,
         "password": shop.password,
         "phone": shop.phone,
         "email": shop.email,
         "cnpj": shop.cnpj,
         "endereco": shop.endereco
      }
   }

   public static fromDomain(shop: ShopOut): ShopOut {
      return {
         "id": shop.id,
         "userName": shop.userName,
         "password": shop.password,
         "phone": shop.phone,
         "email": shop.email,
         "cnpj": shop.cnpj,
         "endereco": shop.endereco
      }
   }
}