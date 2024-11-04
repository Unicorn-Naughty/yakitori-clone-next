import { notFound } from "next/navigation";
import { prisma } from "../../../../../prisma/prisma-client";
import { ProductPage } from "@/components/shared";

const page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
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

  return <ProductPage product={product} />;
};

export default page;
