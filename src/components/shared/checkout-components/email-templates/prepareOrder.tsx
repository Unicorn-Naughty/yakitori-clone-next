import * as React from "react";

interface EmailTemplateProps {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PrepareOrderTemplate: React.FC<EmailTemplateProps> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Заказ, №{orderId}!</h1>
    <p>
      Оплатите заказ на сумму {totalAmount} Р. Перейдите
      <a href={paymentUrl}> по этой ссылке</a> для оплаты заказа.
    </p>
  </div>
);
