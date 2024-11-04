import { CartItemDTO } from "@/app/services/dto/cart.dto";
import * as React from "react";

interface EmailTemplateProps {
  orderId: number;
  totalAmount: number;
  items: CartItemDTO[];
}

export const SuccessOrderTemplate: React.FC<EmailTemplateProps> = ({
  orderId,
  totalAmount,
  items,
}) => (
  <div>
    <h1>Спасибо за покупку! 🐲</h1>
    <p>Ваш заказ №{orderId} оплачен.Список товаров:</p>
    <hr />
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price} Р
        </li>
      ))}
    </ul>
    <b>Итого: {totalAmount} Р</b>
  </div>
);
