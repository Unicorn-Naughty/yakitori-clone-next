import { CartItemDTO } from "@/app/services/dto/cart.dto";

export const calcCartItems = (item: CartItemDTO)=>{
    return item.productItem.price * item.quantity
}