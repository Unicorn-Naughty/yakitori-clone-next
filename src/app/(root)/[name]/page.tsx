import React from "react";
import { prisma } from "../../../../prisma/prisma-client";
import { Container, ProductsItem, Title } from "@/components/shared";
import { LINKS_NAMES } from "@/components/constants/Constants";

import { notFound } from "next/navigation";

const page = async ({
  params,
}: {
  params: {
    name: string;
  };
}) => {
  const pageTextTitle = LINKS_NAMES.find((item) =>
    item.routeName.includes(params.name)
  )?.name;

  const category = await prisma.category.findFirst({
    where: {
      name: params.name,
    },
    include: {
      products: {
        include: {
          variants: true,
        },
      },
    },
  });
  if (!LINKS_NAMES.find((item) => item.routeName.includes(params.name))?.name) {
    return notFound();
  }
  return (
    <Container className="px-[20px]">
      <Title
        text={pageTextTitle ? pageTextTitle : ""}
        className="my-[60px]"
        size="xl"
      />

      <div className="flex flex-wrap  mb-[40px] dark:text-white">
        {category?.products.map((item, i) => (
          <ProductsItem
            key={i}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.variants[0].price}
            weight={item.variants[0].weight}
          />
        ))}
      </div>
    </Container>
  );
};

export default page;
