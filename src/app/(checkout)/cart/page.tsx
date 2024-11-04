import { Container, Title } from "@/components/shared";
import { CartList } from "@/components/shared/checkout-components/cart-items/CartList";
import { cn } from "@/lib/utils";
import React from "react";
import { prisma } from "../../../../prisma/prisma-client";

const page = async () => {
  const recProd = await prisma.recProduct.findMany();
  const foodAppliances = await prisma.foodAppliances.findMany()
  return (
    <Container>
      <Title text="Корзина" className={cn("my-[60px]")} size="xl" />
      <CartList className="p-5" recProducts={recProd} foodAppliances={foodAppliances } />
    </Container>
  );
};

export default page;
