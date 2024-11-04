import { RecProduct } from "@prisma/client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { Counter } from "../../counter/Counter";
import { cn } from "@/lib/utils";

interface RecItemProps {
  className?: string;
  recProduct: RecProduct;
}

export const RecItem: FC<RecItemProps> = ({ className, recProduct }) => {
  const [recValue, setRecValue] = useState(0);
  const recValuePlus = (type: "plus" | "minus") =>
    type == "plus" ? setRecValue(recValue + 1) : setRecValue(recValue - 1);

  return (
    <div
      className={cn(
        "flex flex-col gap-3 items-center justify-start",
        className
      )}
    >
      <div className="">
        <Image
          width={192}
          height={192}
          priority
          alt={recProduct.name}
          src={recProduct.imageUrl}
        />
      </div>
      <p className="w-[192px] text-[13px] h-[40px] text-center">
        {recProduct.name}
      </p>
      <Counter onClick={recValuePlus} value={recValue} recValue={true} />
      <div className="opacity-50">{recProduct.price}₽</div>
    </div>
  );
};
