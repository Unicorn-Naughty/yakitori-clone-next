import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import { updateCartAmount } from "@/lib/updateCartAmount";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const data = await req.json() as { quantity: number }
        const token = req.cookies.get('cartToken')?.value

        if (!token) {
            return NextResponse.json({ message: "Cart token not found" })
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!cartItem) {
            return NextResponse.json({ message: "Cart item not found" })
        }

        await prisma.cartItem.update({
            where: {
                id: Number(params.id)
            },
            data: {
                quantity: data.quantity
            }
        })

        const updatedUserCart = await updateCartAmount(token)
        return NextResponse.json(updatedUserCart)
    } catch (error) {
        console.log('[CART_PATCH] Server error', error);
        return NextResponse.json({ message: "Не удалось обновить корзину" }, { status: 500 })
    }

}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = Number(params.id)
        const token = req.cookies.get('cartToken')?.value
        if (!token) {
            return NextResponse.json({ message: "Cart token not found" })
        }
        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id
            }
        })
        if (!cartItem) {
            return NextResponse.json({ message: "Cart item not found" })
        }

        await prisma.cartItem.delete({
            where: {
                id
            }
        })
        const updatedUserCart = await updateCartAmount(token)
        return NextResponse.json(updatedUserCart)
    } catch (error) {
        console.log('[CART_DELETE] Server error', error);
        return NextResponse.json({ message: "Не удалось удалить товар в корзине" }, { status: 500 })

    }
}