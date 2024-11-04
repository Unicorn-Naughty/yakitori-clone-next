
import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { PaymentCallbackData } from '../../../../../@types/yookassa';
import { prisma } from '../../../../../prisma/prisma-client';
import { CartItemDTO } from '@/app/services/dto/cart.dto';
import { sendEmail } from '@/lib/sendEmailt';
import { SuccessOrderTemplate } from '@/components/shared/checkout-components/email-templates/succesOrder';

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as PaymentCallbackData;
        console.log(body.object.status);

        const order = await prisma.order.findFirst({
            where: {
                id: Number(body.object.metadata.order_id),
            },
        });

        if (!order) {
            return NextResponse.json({ error: 'Order not found' });
        }

        await prisma.order.update({
            where: {
                id: order.id,
            },
            data: {
                status:OrderStatus.SUCCEEDED
            },
        });
        const items = JSON.parse(order.items as string) as CartItemDTO[];



        await sendEmail(
            order.email,
            'Yakitroia | Заказ успешно оформлен 🎉',
            SuccessOrderTemplate({ orderId: order.id, items, totalAmount: order.totalAmount }),
        );
    } catch (error) {
        console.log('[Checkout Callback] Error:', error);
        return NextResponse.json({ error: 'Server error' });
    }
}