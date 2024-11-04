import { Container, Title } from "@/components/shared";
import OrderPageList from "@/components/shared/checkout-components/order-items/OrderPageList";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Якитория | Оформление заказа'
}
const page = () => {
  return (
    <Container>
      <Title text="Оформление заказа" className={cn("my-[60px]")} size="xl" />
      <OrderPageList />
    </Container>
  );
};

export default page;
