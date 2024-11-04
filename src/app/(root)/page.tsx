import { Container, Title, InfoBlock } from "@/components/shared";
import { prisma } from "../../../prisma/prisma-client";
import { ProductsItem } from "@/components/shared";
export default async function Home() {
  
  const recCategory = await prisma.category.findFirst({
    where: {
      id: 1,
    },
    include: {
      products: {
        include: {
          variants: true,
        },
      },
    },
  });

  return (
    <Container className="px-[20px]">
      <Title text="Рекомендуем" className="my-[60px]" size="xl" />
      <div className="flex flex-wrap  dark:text-white">
        {recCategory?.products.map((item, i) => (
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
      <InfoBlock />
    </Container>
  );
}
