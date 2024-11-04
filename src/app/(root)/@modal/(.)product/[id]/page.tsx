import React from "react";
import { prisma } from "../../../../../../prisma/prisma-client";
import { notFound } from "next/navigation";
import { ChooseProductModal } from "@/components/shared";

const ModalPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      variants: true,
    },
  });
  if (!product) {
    return notFound();
  }

  return <ChooseProductModal className="flex" product={product} />;
};

export default ModalPage;
