import React, { FC } from "react";
import { ProductsItemProps, ProductsItem } from "./ProductsItem";

interface ProductsListProps {
  className?: string;
  items: ProductsItemProps[];
}

export const ProductsList: FC<ProductsListProps> = ({ className, items }) => {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <ProductsItem
          key={i}
          name={item.name}
          imageUrl={item.imageUrl}
          id={item.id}
          price={item.price}
          weight={item.weight}
        />
      ))}
    </div>
  );
};


