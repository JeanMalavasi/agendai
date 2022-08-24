import { UserIn } from "./user"

export type ShopIn = UserIn & {
   cnpj: string
   endereco: string
}