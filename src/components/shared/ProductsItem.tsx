import React, { FC } from "react";
import Link from "next/link";
import { Title } from "./Title";
import { Button } from "../ui";

import Image from "next/image";

export interface ProductsItemProps {
  className?: string;
  id: number;
  price: number;

  imageUrl: string;
  weight: number;

  name: string;
}

export const ProductsItem: FC<ProductsItemProps> = ({
  name,
  weight,
  id,

  price,
  imageUrl,
}) => {



  
  return (
    <Link
      className="w-[280px]  border border-[#999898] hover:border-red-500 dark:border dark:border-[#4a4a4a] dark:hover:border-[#cccc28] transition-all ease-linear "
      href={`/product/${id}`}
    >
      <div className="w-[278px]">
        <Image
          src={imageUrl}
          width={296}
          height={296}
          priority
          alt="Картинка товара"
        />
      </div>
      <div className="p-[20px]">
        <Title
          text={name}
          size="sm"
          className="mt-[15px] text-[18px] mb-2 h-[60px]  "
        />
        <span className="block  text-[#666] ">{weight} г</span>
        <div className="flex justify-between items-center mt-[15px]">
          <div>{`${price} ₽`}</div>
          <Button>Заказать</Button>
        </div>
      </div>
    </Link>
  );
};
