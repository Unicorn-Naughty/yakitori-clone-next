import { CartStateItem } from "@/lib/getCartDetails";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface OrderPageItemProps {
  className?: string;
  item: CartStateItem;
}

export const OrderPageItem: FC<OrderPageItemProps> = ({ className, item }) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center dark:text-white text-black pb-[20px] mb-[20px] border-b border-[#666]",
        className
      )}
    >
      <div className="">{item.name}</div>
      <div className="flex">
        <div className="mr-[15px] text-[#666] w-[60px]">{item.quantity} шт.</div>
        <div>{item.price}₽</div>
      </div>
    </div>
  );
};
