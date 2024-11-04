import { Container, Title } from "@/components/shared";
import PaidList from "@/components/shared/checkout-components/paid-items/PaidList";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Якитория | Заказ приянт",
};
const page = () => {
  return (
    <Container>
      <Title text="Заказ приянт" className={cn("my-[60px]")} size="xl" />
      <PaidList/>
    </Container>
  );
};

export default page;
