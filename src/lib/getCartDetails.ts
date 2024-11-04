
import { CartDTO } from "@/app/services/dto/cart.dto";
import { calcCartItems } from "./calcCartItems";
export interface CartStateItem {
    id: number,
    quantity: number,
    price: number,
    name: string,
    disabled: boolean,
    variantName: string,
    imageUrl: string,
}
interface ReturnProps {
    items: CartStateItem[]
    totalAmount: number
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
    const items = data.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        disabled: false,
        name: item.productItem.product.name,
        variantName: item.productItem.variantName,
        imageUrl: item.productItem.product.imageUrl,
        price: calcCartItems(item),

    })) as CartStateItem[]
    return {
        items,
        totalAmount: data.totalAmount,

    }
}